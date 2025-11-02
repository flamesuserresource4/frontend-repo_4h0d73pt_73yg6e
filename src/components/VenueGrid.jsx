import React, { useMemo, useState } from 'react';
import { Search, Calendar } from 'lucide-react';

const initialVenues = [
  { id: 1, name: 'Main Auditorium', capacity: 800, status: 'Available' },
  { id: 2, name: 'Innovation Lab', capacity: 60, status: 'Available' },
  { id: 3, name: 'Conference Hall A', capacity: 200, status: 'Available' },
  { id: 4, name: 'Conference Hall B', capacity: 150, status: 'Available' },
  { id: 5, name: 'Seminar Room 101', capacity: 40, status: 'Available' },
  { id: 6, name: 'Open Amphitheatre', capacity: 300, status: 'Available' },
];

const VenueGrid = ({ onRequest }) => {
  const [query, setQuery] = useState('');
  const [date, setDate] = useState('');
  const [availability, setAvailability] = useState('all');

  const filtered = useMemo(() => {
    return initialVenues.filter((v) => {
      const matchesQuery = v.name.toLowerCase().includes(query.toLowerCase());
      const matchesAvail = availability === 'all' ? true : v.status.toLowerCase() === availability;
      return matchesQuery && matchesAvail;
    });
  }, [query, availability]);

  return (
    <section className="mt-12" aria-label="Venue Availability Dashboard">
      <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
        <div className="flex-1">
          <label className="sr-only" htmlFor="search">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            <input
              id="search"
              type="text"
              placeholder="Search venues"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 rounded-2xl bg-white/10 border border-white/10 text-[#EDEDED] placeholder-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-[#7DE2D1]"
            />
          </div>
        </div>

        <div className="w-full md:w-56">
          <label htmlFor="date" className="sr-only">Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full pl-10 rounded-2xl bg-white/10 border border-white/10 text-[#EDEDED] px-4 py-3 outline-none focus:ring-2 focus:ring-[#7DE2D1]"
            />
          </div>
        </div>

        <div className="w-full md:w-56">
          <label htmlFor="availability" className="sr-only">Availability</label>
          <select
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full rounded-2xl bg-white/10 border border-white/10 text-[#EDEDED] px-4 py-3 outline-none focus:ring-2 focus:ring-[#7DE2D1]"
          >
            <option value="all" className="bg-[#070F2B]">All</option>
            <option value="available" className="bg-[#070F2B]">Available</option>
            <option value="booked" className="bg-[#070F2B]">Booked</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((v) => (
          <article
            key={v.id}
            className="group backdrop-blur-xl bg-[rgba(255,255,255,0.08)] border border-white/10 rounded-2xl p-5 shadow-xl transition transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1B1A55]/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-[#EDEDED]">{v.name}</h3>
                <p className="text-sm text-white/70">Capacity: {v.capacity}</p>
              </div>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs border ${
                  v.status === 'Available'
                    ? 'bg-[#7DE2D1]/15 text-[#7DE2D1] border-[#7DE2D1]/30'
                    : 'bg-[#F5B841]/15 text-[#F5B841] border-[#F5B841]/30'
                }`}
              >
                {v.status === 'Available' ? '✅ Available' : '⛔ Booked'}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => onRequest(v)}
                className="rounded-xl px-4 py-2.5 bg-[#1B1A55] text-[#EDEDED] border border-white/10 transition hover:shadow-lg hover:shadow-[#7DE2D1]/20 hover:-translate-y-0.5"
              >
                Request Booking
              </button>
              <button className="text-sm text-white/70 hover:text-[#F5B841] transition">View</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default VenueGrid;
