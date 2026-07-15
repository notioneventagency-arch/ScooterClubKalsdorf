import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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

      <section
        id="gallery"
        className="max-w-7xl mx-auto py-32 px-6"
      >

        <h2 className="section-title text-center">
          Galerie
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-16">

          {Array.from({ length: 20 }).map((_, index) => (
            <img
              key={index}
              src={`/gallery/${index + 1}.jpg`}
              alt={`Scooter Club ${index + 1}`}
              className="rounded-3xl zoom aspect-square object-cover"
            />
          ))}

        </div>

      </section>

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

    </main>
  );
}
