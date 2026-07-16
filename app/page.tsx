import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/About";
import Events from "@/components/Events";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

 <Events />

      {/* ================= GALERIE ================= */}

  const galleryImages = [
  "/images/about.jpg",
  "/images/dub1.jpg",
  "/images/dub2.jpg",
  "/images/dub3.jpg",
  "/images/dub4.jpg",
  "/images/hero.jpg",
];

<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
  {galleryImages.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Scooter Club ${index + 1}`}
      className="rounded-3xl aspect-square object-cover"
    />
  ))}
</div>
      {/* ================= KONTAKT ================= */}

      <section
        id="kontakt"
        className="bg-zinc-900 py-28 px-6"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="section-title">
            Kontakt
          </h2>

          <p className="text-xl mt-8">
            📧 scooter.kalsdorf@gmail.com
          </p>

          <p className="text-xl mt-3">
            📞 0664 1259454
          </p>

        </div>

      </section>

      {/* ================= IMPRESSUM ================= */}

<section
  id="impressum"
  className="bg-zinc-950 py-24 px-6 border-t border-white/10"
>
  <div className="max-w-4xl mx-auto">

    <h2 className="section-title text-center mb-12">
      Impressum
    </h2>

    <div className="space-y-8 text-zinc-300">

      <div>
        <h3 className="text-xl font-bold text-white mb-2">
          Medieninhaber & Herausgeber
        </h3>

        <p>
          Scooter Club Kalsdorf
          <br />
          Eingetragener Verein
          <br />
          8401 Kalsdorf bei Graz
          <br />
          Österreich
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-2">
          Vereinsdaten
        </h3>

        <p>
          ZVR-Zahl: 1538962613
          <br />
          Mitglied des Vespa Club Österreich
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-2">
          Kontakt
        </h3>

        <p>
          Telefon: +43 664 1259454
          <br />
          E-Mail: scooter.kalsdorf@gmail.com
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-2">
          Grundlegende Richtung
        </h3>

        <p>
          Informationen über Veranstaltungen,
          Ausfahrten und das Vereinsleben des
          Scooter Club Kalsdorf.
        </p>
      </div>

    </div>

  </div>
</section>
    </main>
  );
}
