import React, { useState } from 'react';
import HeroScene from './components/HeroScene';
import LoginCard from './components/LoginCard';
import VenueGrid from './components/VenueGrid';
import BookingModal from './components/BookingModal';
import { Github, Mail } from 'lucide-react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);

  const openModal = (venue) => {
    setSelectedVenue(venue);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVenue(null);
  };

  return (
    <div className="min-h-screen text-[#EDEDED]" style={{ backgroundImage: 'linear-gradient(135deg, #0A0A1A 0%, #1B1A55 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero + Auth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <HeroScene />
          <div className="flex items-center justify-center">
            <LoginCard />
          </div>
        </div>

        {/* Dashboard */}
        <VenueGrid onRequest={openModal} />

        {/* About / Footer */}
        <footer className="mt-16 md:mt-20 border-t border-white/10/50">
          <div className="mx-auto max-w-4xl text-center pt-8 pb-6">
            <p className="text-sm md:text-base text-white/80">
              Venyo – A smart, simple venue management system built for colleges and communities to organize halls, labs, and auditoriums efficiently.
            </p>
            <p className="mt-1 text-sm text-white/70">
              Created and Designed by <span className="text-[#F5B841]">Luthfi</span> ✦ with futuristic simplicity and clarity.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 text-[#F5B841] hover:text-[#7DE2D1] transition" aria-label="GitHub">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="mailto:contact@example.com" className="inline-flex items-center gap-2 text-[#F5B841] hover:text-[#7DE2D1] transition" aria-label="Email">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Booking Modal */}
      <BookingModal open={modalOpen} onClose={closeModal} venue={selectedVenue} />
    </div>
  );
}

export default App;
