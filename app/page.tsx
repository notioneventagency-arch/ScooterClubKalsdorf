export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">

    {/* HERO */}
2
 
3
<section
4
className="relative min-h-screen flex items-center justify-center overflow-hidden"
5
style={{
6
backgroundImage: "url('/images/hero.jpg')",
7
backgroundSize: "cover",
8
backgroundPosition: "center",
9
}}
10
>
11
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-zinc-950" />
12
 
13
<div className="relative z-10 text-center px-6 max-w-6xl">
14
 
15
<img
16
src="/logo/logo.png"
17
alt="Scooter Club Kalsdorf"
18
className="mx-auto w-40 md:w-64 mb-10 drop-shadow-2xl"
19
/>
20
 
21
<p className="uppercase tracking-[0.4em] text-yellow-500 mb-4 font-semibold">
22
Vespa Club Austria>
23
Kalsdorf
24
</h1>
25
 
26
<p className="mt-8 text-xl md:text-3xl text-zinc-300 max-w-3xl mx-auto">
27
Gemeinsam unterwegs. Legendäre Ausfahrten.
28
Italienischer Lifestyle auf zwei Rädern.
29
</p>
30
 
31
<div className="flex flex-wrap justify-center gap-6 mt-12">
32
 
33
<a
34
href="#events"
35
className="bg-yellow-500 text-black px-10 py-5 rounded-full font-bold hover:scale-105 duration-ounded-full hover:bgp-10 mt-24 max-w-3xl mx-auto">
36
 
37
<div>
38
<h3 className="text-4xl font-black text-yellow-500">50+</h3>
39
<p className="text-zinc-400">Mitglieder</p>
40
</div>
41
 
42
<div>
43
<h3 className="text-4xl font-black text-yellow-500">100+</h3>
44
<p className="text-zinc-400">Ausfahrten</p>
45
</div>
46
 
47
<div>
48
<h3 className="text-4xl font-black text-yellow-500">10+</h3>
49
<p className="text-zinc-400">Jahre Leidenschaft</p>
50
</div>
51
 
52
</div>
53
 
54
</div>
55
</section>

      {/* ÜBER UNS */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <h2 className="text-5xl font-bold mb-10">
          Über unseren Club
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-zinc-300 leading-8 text-lg">

              Willkommen beim Scooter Club Kalsdorf.

              Gemeinsam organisieren wir Ausfahrten,
              Vespa-Treffen und gemütliche Stammtische.

              Unsere Leidenschaft verbindet Menschen,
              die italienische Roller lieben.

            </p>

          </div>

          <img
            src="/images/about.jpg"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </section>

      {/* EVENTS */}

      <section
        id="events"
        className="bg-zinc-900 py-24 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold mb-14">
            Nächste Events
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">
                Saisonstart
              </h3>

              <p className="mt-4">
                April
              </p>
            </div>

            <div className="bg-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">
                Vespa Treffen
              </h3>

              <p className="mt-4">
                Juni
              </p>
            </div>

            <div className="bg-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">
                Abschlussfahrt
              </h3>

              <p className="mt-4">
                Oktober
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* GALERIE */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <h2 className="text-5xl font-bold mb-12">
          Galerie
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <img src="/gallery/1.jpg" className="rounded-2xl hover:scale-105 duration-300" />
          <img src="/gallery/2.jpg" className="rounded-2xl hover:scale-105 duration-300" />
          <img src="/gallery/3.jpg" className="rounded-2xl hover:scale-105 duration-300" />
          <img src="/gallery/4.jpg" className="rounded-2xl hover:scale-105 duration-300" />

        </div>

      </section>

      {/* KONTAKT */}

      <section
        id="kontakt"
        className="bg-zinc-900 py-24 px-6"
      >

        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold mb-10">
            Kontakt
          </h2>

          <p className="mb-3">
            📧 scooter.kalsdorf@gmail.com
          </p>

          <p className="mb-10">
            📞 +43 664 1259454
          </p>

          <form className="space-y-5">

            <input
              placeholder="Name"
              className="w-full rounded-xl p-4 text-black"
            />

            <input
              placeholder="E-Mail"
              className="w-full rounded-xl p-4 text-black"
            />

            <textarea
              rows={6}
              placeholder="Nachricht"
              className="w-full rounded-xl p-4 text-black"
            />

            <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-bold">
              Nachricht senden
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-black py-10 text-center text-zinc-500">

        <p>© 2026 Scooter Club Kalsdorf</p>

        <div className="mt-6 flex justify-center gap-6">

          <a href="https://www.instagram.com/scooter_club_kalsdorf/">
            Instagram
          </a>

          <a href="https://www.facebook.com/p/Scooter-Club-Kalsdorf-61553201203901/">
            Facebook
          </a>

        </div>

      </footer>

    </main>
  )
}
