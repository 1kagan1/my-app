'use client';

import { useEffect, useState } from 'react';

const projects = [
  {
    number: '01',
    tech: 'iOS · SwiftUI · Supabase',
    kicker: 'Study & focus',
    title: 'Valedict',
    description: 'Çalışma oturumları, hedefler, gruplar ve performans takibini tek yerde toplayan iOS çalışma uygulaması.',
    footer: 'Native iOS',
    featured: true,
  },
  {
    number: '02',
    tech: 'React · TypeScript · Cloudflare',
    kicker: 'Study tracker',
    title: 'Odak',
    description: 'YKS çalışma sürelerini, denemeleri ve ilerlemeyi takip etmek için geliştirdiğim local-first web uygulaması.',
    footer: 'Projeyi aç',
    href: 'https://study-web.kagan0ft.workers.dev/',
  },
  {
    number: '03',
    tech: 'Open source',
    kicker: 'Web experiments',
    title: 'GitHub Projects',
    description: 'Web arayüzleri, küçük araçlar ve farklı teknoloji denemelerinden oluşan açık kaynak çalışmalarım.',
    footer: 'Tüm repolar',
    href: 'https://github.com/1kagan1?tab=repositories',
  },
];

const stack = [
  ['01', 'Swift / SwiftUI', 'Native iOS uygulamaları'],
  ['02', 'Supabase / PostgreSQL', 'Auth, veri ve backend'],
  ['03', 'TypeScript / React', 'Web ürünleri ve arayüzler'],
  ['04', 'Cloudflare', 'Workers, D1 ve dağıtım'],
  ['05', 'GitHub', 'Sürüm kontrolü ve teslim'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const reveals = document.querySelectorAll('.reveal');
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach((el) => observer.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add('visible'));
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="noise" aria-hidden="true" />

      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="Ana sayfa" onClick={closeMenu}>
          <span className="brand-mark">KS</span>
          <span className="brand-name">Kağan Sofoğlu</span>
        </a>

        <button
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          type="button"
          aria-label="Menüyü aç"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span /><span />
        </button>

        <nav id="site-nav" className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Ana navigasyon">
          <a href="#work" onClick={closeMenu}>Projeler</a>
          <a href="#stack" onClick={closeMenu}>Teknolojiler</a>
          <a href="#about" onClick={closeMenu}>Hakkımda</a>
          <a className="nav-cta" href="mailto:kagansofoglu@icloud.com" onClick={closeMenu}>İletişim</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> Independent developer</p>
            <h1>Fikirleri çalışan<br /><span>ürünlere dönüştürüyorum.</span></h1>
            <p className="hero-lead">
              Mobil uygulamalar ve web ürünleri geliştiriyorum. Tasarım, ürün mantığı ve altyapıyı tek bir yerde buluşturup sade, hızlı ve gerçekten kullanılabilir işler çıkarmaya odaklanıyorum.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Projeleri gör</a>
              <a className="button button-ghost" href="https://github.com/1kagan1" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>

          <aside className="hero-panel reveal" aria-label="Özet">
            <div className="panel-topline"><span>Şu an</span><span className="live-pill">Building</span></div>
            <div className="panel-focus"><p>FOCUS</p><strong>iOS & web products</strong></div>
            <div className="panel-grid">
              <div><span>Mobile</span><strong>SwiftUI</strong></div>
              <div><span>Backend</span><strong>Supabase</strong></div>
              <div><span>Web</span><strong>TypeScript</strong></div>
              <div><span>Infra</span><strong>Cloudflare</strong></div>
            </div>
          </aside>
        </section>

        <section id="work" className="section-shell section-block">
          <div className="section-heading reveal">
            <p className="eyebrow">Selected work</p>
            <h2>Üzerinde çalıştığım projeler.</h2>
            <p>Deneysel işlerden üretime yaklaşan uygulamalara kadar, son dönemde enerjimi verdiğim birkaç proje.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.number} className={`project-card ${project.featured ? 'project-featured' : ''} reveal`}>
                <div className="project-meta"><span>{project.number}</span><span>{project.tech}</span></div>
                <div className="project-body">
                  <p className="project-kicker">{project.kicker}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-footer">
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer">{project.footer}</a>
                  ) : <span>{project.footer}</span>}
                  <span className="arrow">↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="section-shell section-block stack-section">
          <div className="section-heading compact reveal">
            <p className="eyebrow">Stack</p>
            <h2>Kullandığım araçlar.</h2>
          </div>
          <div className="stack-list reveal">
            {stack.map(([number, title, description]) => (
              <div className="stack-row" key={number}><span>{number}</span><strong>{title}</strong><p>{description}</p></div>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell section-block about-section">
          <div className="about-card reveal">
            <p className="eyebrow">About</p>
            <h2>Az katman, net fikir, çalışan ürün.</h2>
            <div className="about-copy">
              <p>Bir projede yalnızca kodun çalışmasıyla ilgilenmiyorum. Arayüzün anlaşılır olması, verinin doğru akması ve ürünün gerçek bir ihtiyaca cevap vermesi benim için aynı problemin parçaları.</p>
              <p>Yeni teknolojileri küçük deneylerle test edip işe yarayanları gerçek projelere taşıyorum. Bu site de yaptıklarımı tek yerde toplamak için var.</p>
            </div>
          </div>
        </section>

        <section className="section-shell contact-section reveal">
          <p className="eyebrow">Contact</p>
          <h2>Bir şey inşa ediyorsan,<br />konuşabiliriz.</h2>
          <div className="contact-links">
            <a href="mailto:kagansofoglu@icloud.com">kagansofoglu@icloud.com <span>↗</span></a>
            <a href="https://github.com/1kagan1" target="_blank" rel="noreferrer">github.com/1kagan1 <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <span>© {new Date().getFullYear()} Kağan Sofoğlu</span>
        <a href="#top">Yukarı ↑</a>
      </footer>
    </>
  );
}
