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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
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
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter">
            <span className="text-white">PORT</span>
            <span className="text-blue-500">FOLIO</span>
          </div>
          <div className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#home" className="hover:text-blue-500 transition-colors duration-300">ANA SAYFA</a>
            <a href="#about" className="hover:text-blue-500 transition-colors duration-300">HAKKIMDA</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors duration-300">PROJELER</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors duration-300">İLETİŞİM</a>
          </div>
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            İletişim Kur
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px]"></div>

        <div className="max-w-6xl text-center relative z-10">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold tracking-wide">
              YARATICI YAZILIM GELİŞTİRİCİ
            </span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-500">
              KAGAN
            </span>
            <br />
            <span className="text-white/20">DEVELOPER</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Piksel-mükemmel dijital deneyimler yaratan ve son teknolojileri kullanarak 
            yenilikçi web çözümleri geliştiren bir yazılım geliştiricisiyim.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href="#projects" 
              className="group px-10 py-5 bg-white text-black rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            >
              Projelerimi Gör
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
            </a>
            <a 
              href="#contact" 
              className="px-10 py-5 border-2 border-white/20 rounded-full font-bold text-lg transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:scale-105"
            >
              Benimle İletişime Geç
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-8 py-32 relative">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="text-blue-500 text-sm font-bold tracking-widest">BEN KİMİM</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                Fikirleri<br />
                <span className="text-white/20">Gerçeğe Dönüştür</span>
              </h2>
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  <strong className="text-white">5+ yıl</strong> deneyime sahip, olağanüstü dijital ürünler 
                  geliştiren ve harika tasarımı güçlü işlevsellikle birleştiren tutkulu bir yazılım geliştiricisiyim.
                </p>
                <p>
                  Benim yaklaşımım basit: yalnızca görsel olarak etkileyici değil, 
                  aynı zamanda sezgisel, erişilebilir ve performanslı deneyimler yaratmak.
                </p>
              </div>
              <div className="mt-10 flex gap-4">
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-3xl font-black text-blue-500">50+</div>
                  <div className="text-sm text-white/60">Proje</div>
                </div>
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-3xl font-black text-blue-500">5+</div>
                  <div className="text-sm text-white/60">Yıl Tecrübe</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
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
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-blue-500 font-bold">{skill.level}%</span>
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
      <section id="projects" className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-20">
            <span className="text-blue-500 text-sm font-bold tracking-widest">PORTFÖY</span>
            <h2 className="text-6xl md:text-7xl font-black mt-4 tracking-tighter">
              Seçilmiş <span className="text-white/20">Çalışmalar</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'E-Ticaret Platformu', category: 'Full Stack', color: 'from-blue-500 to-cyan-500' },
              { title: 'Yapay Zeka SaaS', category: 'Frontend', color: 'from-purple-500 to-pink-500' },
              { title: 'Mobil Bankacılık Uygulaması', category: 'UI/UX Tasarımı', color: 'from-orange-500 to-red-500' },
              { title: 'Kripto Tracker', category: 'Web3', color: 'from-green-500 to-emerald-500' }
            ].map((project, i) => (
              <div 
                key={i} 
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 overflow-hidden cursor-pointer hover:scale-[1.02]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                    <div className={`w-32 h-32 bg-gradient-to-br ${project.color} rounded-full blur-2xl opacity-50`}></div>
                  </div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-black mb-2 tracking-tight">{project.title}</h3>
                      <span className="text-blue-400 text-sm font-semibold">{project.category}</span>
                    </div>
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300 group-hover:rotate-45">
                      <span className="text-xl">↗</span>
                    </div>
                  </div>
                  
                  <p className="text-white/60 mb-6">
                    En son teknolojiler ve en iyi uygulamalar kullanılarak geliştirilmiş modern, ölçeklenebilir bir çözüm.
                  </p>
                  
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold">React</span>
                    <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold">Next.js</span>
                    <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold">TypeScript</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        
        <div className="max-w-4xl w-full relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-500 text-sm font-bold tracking-widest">İLETİŞİME BAŞLA</span>
            <h2 className="text-6xl md:text-7xl font-black mt-4 mb-6 tracking-tighter">
              Birlikte Çalışalım<br />
              <span className="text-white/20">Harika Şeyler Yaratalım</span>
            </h2>
            <p className="text-xl text-white/60">
              Bir proje fikriniz mi var? Birlikte muhteşem bir şey yaratalım.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-3 font-semibold text-sm tracking-wide">ADINIZ</label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 focus:outline-none focus:bg-white/10 transition-all duration-300"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div>
                <label className="block mb-3 font-semibold text-sm tracking-wide">E-MAİL</label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 focus:outline-none focus:bg-white/10 transition-all duration-300"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block mb-3 font-semibold text-sm tracking-wide">MESAJINIZ</label>
              <textarea 
                rows={6}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none"
                placeholder="Projenizden bahsedin..."
              />
            </div>

            {status && (
              <div className={`text-center p-4 rounded-2xl font-semibold ${status.includes('✓') ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'}`}>
                {status}
              </div>
            )}

            <button 
              type="submit"
              className="w-full px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === 'Gönderiliyor...'}
            >
              {status === 'Gönderiliyor...' ? 'Gönderiliyor...' : 'Mesaj Gönder →'}
            </button>
          </form>

          <div className="mt-16 flex justify-center gap-6">
            {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
              <a 
                key={social}
                href="#"
                className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 hover:scale-110"
              >
                <span className="text-xs font-bold">{social.slice(0, 2)}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10">
        <p className="text-white/40 text-sm">
          © 2026 <span className="font-bold">KAGAN</span>. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
}