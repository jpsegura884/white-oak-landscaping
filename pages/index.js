import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const SERVICES = [
  {
    title: 'Tree Service',
    img: 'https://whiteoakrichmond.com/wp-content/uploads/2015/03/tree-work.jpg',
    icon: '🌳',
    desc: 'Full-service tree care from removal to pruning. Licensed arborists serving Richmond since 1995.',
    items: ['Tree Removal', 'Stump Removal', 'Tree Trimming & Pruning', 'Emergency Storm Damage', 'Crown Thinning & Reduction', 'Hazardous Tree Assessment'],
  },
  {
    title: 'Landscaping',
    img: 'https://whiteoakrichmond.com/wp-content/uploads/2015/03/landscaping-richmond-va.jpg',
    icon: '🌿',
    desc: 'Complete landscape design, installation and maintenance for residential and commercial properties.',
    items: ['Landscape Design & Installation', 'Grading & Clearing', 'Mowing & Edging', 'Mulching & Seeding', 'Irrigation Systems', 'Fertilizing & Weed Control'],
  },
  {
    title: 'Demolition & Hauling',
    img: 'https://whiteoakrichmond.com/wp-content/uploads/2015/03/demolition-service-richmond-va.jpg',
    icon: '🏗️',
    desc: 'Large and small demolition projects handled with full equipment and professional crews.',
    items: ['Garage & Structure Demolition', 'Mobile Home Removal', 'Pool Removal', 'Junk Removal', 'Excavating Services', 'Environmental Removal'],
  },
  {
    title: 'Concrete & Paving',
    img: 'https://whiteoakrichmond.com/wp-content/uploads/2015/03/asphalt-driveway-richmond-va.jpg',
    icon: '🛣️',
    desc: 'Driveways, walkways, and patios in asphalt, concrete, gravel, and aggregate.',
    items: ['Asphalt Driveways', 'Concrete Driveways', 'Gravel Driveways', 'Aggregate Walkways', 'Patio Installation', 'Driveway Seal Coating'],
  },
  {
    title: 'Hauling & Deliveries',
    img: 'https://whiteoakrichmond.com/wp-content/uploads/2015/03/landscaping-richmond-va.jpg',
    icon: '🚛',
    desc: 'Fast delivery of landscape materials or hauling away of unwanted debris and junk.',
    items: ['Fill Dirt', 'Topsoil', 'Gravel', 'Mulch', 'Sand', 'Firewood'],
  },
  {
    title: 'Seasonal Services',
    img: 'https://whiteoakrichmond.com/wp-content/uploads/2015/03/tree-work.jpg',
    icon: '❄️',
    desc: 'Year-round property maintenance to keep your home or business looking its best every season.',
    items: ['Snow Removal', 'De-Icing', 'Leaf Vacuuming', 'Gutter Cleaning', 'Sidewalk Clearing', 'Seasonal Clean-Up'],
  },
];

const TESTIMONIALS = [
  {
    text: "I have utilized Liston Webb's services for many years now and he continues to be the best in his field. He is always professional, timely, reasonable, and does exactly what he says he's going to do. Liston recently removed 14 very large and very overgrown red tips from the perimeter of my yard and did an exceptional job.",
    name: 'George Winston',
    location: 'Richmond, VA',
    initials: 'GW',
  },
  {
    text: "We had a massive tree that overhung our house whose roots had damaged the retaining wall and driveway. Mr. Webb stated his company could do the whole job for us. He and his team did a wonderful job and even finished up the project sooner than expected. Now when I look out of my kitchen window, it makes me happy!",
    name: 'D. Williams',
    location: 'Richmond, VA',
    initials: 'DW',
  },
  {
    text: "I would highly recommend White Oak Landscaping. Mr. Webb and his team did a great job on my landscaping and driveway addition. He was also very kind, patient and a pleasure to work with. I look forward to working with him again in the future.",
    name: 'T. Melton',
    location: 'Richmond, VA',
    initials: 'TM',
  },
  {
    text: "Having worked in insurance dealing with contractors, I was truly impressed when I hired White Oak Landscaping & Grading LLC. Excellent professional service. Liston was so patient and kind. He took the time to explain why some of my ideas were not good, which saved me money. Would highly recommend.",
    name: 'J. Verdolino',
    location: 'Midlothian, VA',
    initials: 'JV',
  },
  {
    text: "Mr. Webb contacted me immediately and came out for a consultation. He is very knowledgeable and was able to show me what was possible within my strict budget. Our new driveway is beautiful and the walkway is even better than before. We are very pleased with the work and would certainly recommend these guys!",
    name: 'S. Foster',
    location: 'Richmond, VA',
    initials: 'SF',
  },
];

const SERVICE_AREAS = {
  'Richmond City': ['Court End', 'Jackson Ward', 'Monroe Ward', 'The River District', 'Shockhoe Slip'],
  'Northside': ['Barton Heights', 'Bellevue', 'Ginter Park', 'Highland Terrace', 'Edgewood', 'Providence Park'],
  'East End': ['Church Hill', 'Fairmount', 'Fulton Hill', 'Shockhoe Bottom', 'Tobacco Row', 'Union Hill'],
  'West End': ['Henrico', 'Glen Allen', 'Short Pump', 'Wyndham', 'Twin Hickory', 'Innsbrook', 'Tuckahoe'],
  'Southside': ['Chesterfield', 'Midlothian', 'Bon Air', 'Stony Point', 'Chester', 'Colonial Heights'],
  'Goochland': ['Oak Grove', 'Tuckahoe Plantation', 'Rochambeau Farm', 'Manakin Sabot'],
};

export default function Home() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>White Oak Landscaping &amp; Grading, LLC — Richmond VA</title>
        <meta name="description" content="Full landscaping services for Richmond VA and surrounding areas. Landscape design, tree service, grading & clearing, demolition & hauling. Licensed & insured. Call 804-920-2303." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://whiteoakrichmond.com/wp-content/uploads/2017/06/white-oak-landscaping-logo.gif" />
        <meta property="og:title" content="White Oak Landscaping & Grading, LLC" />
        <meta property="og:description" content="Richmond VA's #1 choice for landscaping, tree service, demolition, and more. Over 20 years of exceeding excellence." />
        <meta property="og:image" content="https://whiteoakrichmond.com/wp-content/uploads/2015/03/landscaping-richmond-va.jpg" />
      </Head>

      {/* Emergency Banner */}
      <div className="emergency-banner">
        🚨 24/7 Emergency Tree Service Available —{' '}
        <a href="tel:8049202303">Call 804-920-2303 Now</a>
      </div>

      {/* Topbar */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-phones">
            <span>📞 Main: <a href="tel:8049202303" style={{color:'#e6a93a'}}>804-920-2303</a></span>
            <span>South: <a href="tel:8049807959" style={{color:'#cde8d5'}}>804-980-7959</a></span>
            <span>North: <a href="tel:8045075232" style={{color:'#cde8d5'}}>804-507-5232</a></span>
            <span>West: <a href="tel:8047402845" style={{color:'#cde8d5'}}>804-740-2845</a></span>
            <span>East: <a href="tel:8044156162" style={{color:'#cde8d5'}}>804-415-6162</a></span>
          </div>
          <div className="topbar-email">
            <a href="mailto:Liston.Webb@whiteoakrichmond.com">✉ Liston.Webb@whiteoakrichmond.com</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header>
        <div className="header-inner">
          <a href="/" className="logo-wrap">
            <img
              src="https://whiteoakrichmond.com/wp-content/uploads/2017/06/white-oak-landscaping-logo.gif"
              alt="White Oak Landscaping & Grading, LLC"
              height={64}
            />
          </a>
          <nav>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#testimonials">Reviews</a>
            <a href="#areas">Service Areas</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="header-cta">Free Quote</a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">🏆 Angie's List Super Service Award Winner</div>
            <h1>
              Richmond's #1 Choice for<br />
              <span>Landscaping & Tree Service</span>
            </h1>
            <p className="hero-subtitle">
              Exceeding excellence for over 20 years. Licensed &amp; insured, owner-operated, serving all of greater Richmond, VA.
            </p>
            <div className="hero-phones">
              <div>📞 Main Office: <a href="tel:8049202303">804-920-2303</a></div>
            </div>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Get a Free Quote</a>
              <a href="#services" className="btn-outline">View Our Services</a>
            </div>
          </div>

          {/* Inline Quote Form */}
          <div className="hero-form-card">
            <h3>Request a Free Quote</h3>
            <p>We'll get back to you within 24 hours</p>
            {submitted ? (
              <div style={{textAlign:'center', padding:'24px 0', color:'#2d5a3d'}}>
                <div style={{fontSize:'2.5rem', marginBottom:'12px'}}>✅</div>
                <strong style={{fontSize:'1.1rem'}}>Thank you!</strong>
                <p style={{marginTop:'8px', color:'#6b7c68', fontSize:'0.9rem'}}>We'll be in touch shortly. Or call us at <a href="tel:8049202303" style={{color:'#2d5a3d', fontWeight:700}}>804-920-2303</a>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Select Service Needed</option>
                    <option>Tree Service</option>
                    <option>Landscaping</option>
                    <option>Demolition</option>
                    <option>Concrete & Paving</option>
                    <option>Hauling & Deliveries</option>
                    <option>Seasonal Services</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="notes" placeholder="Describe your project..." value={formData.notes} onChange={handleChange} />
                </div>
                <button type="submit" className="form-submit">Request Quote →</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="trust-inner">
          <div className="trust-item">
            <div className="trust-icon">🏅</div>
            <strong>20+ Years Experience</strong>
            <span>Serving Richmond since 1995</span>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🛡️</div>
            <strong>Licensed & Insured</strong>
            <span>Full coverage for your protection</span>
          </div>
          <div className="trust-item">
            <div className="trust-icon">👤</div>
            <strong>Owner Operated</strong>
            <span>Liston Webb on every project</span>
          </div>
          <div className="trust-item">
            <div className="trust-icon">⭐</div>
            <strong>Award Winning</strong>
            <span>Angie's List Super Service Award</span>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🚨</div>
            <strong>24/7 Emergency</strong>
            <span>Storm damage response</span>
          </div>
          <div className="trust-item">
            <a href="https://www.bbb.org/richmond/business-reviews/tree-service/white-oak-landscaping-grading-llc-in-glen-allen-va-63391311/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://seal-richmond.bbb.org/seals/blue-seal-153-100-white-oak-landscaping-grading-llc-63391311.png"
                alt="BBB Accredited Business"
                style={{ height: 60 }}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="services-bg" id="services">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Our Services</h2>
            <p className="section-desc">From tree service to full landscape design, we handle every aspect of your outdoor space — one call gets it all done.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card">
                <img src={s.img} alt={s.title} className="service-img" />
                <div className="service-body">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="service-list">
                    {s.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <a href="#contact" className="service-link">Get a Quote →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-bg" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-text">
              <div className="section-label">About Us</div>
              <h2 className="section-title">Exceeding Excellence Since 1995</h2>
              <p>
                White Oak Landscaping &amp; Grading, LLC has been the Richmond area's most trusted landscaping and tree service provider for over 20 years. We service a wide variety of commercial and residential clients throughout the region surrounding Richmond, Virginia.
              </p>
              <p>
                All of our employees have been trained and licensed to perform each one of our services, and are consistently measured on their performance to maintain the highest level of quality. White Oak is licensed and insured and is truly the number one choice for all your landscaping &amp; tree service needs.
              </p>
              <p>
                White Oak has several divisions to handle different types of projects — from tree work to grading and clearing to residential and commercial landscaping, and everything in between.
              </p>
              <div className="about-owner">
                <div className="about-owner-icon">👤</div>
                <div>
                  <strong>Liston Webb</strong>
                  <span>Owner, White Oak Landscaping &amp; Grading, LLC</span>
                  <br />
                  <span style={{fontSize:'0.82rem', opacity:0.75, marginTop:4, display:'block'}}>
                    "As the owner, I'm on hand for all projects to ensure they are completed with the highest standards. Your satisfaction is our top priority."
                  </span>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">20+</div>
                <div className="stat-label">Years Serving Richmond</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">6</div>
                <div className="stat-label">Service Divisions</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction Guaranteed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Emergency Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-bg" id="testimonials">
        <div className="section-inner">
          <div className="section-header center">
            <div className="section-label">Customer Reviews</div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-desc">Don't just take our word for it — here's what Richmond homeowners and businesses have to say about White Oak.</p>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="quote-mark">"</div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-location">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="areas-bg" id="areas">
        <div className="section-inner">
          <div className="section-header center">
            <div className="section-label">Coverage</div>
            <h2 className="section-title">Service Areas</h2>
            <p className="section-desc">We proudly serve Richmond City and all surrounding counties. If you don't see your area listed, give us a call!</p>
          </div>
          <div className="areas-grid">
            {Object.entries(SERVICE_AREAS).map(([region, locations]) => (
              <div key={region} className="area-group">
                <h4>{region}</h4>
                <ul>
                  {locations.map((loc) => <li key={loc}>{loc}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-bg" id="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-label">Get In Touch</div>
              <h2 className="section-title">Request a Free Estimate</h2>
              <p>Ready to transform your property? Fill out the form or give us a call — we'll have someone out to assess your project quickly.</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">📍</div>
                  <div className="contact-detail-text">
                    <strong>Address</strong>
                    1506 Edenburry Drive, Henrico, VA 23233
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📞</div>
                  <div className="contact-detail-text">
                    <strong>Main Office</strong>
                    <a href="tel:8049202303" style={{color:'#e6a93a', fontWeight:700}}>804-920-2303</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📞</div>
                  <div className="contact-detail-text">
                    <strong>Regional Lines</strong>
                    South: 804-980-7959 · North: 804-507-5232<br />
                    West: 804-740-2845 · East: 804-415-6162
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">✉</div>
                  <div className="contact-detail-text">
                    <strong>Email</strong>
                    <a href="mailto:Liston.Webb@whiteoakrichmond.com" style={{color:'#e6a93a'}}>Liston.Webb@whiteoakrichmond.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <h3>Get Your Free Quote</h3>
              <p>Tell us about your project and we'll get back to you within 24 hours.</p>
              {submitted ? (
                <div style={{textAlign:'center', padding:'32px 0'}}>
                  <div style={{fontSize:'3rem', marginBottom:'12px'}}>✅</div>
                  <strong style={{fontSize:'1.2rem', color:'#2d5a3d'}}>Quote Request Received!</strong>
                  <p style={{marginTop:'12px', color:'#6b7c68'}}>We'll be in touch within 24 hours. For urgent needs, call <a href="tel:8049202303" style={{color:'#2d5a3d', fontWeight:700}}>804-920-2303</a>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <input type="text" name="name" placeholder="First & Last Name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <select name="service" value={formData.service} onChange={handleChange} required>
                      <option value="">— Select Service Needed —</option>
                      <option>Tree Service</option>
                      <option>Tree Removal</option>
                      <option>Stump Removal</option>
                      <option>Landscaping</option>
                      <option>Grading & Clearing</option>
                      <option>Demolition</option>
                      <option>Concrete / Paving</option>
                      <option>Hauling & Deliveries</option>
                      <option>Seasonal Services</option>
                      <option>Emergency Service</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea name="notes" placeholder="Describe your project — the more detail, the better!" rows={5} value={formData.notes} onChange={handleChange} />
                  </div>
                  <button type="submit" className="form-submit">Submit Quote Request →</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <img
                src="https://whiteoakrichmond.com/wp-content/uploads/2017/06/white-oak-landscaping-logo.gif"
                alt="White Oak Landscaping"
              />
              <p>Full landscaping services for Richmond VA and surrounding areas. Licensed &amp; insured. Exceeding excellence for over 20 years.</p>
              <br />
              <a href="https://www.bbb.org/richmond/business-reviews/tree-service/white-oak-landscaping-grading-llc-in-glen-allen-va-63391311/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://seal-richmond.bbb.org/seals/blue-seal-153-100-white-oak-landscaping-grading-llc-63391311.png"
                  alt="BBB Accredited Business"
                  className="bbb-seal"
                />
              </a>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li><a href="#services">Tree Service</a></li>
                <li><a href="#services">Landscaping</a></li>
                <li><a href="#services">Demolition</a></li>
                <li><a href="#services">Concrete & Paving</a></li>
                <li><a href="#services">Hauling & Deliveries</a></li>
                <li><a href="#services">Seasonal Services</a></li>
                <li><a href="#services">Emergency Services</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <ul>
                <li><a href="tel:8049202303">Main: 804-920-2303</a></li>
                <li><a href="tel:8049807959">South: 804-980-7959</a></li>
                <li><a href="tel:8045075232">North: 804-507-5232</a></li>
                <li><a href="tel:8047402845">West: 804-740-2845</a></li>
                <li><a href="tel:8044156162">East: 804-415-6162</a></li>
                <li><a href="mailto:Liston.Webb@whiteoakrichmond.com">Email Us</a></li>
              </ul>
              <br />
              <h5>Address</h5>
              <p style={{fontSize:'0.84rem', opacity:0.7, lineHeight:1.6}}>
                1506 Edenburry Drive<br />Henrico, VA 23233
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} White Oak Landscaping &amp; Grading, LLC. All rights reserved.</span>
            <span>Licensed &amp; Insured · Serving Richmond VA since 1995</span>
          </div>
        </div>
      </footer>
    </>
  );
}
