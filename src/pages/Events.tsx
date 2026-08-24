import { useState } from 'react';
import './Events.css';
import PunkHeader from '../components/PunkHeader';
import MailingListModal from '../components/MailingListModal';

import tmpl2027   from '../assets/Events/tmpl-2027.png';
import tmpl2026   from '../assets/Events/tmpl-2026.png';
import tmpl2025   from '../assets/Events/tmpl-2025.png';
import fifthCol   from '../assets/Events/event-past-3.png';
import openSoc    from '../assets/Events/event-past-4.png';

export default function Events() {
  const [isMailingModalOpen, setIsMailingModalOpen] = useState(false);

  return (
    <div className="about-page-real">
      <PunkHeader />

      <h1 className="halftone-title about-page-title">OUR EVENTS</h1>

      {/* ── UPCOMING ── */}
      <div style={{ padding: '1.5rem 5rem 0 5rem' }}>
        <h2 className="section-title" style={{ margin: 0 }}>UPCOMING</h2>
      </div>
      <div className="ev-upcoming-row">
        <img src={tmpl2027} alt="TMPL 2027" className="ev-upcoming-img" />
        <div className="pagella-body ev-upcoming-details">
          <p className="ev-upcoming-event-title">The Law and Policy of Prediction Markets as a News Source and Public Risk</p>
          <p>Friday, February 12th</p>
          <p>University of Florida Levin College of Law</p>
          <p>Details TBD</p>
        </div>
      </div>

      {/* ── PAST EVENTS ── */}
      <div className="ev-past-section">
        <h2 className="section-title" style={{ margin: 0 }}>PAST EVENTS</h2>

        {/* TMPL 2026 — right side */}
        <div className="ev-past-top">
          <a href="https://law.ufl.edu/about/events-and-workshops/tmpl-2026/" target="_blank" rel="noopener noreferrer">
            <img src={tmpl2026} alt="TMPL 2026" className="ev-past-lg-img" style={{ cursor: 'pointer' }} />
          </a>
        </div>

        {/* Bottom row: TMPL 2025 · Fifth Column · Open Socrates */}
        <div className="ev-past-bottom">
          <a href="https://law.ufl.edu/about/events-and-workshops/tmpl-2025/" target="_blank" rel="noopener noreferrer">
            <img src={tmpl2025}  alt="TMPL 2025"        className="ev-past-sm-img" style={{ cursor: 'pointer' }} />
          </a>
          <a href="https://www.wethefifth.com/" target="_blank" rel="noopener noreferrer">
            <img src={fifthCol}  alt="The Fifth Column" className="ev-past-sm-img" style={{ cursor: 'pointer' }} />
          </a>
          <a href="https://wwnorton.com/books/open-socrates" target="_blank" rel="noopener noreferrer">
            <img src={openSoc}   alt="Open Socrates"    className="ev-past-book-img" style={{ cursor: 'pointer' }} />
          </a>
        </div>
      </div>

      {/* ── MAILING LIST ── */}
      <div className="ev-mailing">
        <h2 
          className="section-title ev-mailing-title"
          onClick={() => setIsMailingModalOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsMailingModalOpen(true);
            }
          }}
          aria-haspopup="dialog"
        >
          ☞ JOIN OUR MAILING LIST
        </h2>
      </div>

      {/* ── MAILING LIST POPUP MODAL ── */}
      <MailingListModal 
        isOpen={isMailingModalOpen}
        onClose={() => setIsMailingModalOpen(false)}
      />
    </div>
  );
}

