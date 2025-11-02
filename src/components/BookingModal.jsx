import React, { useState, useEffect } from 'react';
import { Calendar, FileText } from 'lucide-react';

const BookingModal = ({ open, onClose, venue }) => {
  const [date, setDate] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [purpose, setPurpose] = useState('');
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (open) {
      setDate('');
      setStart('');
      setEnd('');
      setPurpose('');
      setNotes('');
      setFile(null);
      setSuccess('');
    }
  }, [open]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    // Prototype success message
    setSuccess('Booking request submitted for approval.');
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-xl backdrop-blur-2xl bg-[rgba(255,255,255,0.08)] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg md:text-xl font-semibold text-[#EDEDED]">Request Booking</h3>
            <button onClick={onClose} className="text-white/70 hover:text-[#FF6363] transition" aria-label="Close">✕</button>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-sm text-white/80 mb-1">Venue</label>
              <input
                value={venue?.name || ''}
                readOnly
                className="w-full rounded-xl bg-white/10 border border-white/10 text-[#EDEDED] px-4 py-2.5"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80 mb-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 rounded-xl bg-white/10 border border-white/10 text-[#EDEDED] px-3 py-2.5 focus:ring-2 focus:ring-[#7DE2D1]"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/80 mb-1">Start</label>
                  <input type="time" value={start} onChange={(e)=>setStart(e.target.value)} className="w-full rounded-xl bg-white/10 border border-white/10 text-[#EDEDED] px-3 py-2.5 focus:ring-2 focus:ring-[#7DE2D1]" required />
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-1">End</label>
                  <input type="time" value={end} onChange={(e)=>setEnd(e.target.value)} className="w-full rounded-xl bg-white/10 border border-white/10 text-[#EDEDED] px-3 py-2.5 focus:ring-2 focus:ring-[#7DE2D1]" required />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-1">Purpose</label>
              <input value={purpose} onChange={(e)=>setPurpose(e.target.value)} placeholder="e.g., Workshop, Orientation" className="w-full rounded-xl bg-white/10 border border-white/10 text-[#EDEDED] placeholder-white/50 px-4 py-2.5 focus:ring-2 focus:ring-[#7DE2D1]" required />
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-1">Notes</label>
              <textarea value={notes} onChange={(e)=>setNotes(e.target.value)} rows={3} placeholder="Any additional details" className="w-full rounded-xl bg-white/10 border border-white/10 text-[#EDEDED] placeholder-white/50 px-4 py-2.5 focus:ring-2 focus:ring-[#7DE2D1]" />
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-1">PDF Upload</label>
              <div className="flex items-center gap-3">
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white/90 hover:bg-white/15">
                  <FileText className="h-4 w-4" /> Attach PDF
                  <input type="file" accept="application/pdf" className="hidden" onChange={(e)=>setFile(e.target.files?.[0] || null)} />
                </label>
                {file && <span className="text-xs text-white/70 truncate">{file.name}</span>}
              </div>
            </div>

            {success && (
              <div className="rounded-xl border border-[#7DE2D1]/30 bg-[#7DE2D1]/10 text-[#7DE2D1] px-4 py-2 text-sm">
                {success}
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10">Cancel</button>
              <button type="submit" className="px-5 py-2.5 rounded-xl bg-[#1B1A55] text-[#EDEDED] border border-white/10 hover:shadow-lg hover:-translate-y-0.5 transition" style={{ boxShadow: '0 0 14px rgba(245,184,65,0.25)' }}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
