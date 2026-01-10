'use client';

import { useEffect, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('reveal-in')),
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');
    try {
      await emailjs.send(
        'service_4a2rxpa',
        'template_rtfc87m',
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        'QeE6-pinNHLDu0WVk'
      );
      setStatus('Mesaj başarıyla gönderildi! ✓');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('Hata oluştu. Lütfen tekrar deneyin.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white noise-bg relative">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-premium border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-white">KAĞAN </span>
            <span className="text-[#0066cc]">SOFOĞLU</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#projects" className="hover:text-[#0066cc] transition-all relative group">
              Projeler
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0066cc] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="hover:text-[#0066cc] transition-all relative group">
              İletişim
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0066cc] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="btn-corporate px-6 py-2.5 rounded-lg font-semibold text-white">
              Teklif Al
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 hover:text-[#0066cc] transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden glass-premium border-t border-white/10">
            <div className="px-4 py-6 space-y-3">
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 hover:text-[#0066cc] transition">Projeler</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 hover:text-[#0066cc] transition">İletişim</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block btn-corporate py-3 rounded-lg text-center font-semibold">Teklif Al</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      {/* Hero */}
<section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 overflow-hidden pt-32">
        {/* Subtle Orbs */}
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-[#0066cc]/20 rounded-full orb-float" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] bg-[#004080]/15 rounded-full orb-float" style={{ animationDelay: '3s' }} />
        
        {/* Grid BG */}
        <div className="absolute inset-0 grid-bg" />

        <div className="max-w-6xl w-full text-center space-y-10 relative z-10">
          <div className="reveal">
            <span className="shimmer px-6 py-3 rounded-full glass-premium inline-block text-[#0066cc] text-xs font-semibold tracking-widest uppercase border border-[#0066cc]/20">
              Profesyonel Web Çözümleri
            </span>
          </div>
          
          <h1 className="reveal text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.1]">
            <span className="hero-text-gradient">Kağan</span>
            <br />
            <span className="text-white">Web Geliştirici</span>
          </h1>
          
          <p className="reveal text-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Kurumsal standartlarda, ölçeklenebilir ve güvenli web uygulamaları ile işletmenizi geleceğe taşıyoruz.
          </p>
          
          <div className="reveal flex flex-wrap gap-5 justify-center items-center pt-4">
            <a href="#projects" className="btn-corporate px-10 py-5 rounded-lg font-semibold text-lg inline-flex items-center gap-3 group">
              <span>Projelerimizi İnceleyin</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a href="#contact" className="px-10 py-5 rounded-lg font-semibold text-lg glass-premium hover:scale-[1.02] transition-all border border-white/10">
              İletişime Geçin
            </a>
          </div>

          {/* Stats */}
          <div className="reveal grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-16">
            {[
              { label: 'Tamamlanan Proje', value: '120+' },
              { label: 'Mutlu Müşteri', value: '50+' },
              { label: 'Yıllık Deneyim', value: '5+' }
            ].map((stat, i) => (
              <div key={i} className="glass-premium rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-black text-[#0066cc] mb-1">{stat.value}</div>
                <div className="text-sm text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-4 sm:px-8 py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="reveal text-[#0066cc] text-xs font-bold tracking-widest uppercase">Referanslarımız</span>
            <h2 className="reveal text-4xl sm:text-6xl font-black tracking-tight mt-4">
              Başarılı <span className="text-[#0066cc]">Projelerimiz</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Dönerci Web Platformu',
                category: 'Full Stack Geliştirme',
                url: 'https://donerciweb.vercel.app',
                image: '/doner-onizle.png',
                tech: ['Next.js', 'React', 'Tailwind CSS']
              },
              {
                title: 'Çiğköfteci Dijital Platformu',
                category: 'Frontend Geliştirme',
                url: 'https://cigkofteci-web.vercel.app',
                image: '/cigkofte-onizle.png',
                tech: ['React', 'TypeScript', 'API Integration']
              },
            ].map((project, i) => {
              const CardComponent = project.url ? 'a' : 'div';
              const cardProps = project.url ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' } : {};
              
              return (
                <CardComponent key={i} {...cardProps} className="reveal block group">
                  <div className="card-3d card-shine glass-premium rounded-2xl p-2 hover:border-[#0066cc]/40 transition-all border border-white/10">
                    <div className="relative">
                      {/* Image */}
                      <div className="relative h-72 rounded-xl overflow-hidden bg-white/5 mb-5">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          priority={i === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div className="px-4 pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold tracking-tight mb-2">{project.title}</h3>
                            <span className="text-[#0066cc] text-sm font-semibold">{project.category}</span>
                          </div>
                          <div className="w-11 h-11 bg-[#0066cc] rounded-lg flex items-center justify-center group-hover:scale-110 transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, j) => (
                            <span key={j} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardComponent>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative px-4 sm:px-8 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0066cc]/5 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="reveal text-[#0066cc] text-xs font-bold tracking-widest uppercase">İletişim</span>
            <h2 className="reveal text-4xl sm:text-6xl font-black tracking-tight mt-4">
              Projenizi<br />
              <span className="text-[#0066cc]">Birlikte Hayata Geçirelim</span>
            </h2>
          </div>

          <div className="reveal glass-premium rounded-2xl p-8 sm:p-12 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid sm:grid-cols-2 gap-7">
                <div>
                  <label className="block mb-3 font-semibold text-sm uppercase tracking-wide text-white/80">Ad Soyad</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-[#0066cc] focus:outline-none transition-all"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block mb-3 font-semibold text-sm uppercase tracking-wide text-white/80">E-posta</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-[#0066cc] focus:outline-none transition-all"
                    placeholder="ornek@sirket.com"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-3 font-semibold text-sm uppercase tracking-wide text-white/80">Mesajınız</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-[#0066cc] focus:outline-none transition-all resize-none"
                  placeholder="Projeniz hakkında detaylı bilgi verin..."
                />
              </div>

              {status && (
                <div className={`text-center p-4 rounded-lg font-semibold ${status.includes('✓') ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-[#0066cc]/10 border border-[#0066cc]/30 text-[#0066cc]'}`}>
                  {status}
                </div>
              )}

              <button
                type="submit"
                className="btn-corporate w-full px-12 py-5 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === 'Gönderiliyor...'}
              >
                {status === 'Gönderiliyor...' ? 'Gönderiliyor...' : 'Mesajı Gönder'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10">
        <p className="text-white/50 text-sm">
          © 2026 <span className="font-bold text-white">Kağan Sofoğlu</span>. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
}