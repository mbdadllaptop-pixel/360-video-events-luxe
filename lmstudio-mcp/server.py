import asyncio
import httpx
import sys
import logging
from mcp.server.fastmcp import FastMCP

# Set up logging to stderr so it doesn't interfere with stdio transport
logging.basicConfig(level=logging.ERROR, stream=sys.stderr)
logger = logging.getLogger("lmstudio_mcp")

# Initialize FastMCP Server
mcp = FastMCP("LM Studio")

# Default LM Studio Local Server URL
LM_STUDIO_URL = "http://localhost:1234/v1"

@mcp.tool()
async def query_local_model(prompt: str, model_id: str = None) -> str:
    """
    Query the local LLM running in LM Studio.
    If multiple models are loaded, you can specify model_id.
    """
    async with httpx.AsyncClient(timeout=120.0) as client:
        # If no model_id provided, try to get the first available one
        if not model_id:
            try:
                models_resp = await client.get(f"{LM_STUDIO_URL}/models")
                models = models_resp.json().get("data", [])
                if models:
                    model_id = models[0]["id"]
                else:
                    return "No models currently loaded in LM Studio. Please load a model in LM Studio first."
            except Exception as e:
                return f"Error connecting to LM Studio: {str(e)}. Make sure 'Local Server' is started on port 1234 in LM Studio."

        try:
            logger.info(f"Querying model: {model_id}")
            response = await client.post(
                f"{LM_STUDIO_URL}/chat/completions",
                json={
                    "model": model_id,
                    "messages": [{"role": "user", "content": prompt}],
                    "temperature": 0.7
                }
            )
            response.raise_for_status()
            result = response.json()
            return result["choices"][0]["message"]["content"]
        except Exception as e:
            return f"Error querying model {model_id}: {str(e)}"

@mcp.tool()
async def list_local_models() -> str:
    """List all models currently loaded in LM Studio."""
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(f"{LM_STUDIO_URL}/models")
            response.raise_for_status()
            models = response.json().get("data", [])
            if not models:
                return "No models currently loaded in LM Studio."
            
            output = "Available Models in LM Studio:\n"
            for model in models:
                output += f"- {model['id']} (Type: {model.get('object', 'N/A')})\n"
            return output
        except Exception as e:
            return f"Error listing models: {str(e)}. Is the LM Studio Local Server running?"

if __name__ == "__main__":
    # Start the FastMCP server
    mcp.run(transport="stdio")
