'use client';

import { useEffect, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

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

  const handlePayment = async (serviceType: string, amount: string) => {
    const email = prompt('E-posta adresinizi girin:');
    if (!email) return;

    const phone = prompt('Telefon numaranızı girin (isteğe bağlı):');

    try {
      const response = await fetch('/api/paytr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          phone: phone || null,
          serviceType,
          amount: parseFloat(amount.replace('₺', '').replace('.', ''))
        }),
      });

      const data = await response.json();
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        alert('Ödeme başlatılamadı. Lütfen bilgilerinizi kontrol edin.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white noise-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#0066cc]/30 to-transparent rounded-full blur-3xl orb-float" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#0066cc]/20 to-transparent rounded-full blur-3xl orb-float" style={{ animationDelay: '5s' }} />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-premium border-b border-white/10 backdrop-blur-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-white">KAĞAN</span>
            <span className="text-[#0066cc] ml-2">SOFOĞLU</span>
          </div>
          
          <div className="hidden md:flex items-center gap-12 text-sm font-medium">
            <a href="#themes" className="hover:text-[#0066cc] transition-all relative group">
              Temalar
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0066cc] to-transparent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#pricing" className="hover:text-[#0066cc] transition-all relative group">
              Fiyatlar
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0066cc] to-transparent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="hover:text-[#0066cc] transition-all relative group">
              İletişim
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0066cc] to-transparent group-hover:w-full transition-all duration-300"></span>
            </a>
            <button onClick={() => document.getElementById('themes')?.scrollIntoView({ behavior: 'smooth' })} className="btn-corporate px-6 py-2.5 rounded-lg font-semibold text-white text-sm">
              Temaları İncele
            </button>
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
          <div className="md:hidden glass-premium border-t border-white/10 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-3">
              <a href="#themes" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 hover:text-[#0066cc] transition">Temalar</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 hover:text-[#0066cc] transition">Fiyatlar</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 hover:text-[#0066cc] transition">İletişim</a>
              <button onClick={() => { setMobileMenuOpen(false); document.getElementById('themes')?.scrollIntoView({ behavior: 'smooth' }); }} className="block btn-corporate w-full py-3 rounded-lg text-center font-semibold">Temaları İncele</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 overflow-hidden pt-32">
        {/* Grid BG */}
        <div className="absolute inset-0 grid-bg opacity-50" />

        <div className="max-w-6xl w-full text-center space-y-12 relative z-10">
          <div className="reveal">
            <span className="shimmer px-6 py-3 rounded-full glass-premium inline-block text-[#0066cc] text-xs font-semibold tracking-widest uppercase border border-[#0066cc]/30">
               Web
            </span>
          </div>
          
          <h1 className="reveal text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.1] space-y-3">
            <div className="hero-text-gradient inline-block">Profesyonel</div>
            <br />
            <span className="text-white">Web Temaları</span>
          </h1>
          
          <p className="reveal text-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Restaurant, kafe, blog ve daha fazlası için hazır, modern ve mobil uyumlu web sitesi temaları. Hemen satın alın, anında kullanmaya başlayın.
          </p>
          
          <div className="reveal flex flex-wrap gap-4 justify-center items-center pt-6">
            <button onClick={() => document.getElementById('themes')?.scrollIntoView({ behavior: 'smooth' })} className="btn-corporate px-10 py-5 rounded-lg font-semibold text-lg inline-flex items-center gap-3 group hover:shadow-[0_0_30px_rgba(0,102,204,0.4)]">
              <span>Temaları Keşfet</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 rounded-lg font-semibold text-lg glass-premium hover:scale-[1.02] hover:border-[#0066cc]/50 transition-all border border-white/20">
              Fiyatları Gör
            </button>
          </div>

          {/* Stats */}
          <div className="reveal grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto pt-16">
            {[
              { label: 'Hazır Tema', value: '25+' },
              { label: 'Mutlu Müşteri', value: '500+' },
              { label: 'Kategori', value: '10+' }
            ].map((stat, i) => (
              <div key={i} className="glass-premium rounded-xl p-4 sm:p-6 border border-white/10 hover:border-[#0066cc]/30 transition-all group">
                <div className="text-3xl sm:text-4xl font-black text-[#0066cc] mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Showcase */}
      <section id="themes" className="px-4 sm:px-8 py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="reveal text-[#0066cc] text-xs font-bold tracking-widest uppercase">Öne Çıkan Temalar</span>
            <h2 className="reveal text-4xl sm:text-6xl font-black tracking-tight mt-4">
              Popüler <span className="text-[#0066cc]">Temalarımız</span>
            </h2>
            <p className="reveal text-white/60 text-lg max-w-2xl mx-auto mt-6">
              Her sektör için özel tasarlanmış, modern ve kullanıcı dostu temalar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Dönerci Restaurant Teması',
                category: 'Restaurant & Cafe',
                price: '₺899',
                image: '/doner-onizle.png',
                features: ['Online Sipariş', 'Menü Yönetimi', 'Rezervasyon', 'Responsive']
              },
              {
                title: 'Çiğköfteci Cafe Teması',
                category: 'Fast Food & Cafe',
                price: '₺899',
                image: '/cigkofte-onizle.png',
                features: ['Modern Tasarım', 'Ürün Katalogu', 'İletişim Formu', 'SEO Uyumlu']
              },
              {
                title: 'Minecraft Sunucu Teması',
                category: 'Minecraft',
                price: '₺150',
                image: '/minecraft-onizle.png',
                features: ['Mağaza Entegrasyonu', 'Discord Giriş', 'Sunucu Durumu', 'Vote Linkleri']
              },
              {
                title: 'Minecraft Web Script Premium',
                category: 'Minecraft',
                price: '₺399',
                image: '/minecraft-premium-onizle.png',
                features: ['Premium Tasarım', 'Demo Linki', 'Hızlı Kurulum', 'Mobil Uyumlu'],
                demo: 'https://mc-web-script11.vercel.app'
              },
            ].map((theme, i) => (
              <div key={i} className="reveal block group">
                <div className="card-3d card-shine glass-premium rounded-2xl p-2 hover:border-[#0066cc]/40 transition-all border border-white/10">
                  <div className="relative">
                    {/* Image */}
                    <div className="relative h-72 rounded-xl overflow-hidden bg-white/5 mb-5">
                      <Image
                        src={theme.image}
                        alt={theme.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority={i === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Preview Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#0066cc] rounded-lg text-xs font-bold">
                        {theme.price}
                      </div>
                    </div>

                    <div className="px-4 pb-4">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold tracking-tight mb-1">{theme.title}</h3>
                        <span className="text-[#0066cc] text-xs font-semibold uppercase">{theme.category}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {theme.features.map((feature, j) => (
                          <span key={j} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>

                      {theme.demo ? (
                        <a
                          href={theme.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-corporate w-full px-6 py-3 rounded-lg font-semibold mb-2 block text-center group-hover:shadow-[0_0_20px_rgba(0,102,204,0.3)]"
                        >
                          Demo Görüntüle
                        </a>
                      ) : null}
                      <button
                        onClick={() => handlePayment(theme.title, theme.price)}
                        className="btn-corporate w-full px-6 py-3 rounded-lg font-semibold group-hover:shadow-[0_0_20px_rgba(0,102,204,0.3)]"
                      >
                        Satın Al - {theme.price}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Themes Coming */}
          <div className="reveal text-center mt-16 p-12 glass-premium rounded-2xl border border-white/10">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-3">Daha Fazla Tema Yakında!</h3>
            <p className="text-white/60 max-w-2xl mx-auto mb-6">
              Blog, e-commerce, portfolio, kurumsal ve daha fazla kategoride yeni temalar eklenmeye devam ediyor.
            </p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-corporate px-8 py-3 rounded-lg font-semibold">
              Bilgi Al
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="pricing" className="px-4 sm:px-8 py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0066cc]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="reveal text-[#0066cc] text-xs font-bold tracking-widest uppercase">Lisans Paketleri</span>
            <h2 className="reveal text-4xl sm:text-6xl font-black tracking-tight mt-4">
              Uygun <span className="text-[#0066cc]">Fiyatlar</span>
            </h2>
            <p className="reveal text-white/60 text-lg max-w-2xl mx-auto mt-6">
              İhtiyacınıza göre uygun lisans paketini seçin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: 'Temel Lisans',
                price: '₺899',
                description: 'Tek web sitesi için kullanım hakkı',
                icon: '📄',
                features: [
                  'Tek Domain Kullanımı',
                  'Kaynak Kodlar Dahil',
                  'Kurulum Dokümantasyonu',
                  'Email Desteği',
                  '6 Ay Güncelleme',
                ],
                serviceType: 'license-basic',
                highlight: false
              },
              {
                title: 'Profesyonel Lisans',
                price: '₺1.499',
                description: '5 web sitesi için genişletilmiş kullanım',
                icon: '⭐',
                features: [
                  '5 Domain Kullanımı',
                  'Kaynak Kodlar Dahil',
                  'Detaylı Dokümantasyon',
                  'Öncelikli Destek',
                  '1 Yıl Güncelleme',
                  'Özelleştirme Rehberi',
                ],
                serviceType: 'license-pro',
                highlight: true
              },
              {
                title: 'Geliştirici Lisansı',
                price: '₺2.999',
                description: 'Sınırsız proje kullanımı',
                icon: '💎',
                features: [
                  'Sınırsız Domain',
                  'Kaynak Kodlar Dahil',
                  'Tam Dokümantasyon',
                  'Ömür Boyu Güncelleme',
                  '7/24 Öncelikli Destek',
                  'Müşteri Projelerinde Kullanım',
                  'PSD/Figma Tasarım Dosyaları',
                ],
                serviceType: 'license-dev',
                highlight: false
              },
            ].map((pkg, i) => (
              <div key={i} className={`reveal group ${pkg.highlight ? 'md:scale-105' : ''}`}>
                <div className={`card-3d card-shine rounded-2xl p-8 border transition-all h-full flex flex-col ${
                  pkg.highlight 
                    ? 'glass-premium border-[#0066cc]/50 bg-gradient-to-br from-[#0066cc]/20 to-transparent hover:border-[#0066cc]/80' 
                    : 'glass-premium border-white/10 hover:border-[#0066cc]/40'
                }`}>
                  <div className="text-5xl mb-4">{pkg.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{pkg.description}</p>
                  
                  <div className="text-4xl font-black text-[#0066cc] mb-6">
                    {pkg.price}
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <span className="w-5 h-5 rounded-full bg-[#0066cc]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 bg-[#0066cc] rounded-full" />
                        </span>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.highlight && (
                    <div className="mb-6 px-3 py-2 bg-[#0066cc]/20 border border-[#0066cc]/40 rounded-lg text-center">
                      <span className="text-xs font-bold text-[#0066cc] uppercase">✨ En Popüler</span>
                    </div>
                  )}

                  <button
                    onClick={() => handlePayment(pkg.serviceType, pkg.price)}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                      pkg.highlight 
                        ? 'btn-corporate group-hover:shadow-[0_0_30px_rgba(0,102,204,0.4)]' 
                        : 'btn-corporate group-hover:scale-[1.02]'
                    }`}
                  >
                    Satın Al
                  </button>
                </div>
              </div>
            ))}
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
              Sorularınız mı var?<br />
              <span className="text-[#0066cc]">Bize Ulaşın</span>
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
                  placeholder="Hangi tema ile ilgileniyorsunuz?"
                />
              </div>

              {status && (
                <div className={`text-center p-4 rounded-lg font-semibold ${status.includes('✓') ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-[#0066cc]/10 border border-[#0066cc]/30 text-[#0066cc]'}`}>
                  {status}
                </div>
              )}

              <button
                type="submit"
                className="btn-corporate w-full px-12 py-5 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(0,102,204,0.4)]"
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
          © 2026 <span className="font-bold text-white">KAĞAN SOFOĞLU</span>. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
}