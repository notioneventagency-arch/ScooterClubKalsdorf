export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-black text-xl tracking-wide">
          SCOOTER CLUB KALSDORF
        </div>

        <div className="hidden md:flex gap-8 text-sm uppercase">
          #about
            Über Uns
          </a>

          #events-500">
            Events
          </a>

          #gallery
            Galerie
          </a>

          <a href="#kontakt    Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
}
