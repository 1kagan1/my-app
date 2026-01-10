'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');

    try {
      await emailjs.send(
        'service_4a2rxpa',
        'template_rtfc87m',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-black tracking-tighter">
            <span className="text-white">KAĞAN</span>
            <span className="text-blue-500">SOFOĞLU</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#home" className="hover:text-blue-500 transition-colors duration-300">ANA SAYFA</a>
            <a href="#about" className="hover:text-blue-500 transition-colors duration-300">HAKKIMDA</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors duration-300">PROJELER</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors duration-300">İLETİŞİM</a>
          </div>
          
          {/* Desktop CTA Button */}
          <a 
            href="#contact" 
            className="hidden md:block px-6 py-2.5 bg-blue-500 hover:bg-blue-600 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            İletişim Kur
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-blue-500 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium hover:text-blue-500 transition-colors"
              >
                ANA SAYFA
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium hover:text-blue-500 transition-colors"
              >
                HAKKIMDA
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium hover:text-blue-500 transition-colors"
              >
                PROJELER
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium hover:text-blue-500 transition-colors"
              >
                İLETİŞİM
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-sm font-semibold text-center transition-all duration-300"
              >
                İletişim Kur
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-8 relative overflow-hidden pt-20 sm:pt-0">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px]"></div>

        <div className="max-w-6xl text-center relative z-10 w-full">
          <div className="mb-6 sm:mb-8 inline-block">
            <span className="px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs sm:text-sm font-semibold tracking-wide">
              WEB HİZMETLERİ &amp; YAZILIM GELİŞTİRME
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-6 sm:mb-8 tracking-tighter px-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-500">
              Kağan
            </span>
            <br />
            <span className="text-white/20"></span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-white/60 mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Piksel-mükemmel dijital deneyimler yaratan ve son teknolojileri kullanarak 
            yenilikçi web çözümleri geliştiren bir yazılım geliştiricisiyim.
          </p>
          <div className="flex gap-4 sm:gap-6 justify-center flex-wrap px-4">
            <a 
              href="#projects" 
              className="group px-6 sm:px-10 py-4 sm:py-5 bg-white text-black rounded-full font-bold text-sm sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            >
              Projelerimi Gör
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
            </a>
            <a 
              href="#contact" 
              className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-white/20 rounded-full font-bold text-sm sm:text-lg transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:scale-105"
            >
              Benimle İletişime Geç
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-16 sm:py-32 relative">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-20 items-center">
            <div>
              <div className="inline-block mb-4 sm:mb-6">
                <span className="text-blue-500 text-xs sm:text-sm font-bold tracking-widest">BEN KİMİM</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 sm:mb-8 tracking-tighter leading-none">
                Fikirleri<br />
                <span className="text-white/20">Gerçeğe Dönüştür</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-white/60 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong className="text-white">5+ yıl</strong> deneyime sahip, olağanüstü dijital ürünler 
                  geliştiren ve harika tasarımı güçlü işlevsellikle birleştiren tutkulu bir yazılım geliştiricisiyim.
                </p>
                <p>
                  Benim yaklaşımım basit: yalnızca görsel olarak etkileyici değil, 
                  aynı zamanda sezgisel, erişilebilir ve performanslı deneyimler yaratmak.
                </p>
              </div>
              <div className="mt-8 sm:mt-10 flex gap-3 sm:gap-4 flex-wrap">
                <div className="px-4 sm:px-6 py-3 bg-white/5 border border-white/10 rounded-xl flex-1 min-w-[120px]">
                  <div className="text-2xl sm:text-3xl font-black text-blue-500">50+</div>
                  <div className="text-xs sm:text-sm text-white/60">Proje</div>
                </div>
                <div className="px-4 sm:px-6 py-3 bg-white/5 border border-white/10 rounded-xl flex-1 min-w-[120px]">
                  <div className="text-2xl sm:text-3xl font-black text-blue-500">5+</div>
                  <div className="text-xs sm:text-sm text-white/60">Yıl Tecrübe</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 mt-8 md:mt-0">
              {[
                { name: 'React & Next.js', level: 95 },
                { name: 'TypeScript', level: 90 },
                { name: 'UI/UX Tasarımı', level: 85 },
                { name: 'Node.js & API\'ler', level: 88 },
                { name: 'Python & Django', level: 82 },
                { name: 'Bulut & DevOps', level: 78 }
              ].map((skill, i) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-sm sm:text-base">{skill.name}</span>
                    <span className="text-blue-500 font-bold text-sm sm:text-base">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-16 sm:py-32">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-12 sm:mb-20">
            <span className="text-blue-500 text-xs sm:text-sm font-bold tracking-widest">PORTFÖY</span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mt-3 sm:mt-4 tracking-tighter">
              Seçilmiş <span className="text-white/20">Çalışmalar</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              { 
                title: 'Dönerci Web Sitesi', 
                category: 'Full Stack', 
                color: 'from-orange-500 to-yellow-500', 
                url: 'https://donerciweb.vercel.app',
                image: 'https://donerciweb.vercel.app'
              },
              { title: 'Çiğköfteci', category: 'Frontend', color: 'from-purple-500 to-pink-500', url: null, image: 'https://cigkofteci-web.vercel.app' },
              { title: 'Mobil Bankacılık Uygulaması', category: 'UI/UX Tasarımı', color: 'from-orange-500 to-red-500', url: null, image: null },
              { title: 'Kripto Tracker', category: 'Web3', color: 'from-green-500 to-emerald-500', url: null, image: null }
            ].map((project, i) => {
              const CardComponent = project.url ? 'a' : 'div';
              const cardProps = project.url 
                ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <CardComponent key={i} {...cardProps} className="block">
                  <div 
                    className="group relative bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/30 transition-all duration-500 overflow-hidden cursor-pointer hover:scale-[1.02]"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="h-48 sm:h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center overflow-hidden">
                        {project.image ? (
                          <iframe 
                            src={project.image}
                            title={project.title}
                            className="w-full h-full border-0"
                            loading="lazy"
                          />
                        ) : (
                          <div className={`w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${project.color} rounded-full blur-2xl opacity-50`}></div>
                        )}
                      </div>
                      
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2 tracking-tight">{project.title}</h3>
                          <span className="text-blue-400 text-xs sm:text-sm font-semibold">{project.category}</span>
                        </div>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300 group-hover:rotate-45 flex-shrink-0">
                          <span className="text-lg sm:text-xl">↗</span>
                        </div>
                      </div>
                      
                      <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base">
                        En son teknolojiler ve en iyi uygulamalar kullanılarak geliştirilmiş modern, ölçeklenebilir bir çözüm.
                      </p>
                      
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold">React</span>
                        <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold">Next.js</span>
                        <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold">TypeScript</span>
                      </div>
                    </div>
                  </div>
                </CardComponent>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-16 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        
        <div className="max-w-4xl w-full relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-blue-500 text-xs sm:text-sm font-bold tracking-widest">İLETİŞİME BAŞLA</span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mt-3 sm:mt-4 mb-4 sm:mb-6 tracking-tighter px-4">
              Birlikte Çalışalım<br />
              <span className="text-white/20">Harika Şeyler Yaratalım</span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 px-4">
              Bir proje fikriniz mi var? Birlikte muhteşem bir şey yaratalım.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label className="block mb-2 sm:mb-3 font-semibold text-xs sm:text-sm tracking-wide">ADINIZ</label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl focus:border-blue-500 focus:outline-none focus:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div>
                <label className="block mb-2 sm:mb-3 font-semibold text-xs sm:text-sm tracking-wide">E-MAİL</label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl focus:border-blue-500 focus:outline-none focus:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block mb-2 sm:mb-3 font-semibold text-xs sm:text-sm tracking-wide">MESAJINIZ</label>
              <textarea 
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl focus:border-blue-500 focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none text-sm sm:text-base"
                placeholder="Projenizden bahsedin..."
              />
            </div>

            {status && (
              <div className={`text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base ${status.includes('✓') ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'}`}>
                {status}
              </div>
            )}

            <button 
              type="submit"
              className="w-full px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === 'Gönderiliyor...'}
            >
              {status === 'Gönderiliyor...' ? 'Gönderiliyor...' : 'Mesaj Gönder →'}
            </button>
          </form>

          <div className="mt-12 sm:mt-16 flex justify-center gap-4 sm:gap-6">
            {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
              <a 
                key={social}
                href="#"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 hover:scale-110"
              >
                <span className="text-xs font-bold">{social.slice(0, 2)}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 text-center border-t border-white/10 px-4">
        <p className="text-white/40 text-xs sm:text-sm">
          © 2026 <span className="font-bold">Kagan</span>. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
}