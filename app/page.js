'use client';

import { useEffect, useState } from 'react';

const projects = [
  {
    number: '01',
    tech: 'iOS · SwiftUI · Supabase',
    kicker: 'iOS',
    title: 'Valedict',
    description: 'YKS çalışırken kendi düzenimi takip etmek için başladığım, sonradan gruplar, hedefler ve çalışma istatistikleri eklediğim iOS uygulaması.',
    footer: 'App Store için hazırlanıyor',
    featured: true,
  },
  {
    number: '02',
    tech: 'React · TypeScript · Cloudflare',
    kicker: 'Web',
    title: 'Odak',
    description: 'Çalışma süresi, denemeler ve ilerleme takibi için yaptığım web uygulaması. Veriler cihazda çalışıyor, hesapla birlikte senkronize de olabiliyor.',
    footer: 'Siteyi aç',
    href: 'https://study-web.kagan0ft.workers.dev/',
  },
  {
    number: '03',
    tech: 'GitHub',
    kicker: 'Diğer işler',
    title: 'GitHub',
    description: 'Bitmiş projeler, yarım kalmış denemeler ve yeni bir şey öğrenirken açtığım repolar burada. Her şey vitrinlik değil, zaten mesele de biraz o.',
    footer: 'Repolara bak',
    href: 'https://github.com/1kagan1?tab=repositories',
  },
];

const stack = [
  ['01', 'Swift / SwiftUI', 'iOS tarafında en çok kullandığım'],
  ['02', 'Supabase / PostgreSQL', 'Auth ve veritabanı'],
  ['03', 'TypeScript / React', 'Web projeleri'],
  ['04', 'Cloudflare', 'Workers, D1 ve hosting işleri'],
  ['05', 'GitHub', 'Kod, sürüm kontrolü ve deploy'],
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

  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="noise" aria-hidden="true" />

      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="Ana sayfa" onClick={closeMenu}>
          <span className="brand-mark">KS<span className="brand-star">✳</span></span>
          <span className="brand-name">Kağan Sofoğlu</span>
        </a>

        <button
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span /><span />
        </button>

        <nav id="site-nav" className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Ana navigasyon">
          <a href="#hal" onClick={closeMenu}>HÂL Belgesel</a>
          <a href="#work" onClick={closeMenu}>Projeler</a>
          <a href="#stack" onClick={closeMenu}>Kullandıklarım</a>
          <a href="#about" onClick={closeMenu}>Hakkımda</a>
          <a className="nav-cta" href="mailto:kagansofoglu@icloud.com" onClick={closeMenu}>Mail</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> Kağan Sofoğlu / Kişisel arşiv</p>
            <h1>Biraz kod.<br /><span>Biraz hikâye.</span></h1>
            <p className="hero-lead">
              Bir yanda geliştirdiğim uygulamalar, diğer yanda HÂL Belgesel. Ürettiklerimi, merak ettiklerimi ve anlatmak istediklerimi burada bir araya getiriyorum.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#hal">HÂL’i keşfet <span>↗</span></a>
              <a className="button button-ghost" href="https://github.com/1kagan1" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>

          <a className="hero-panel reveal" href="https://www.youtube.com/@halbelgesel1" target="_blank" rel="noreferrer" aria-label="HÂL Belgesel YouTube kanalını aç">
            <div className="panel-topline"><span>BAĞIMSIZ BELGESEL KANALI</span><span>01 / HÂL</span></div>
            <div className="hal-emblem" aria-hidden="true"><span className="emblem-orbit" /><span className="emblem-word">HÂL</span><span className="emblem-caption">BİR HAKİKAT YOLCULUĞU</span></div>
            <div className="panel-bottom"><span>Görünenin ardındaki hikâyeler.</span><span className="play-icon">↗</span></div>
          </a>
        </section>

        <section id="hal" className="section-shell section-block hal-section">
          <div className="section-heading reveal"><p className="eyebrow">01 — HÂL Belgesel</p><h2>Her hikâye,<br /><em>bir arayış.</em></h2><p>HÂL, belgesel kanalım. Tarihin, tasavvufun ve insanın izinde bir hakikat yolculuğu.</p><a className="text-link" href="https://www.youtube.com/@halbelgesel1" target="_blank" rel="noreferrer">YouTube’da HÂL <span>↗</span></a></div>
          <div className="film-grid">
            {[
              ['x_tMpAHSmUM', '17:37', 'Yüzünü Neden Gizledi?', 'Ahmed Bedevî'],
              ['PbvjWlp-gQU', '14:13', '309 Yıllık Uykunun Sırrı', 'Ashab-ı Kehf'],
              ['AwiurGP98zM', '17:00', 'Tahtını Bırakan Kral', 'İbrahim bin Edhem'],
            ].map(([id, duration, title, subject], index) => (
              <a className="film-card reveal" key={id} href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer">
                <div className="film-still"><img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={`${subject} belgeselinin kapak görseli`} loading="lazy" width="480" height="360" /><span className="film-play" aria-hidden="true">▶</span><span className="film-duration">{duration}</span></div>
                <div className="film-meta"><span>HÂL / 0{index + 1}</span><span>Belgesel ↗</span></div><h3>{title}</h3><p>{subject}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="work" className="section-shell section-block">
          <div className="section-heading reveal">
            <p className="eyebrow">02 — Yazılım projeleri</p>
            <h2>Fikirden uygulamaya.</h2>
            <p>Bazıları hâlâ geliştiriliyor, bazıları sadece bir şey denemek için başladı. En çok uğraştıklarım bunlar.</p>
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
            <p className="eyebrow">Kullandıklarım</p>
            <h2>Genelde bunlarla çalışıyorum.</h2>
          </div>
          <div className="stack-list reveal">
            {stack.map(([number, title, description]) => (
              <div className="stack-row" key={number}><span>{number}</span><strong>{title}</strong><p>{description}</p></div>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell section-block about-section">
          <div className="about-card reveal">
            <p className="eyebrow">Hakkımda</p>
            <h2>Merakla başlıyor.
              Üreterek devam ediyor.</h2>
            <div className="about-copy">
              <p>Yazılıma böyle başladım sayılır. İhtiyacım olan küçük bir şey oluyor, mevcut seçenekleri sevmiyorum, sonra kendim yapmaya çalışırken iş büyüyor.</p>
              <p>Yazılımda bir fikri çalışan bir ürüne dönüştürmeyi seviyorum. HÂL Belgesel’de ise aynı merak, anlatmak istediğim hikâyelere yöneliyor. İkisinin de başlangıç noktası bir soru.</p>
            </div>
          </div>
        </section>

        <section className="section-shell contact-section reveal">
          <p className="eyebrow">İletişim</p>
          <h2>Yeni bir fikir,<br /><em>yeni bir hikâye.</em></h2>
          <div className="contact-links">
            <a href="mailto:kagansofoglu@icloud.com">kagansofoglu@icloud.com <span>↗</span></a>
            <a href="https://github.com/1kagan1" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://www.youtube.com/@halbelgesel1" target="_blank" rel="noreferrer">HÂL Belgesel <span>↗</span></a>
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
