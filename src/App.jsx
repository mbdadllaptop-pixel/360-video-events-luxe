import React from 'react';
import { ShoppingCart, Camera, Video, ArrowRight, Star, Clock, Share2, Zap, PlayCircle, Quote, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const App = () => {
  const assets = {
    logo: "https://static.wixstatic.com/media/18103d_834e96d59961421ab9ff6fdd0219c147~mv2.png/v1/fill/w_800,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/360VE%20logo_edited.png",
    heroVideo: "https://video.wixstatic.com/video/c660ae_864d017f261f474b8a76ba7d3a8a4c7e/720p/mp4/file.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&q=80&w=1200"
    ]
  };

  return (
    <div className="site-wrapper">
      {/* Navigation */}
      <nav className="glass" style={{
        position: 'fixed', top: '24px', left: '50%', transform: 'translateX(-50%)',
        width: 'calc(100% - 48px)', maxWidth: '1200px',
        zIndex: 1000, padding: '12px 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={assets.logo} alt="360 Video Events Logo" className="nav-logo" />
        </div>
        <div className="nav-links" style={{ display: 'flex', gap: '20px', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <a href="#services" className="hover-gold">Services</a>
          <a href="https://www.instagram.com/your360videoevents/?hl=en" target="_blank" rel="noopener noreferrer" className="hover-gold">Portfolio</a>
          <a href="#booking" className="hover-gold">Contact</a>
        </div>
        <button onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.75rem' }}>Book Now</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video-bg">
          <source src="https://video.wixstatic.com/video/18103d_619c514af41a4805b4c94b160e54160e/720p/mp4/file.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="section-subtitle glow-text">Exclusive Event Activations</span>
          <h1 className="hero-headline">
            The <span className="gold-gradient">Gold Standard</span> <br />
            of 360 Experiences
          </h1>
          <p className="hero-subheadline">
            Bespoke Cinematic Activations • Global Support
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ padding: '20px 60px' }}>View Packages</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <span className="section-subtitle">Our Expertise</span>
          <h2 className="section-title">Premium Hire Services</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}>
            {[
              {
                title: '360 Video Booth',
                price: 'From £300',
                desc: 'The ultimate interactive addition for weddings and corporate events.',
                features: ['Instant Video Sharing', 'Custom Branding overlays', 'Professional Studio Lighting', 'Dedicated on-site host'],
                icon: <Video size={28} style={{ color: 'hsl(var(--primary))' }} />
              },
              {
                title: 'Standard Photobooth',
                price: 'From £200',
                desc: 'A classic and fun addition to any event, offering instant prints and digital copies.',
                features: ['Compact Setup', 'Digital Sharing', 'Fun Props', 'Online Gallery'],
                icon: <Camera size={28} style={{ color: 'hsl(var(--primary))' }} />
              },
              {
                title: 'Event Photography',
                price: 'From £300',
                desc: 'Capturing the essence of your gathering with cinematic flair.',
                features: ['High-resolution digital delivery', 'Real-time gallery updates', 'Masterfully retouched images', 'Unlimited Day coverage'],
                icon: <Camera size={28} style={{ color: 'hsl(var(--primary))' }} />
              }
            ].map((service) => (
              <div key={service.title} className="glass glass-hover" style={{ padding: '48px' }}>
                <div style={{ marginBottom: '32px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.85rem', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.95rem', marginBottom: '24px' }}>{service.desc}</p>
                <div style={{ color: 'hsl(var(--primary))', fontWeight: 700, fontSize: '1.3rem', marginBottom: '32px', fontFamily: 'var(--font-modern)' }}>{service.price}</div>
                <ul style={{ listStyle: 'none', padding: '0', marginBottom: '40px' }}>
                  {service.features.map(f => (
                    <li key={f} style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'hsl(var(--text-muted))' }}>
                      <div style={{ width: '4px', height: '4px', background: 'hsl(var(--primary))', borderRadius: '50%' }}></div> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ width: '100%', marginTop: 'auto' }}>Select Experience</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: 'hsla(var(--background), 0.5)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-subtitle">Real Impact</span>
            <h2 className="section-title">Client Love</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {[
              { name: "Sarah Jenkins", role: "Wedding Planner", quote: "The 360 booth was the undisputed highlight. The output quality is purely cinematic." },
              { name: "Mark Thompson", role: "Corporate Events Manager", quote: "Highly professional and engaging. Our brand activation exceeded all engagement metrics." }
            ].map((t, i) => (
              <div key={i} className="glass" style={{ padding: '48px', position: 'relative' }}>
                <Quote size={40} style={{ color: 'hsl(var(--primary))', marginBottom: '24px', opacity: 0.2 }} />
                <p style={{ fontSize: '1.2rem', marginBottom: '40px', fontStyle: 'italic', fontFamily: 'var(--font-luxury)' }}>"{t.quote}"</p>
                <div>
                  <div style={{ fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.75rem', color: 'hsl(var(--primary))' }}>{t.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-muted))', marginTop: '4px' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="booking" style={{ background: 'hsl(var(--background))' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start' }}>
          <div>
            <span className="section-subtitle" style={{ textAlign: 'left' }}>Get in Touch</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>Let's Work <br /> <span className="gold-gradient">Together</span></h2>
            <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '48px', fontSize: '1.1rem', lineHeight: 1.8 }}>Connect with us to receive a bespoke proposal for your next high-profile event.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><Mail size={20} style={{ color: 'hsl(var(--primary))' }} /> your360videoevent@hotmail.com</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><Phone size={20} style={{ color: 'hsl(var(--primary))' }} /> 07931720209</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><MapPin size={20} style={{ color: 'hsl(var(--primary))' }} /> Mayfair, London</div>
            </div>
          </div>
          <form
            action="https://formspree.io/f/mwvrlbol"
            method="POST"
            className="glass"
            style={{
              padding: 'clamp(20px, 5vw, 60px)',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '20px'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <input
                name="name"
                placeholder="Name"
                required
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '18px', borderRadius: '4px', color: '#fff', outline: 'none', fontFamily: 'var(--font-modern)' }}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '18px', borderRadius: '4px', color: '#fff', outline: 'none', fontFamily: 'var(--font-modern)' }}
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '18px', borderRadius: '4px', color: '#fff', outline: 'none', fontFamily: 'var(--font-modern)' }}
              />
              <div style={{ position: 'relative' }}>
                <input
                  name="event_date"
                  type="date"
                  required
                  style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '18px', borderRadius: '4px', color: '#fff', outline: 'none', fontFamily: 'var(--font-modern)', colorScheme: 'dark' }}
                />
                <span style={{ position: 'absolute', top: '-10px', left: '12px', background: 'hsl(var(--background))', padding: '0 5px', fontSize: '0.65rem', color: 'hsl(var(--primary))', letterSpacing: '1px' }}>EVENT DATE</span>
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your event..."
              rows={4}
              required
              style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '18px', borderRadius: '4px', color: '#fff', outline: 'none', marginBottom: '32px', fontFamily: 'var(--font-modern)', resize: 'none' }}
            ></textarea>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Inquiry</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 0', borderTop: '1px solid var(--glass-border)', background: 'hsl(var(--background))' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <img src={assets.logo} alt="Logo" style={{ height: '50px', marginBottom: '32px' }} />
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginBottom: '40px', color: 'hsl(var(--text-muted))', fontSize: '0.8rem', letterSpacing: '2px' }}>
            <a href="https://www.instagram.com/your360videoevents/?hl=en" target="_blank" rel="noopener noreferrer" className="hover-gold">INSTAGRAM</a>
            <a href="#" className="hover-gold">LINKEDIN</a>
            <a href="#" className="hover-gold">VIMEO</a>
          </div>
          <div style={{ color: 'hsl(var(--text-muted))', fontSize: '0.75rem', letterSpacing: '1px' }}>
            © {new Date().getFullYear()} 360 VIDEO EVENTS LTD. LONDON, UK.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

