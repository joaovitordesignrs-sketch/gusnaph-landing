// Scout'd V3 — Editorial / Nike-inspired
// Based on Figma frame "Scout'd — Desktop · V3 (Editorial/Nike)" with manual edits applied
// Sections: Nav, Hero, Feature 1/2/3, Footer (no Press, no CTA Final, no Partners, no Community)

const { useState, useEffect, useRef } = React;

const ArrowUR = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowR = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function Wordmark({ className = '', size = 22 }) {
  return (
    <span className={`wordmark ${className}`} style={{ fontSize: size }}>SCOUT'D</span>
  );
}

// ============ NAV ============
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          <img src="assets/scoutd-icon.png" alt="Scout'd" />
          <Wordmark />
        </a>
        <div className="nav-links">
          <a href="#app">The App</a>
          <a href="#discovered">Discovered</a>
          <a href="#community">Community</a>
          <a href="#press">Press</a>
        </div>
        <div className="nav-right">
          <a href="#" className="nav-lang">UK · EN</a>
          <a href="#cta" className="btn btn-primary">
            Get the app <ArrowUR size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============ HERO ============
function Hero() {
  return (
    <section className="hero">
      <div className="hero-video">
        <video
          autoPlay muted loop playsInline
          ref={el => { if (el && el.paused) el.play().catch(()=>{}); }}
          poster="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1800&q=80"
        >
          <source src="assets/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" />
      <div className="hero-glow" />

      <div className="hero-content">
        <h1 className="hero-headline">
          <span className="word">OWN</span>
          <span className="word">YOUR GAME</span>
        </h1>
        <p className="hero-body">
          A season-by-season football record built around consistency, development
          and competition — owned entirely by the player.
        </p>
        <div className="hero-buttons">
          <a href="#cta" className="btn btn-primary btn-primary-lg">
            Create Your Profile <ArrowUR />
          </a>
          <a href="#community" className="btn btn-ghost">
            Join The Community
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ FEATURE BLOCK ============
function Feature({ number, kicker, headLines, accentIndex, body, linkText, mockup, reverse }) {
  return (
    <section className={`feature ${reverse ? 'reverse' : ''}`}>
      {reverse && <div className="feature-glow" />}
      <span className={`feature-num ${reverse ? 'right' : 'left'}`} aria-hidden="true">{number}</span>
      <div className="feature-grid">
        <div className="feature-copy">
          <div className="mono feature-kicker">{kicker}</div>
          <h2 className="feature-head">
            {headLines.map((line, i) => (
              <span key={i} className={i === accentIndex ? 'accent' : ''}>{line}</span>
            ))}
          </h2>
          <p className="feature-body">{body}</p>
          <a href="#" className="feature-link">
            {linkText} <ArrowR size={13} />
          </a>
        </div>
        <div className="feature-mockup">
          <img src={mockup} alt="" />
        </div>
      </div>
    </section>
  );
}

// ============ FEATURE 2 — special tags variant ============
function FeatureTags({ number, kicker, headLines, accentIndex, body, tags, mockup }) {
  return (
    <section className="feature reverse">
      <div className="feature-glow" />
      <span className="feature-num right" aria-hidden="true">{number}</span>
      <div className="feature-grid">
        <div className="feature-copy">
          <div className="mono feature-kicker">{kicker}</div>
          <h2 className="feature-head">
            {headLines.map((line, i) => (
              <span key={i} className={i === accentIndex ? 'accent' : ''}>{line}</span>
            ))}
          </h2>
          <p className="feature-body">{body}</p>
          <ul className="tags">
            {tags.map(t => <li key={t} className="tag">{t}</li>)}
          </ul>
        </div>
        <div className="feature-mockup">
          <img src={mockup} alt="" />
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  const cols = [
    { title: 'ABOUT', links: ['Our story', 'Manifesto', 'Stories'] },
    { title: 'COMPANY', links: ['Careers', 'Press', 'Investors'] },
    { title: 'LEGAL', links: ['Terms', 'Privacy', 'Contact'] },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Wordmark size={36} />
            <p>Empowering every player to unlock their potential.</p>
          </div>
          {cols.map(col => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map(l => <li key={l}><a href="#">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <span>© 2026 Scout'd Ltd · England &amp; Wales</span>
          <span>Built for players</span>
        </div>
      </div>
    </footer>
  );
}

// ============ APP ============
function App() {
  return (
    <>
      <Nav />
      <Hero />

      <Feature
        number="01"
        kicker="YOUR FOOTBALL RECORD"
        headLines={['A RECORD', 'THAT LASTS']}
        body="Every match, performance and contribution builds towards a digital football record you own — season after season, club after club."
        linkText="See how it works"
        mockup="assets/device-05.png"
      />

      <FeatureTags
        number="02"
        kicker="UNLOCK YOUR POTENTIAL"
        headLines={['UNLOCK YOUR', 'POTENTIAL']}
        accentIndex={1}
        body="A new competitive edge through live leaderboards, seasonal rankings, performance tracking and match ratings."
        tags={['LEADERBOARDS', 'RANKINGS', 'PERFORMANCE', 'MATCH RATINGS', 'CONTRIBUTIONS']}
        mockup="assets/device-04.png"
      />

      <Feature
        number="03"
        kicker="EVERY PLAYER HAS A STORY"
        headLines={['EVERY PLAYER', 'HAS A STORY']}
        body="Breakthrough years. Setbacks. Consistency. Resilience. Growth. We give players a place to own it all."
        linkText="Read player stories"
        mockup="assets/device-06.png"
      />

      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
