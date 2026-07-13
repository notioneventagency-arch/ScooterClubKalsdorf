
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-6xl md:text-8xl font-bold">Scooter Club Kalsdorf</h1>
        <p className="mt-6 text-xl">Vespa • Gemeinschaft • Ausfahrten</p>

        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <a href="https://www.instagram.com/scooter_club_kalsdorf/" target="_blank" className="px-6 py-3 bg-white text-black rounded-xl">
            Instagram
          </a>
          <a href="https://www.facebook.com/p/Scooter-Club-Kalsdorf-61553201203901/" target="_blank" className="px-6 py-3 bg-white text-black rounded-xl">
            Facebook
          </a>
          <a href="#kontakt" className="px-6 py-3 border rounded-xl">
            Kontakt
          </a>
        </div>
      </section>

      <section id="termine" className="p-10">
        <h2 className="text-4xl font-bold mb-6">Nächste Termine</h2>
        <div className="space-y-4">
          <div>Sommerausfahrt 2025</div>
          <div>Vespa Treffen Graz</div>
          <div>Club Stammtisch</div>
        </div>
      </section>

      <section id="galerie" className="p-10">
        <h2 className="text-4xl font-bold mb-6">Galerie & Videos</h2>
        <p>Fotos in public/gallery/photos und Videos in public/gallery/videos hochladen.</p>
      </section>

      <section id="kontakt" className="p-10">
        <h2 className="text-4xl font-bold mb-6">Kontakt</h2>
        <p>E-Mail: scooter.kalsdorf@gmail.com</p>
        <p>Telefon: 0664 1259454</p>

        <form className="mt-6 flex flex-col gap-3 max-w-lg">
          <input className="p-3 text-black rounded" placeholder="Name" />
          <input className="p-3 text-black rounded" placeholder="E-Mail" />
          <textarea className="p-3 text-black rounded" placeholder="Nachricht" rows={5} />
          <button className="p-3 bg-white text-black rounded">Senden</button>
        </form>
      </section>
    </main>
  )
}
