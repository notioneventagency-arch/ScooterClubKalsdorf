"use client";

import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Fest der Vereine",
    date: "25. juli 2026",
    location: "Kalsdorf bei Graz",
    time: "09:00 Uhr",
  },
  {
    title: "Vespa Treffen",
    date: "14. Juni 2026",
    location: "Steiermark",
    time: "10:00 Uhr",
  },
  {
    title: "Abschlussfahrt",
    date: "03. Oktober 2026",
    location: "Kalsdorf",
    time: "09:30 Uhr",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="py-32 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <span className="uppercase tracking-[0.3em] text-red-500 font-bold">
          Veranstaltungen
        </span>

        <h2 className="text-5xl md:text-6xl font-black mt-5 mb-16">
          Unsere nächsten Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {events.map((event) => (

            <div
              key={event.title}
              className="card-premium rounded-[30px] p-8 hover:scale-[1.03] duration-300"
            >
              <h3 className="text-3xl font-black mb-8">
                {event.title}
              </h3>

              <div className="space-y-4 text-zinc-300">

                <div className="flex gap-3">
                  <Calendar className="text-red-500" />
                  {event.date}
                </div>

                <div className="flex gap-3">
                  <Clock className="text-red-500" />
                  {event.time}
                </div>

                <div className="flex gap-3">
                  <MapPin className="text-red-500" />
                  {event.location}
                </div>

              </div>

              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 mt-10 text-red-500 font-bold hover:gap-4 transition-all"
              >
                Mehr erfahren
                <ArrowRight size={18} />
              </a>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
