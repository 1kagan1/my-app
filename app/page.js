export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolyo</h1>
          <div className="flex gap-8">
            <a href="#home" className="hover:text-blue-500 transition">Ana Sayfa</a>
            <a href="#about" className="hover:text-blue-500 transition">Hakkımda</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projeler</a>
            <a href="#contact" className="hover:text-blue-500 transition">İletişim</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <div className="mb-6">
            <span className="text-blue-500 text-lg">Merhaba, Ben</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Adınız Soyadınız
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/70 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto">
            Modern web uygulamaları geliştiren, kullanıcı deneyimine odaklanan 
            ve yenilikçi çözümler üreten bir yazılım geliştiriciyim.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
            >
              Projelerimi Gör
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-foreground/20 rounded-lg hover:border-foreground/40 transition font-medium"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 bg-foreground/5">
        <div className="max-w-4xl">
          <h2 className="text-5xl font-bold mb-8">Hakkımda</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-foreground/80 mb-6">
                X yıldır yazılım geliştirme alanında çalışıyorum. Modern teknolojiler 
                kullanarak ölçeklenebilir ve kullanıcı dostu uygulamalar geliştiriyorum.
              </p>
              <p className="text-lg text-foreground/80">
                Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum. Yeni teknolojileri 
                takip ediyor ve projelerimde uygulamaya geçiriyorum.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Yetenekler</h3>
              <div className="space-y-3">
                {['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'UI/UX Design'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-center">Projeler</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-foreground/10 rounded-lg p-6 hover:border-foreground/30 transition">
                <div className="w-full h-48 bg-foreground/5 rounded-lg mb-4"></div>
                <h3 className="text-2xl font-semibold mb-2">Proje {i}</h3>
                <p className="text-foreground/70 mb-4">
                  Proje açıklaması buraya gelecek. Teknolojiler ve özellikler hakkında bilgi.
                </p>
                <div className="flex gap-2">
                  <span className="text-sm px-3 py-1 bg-blue-500/10 text-blue-500 rounded">React</span>
                  <span className="text-sm px-3 py-1 bg-blue-500/10 text-blue-500 rounded">Next.js</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 bg-foreground/5">
        <div className="max-w-2xl w-full">
          <h2 className="text-5xl font-bold mb-8 text-center">İletişim</h2>
          <p className="text-center text-lg text-foreground/70 mb-12">
            Bir proje fikriniz mi var? Benimle iletişime geçin!
          </p>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">İsim</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:border-blue-500 focus:outline-none"
                placeholder="Adınız"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:border-blue-500 focus:outline-none"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Mesaj</label>
              <textarea 
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:border-blue-500 focus:outline-none resize-none"
                placeholder="Mesajınız..."
              />
            </div>
            <button 
              type="submit"
              className="w-full px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
            >
              Gönder
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-foreground/10">
        <p className="text-foreground/60">© 2026 Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}