import './Events.css';
import PunkHeader from '../components/PunkHeader';

import tmpl2027   from '../assets/Events/tmpl-2027.png';
import tmpl2026   from '../assets/Events/tmpl-2026.png';
import tmpl2025   from '../assets/Events/tmpl-2025.png';
import fifthCol   from '../assets/Events/event-past-3.png';
import openSoc    from '../assets/Events/event-past-4.png';

export default function Events() {
  return (
    <div className="about-page-real">
      <PunkHeader />

      <h1 className="halftone-title about-page-title">OUR EVENTS</h1>

      {/* ── UPCOMING: card left · label right ── */}
      <div className="ev-upcoming-row">
        <img src={tmpl2027} alt="TMPL 2027" className="ev-upcoming-img" />
        <h2 className="section-title" style={{ margin: 0 }}>UPCOMING</h2>
      </div>

      {/* ── PAST EVENTS ── */}
      <div className="ev-past-section">
        <h2 className="section-title" style={{ margin: 0, alignSelf: 'flex-start' }}>PAST EVENTS</h2>

        {/* TMPL 2026 — right side */}
        <div className="ev-past-top">
          <img src={tmpl2026} alt="TMPL 2026" className="ev-past-lg-img" />
        </div>

        {/* Bottom row: TMPL 2025 · Fifth Column · Open Socrates */}
        <div className="ev-past-bottom">
          <img src={tmpl2025}  alt="TMPL 2025"        className="ev-past-sm-img" />
          <img src={fifthCol}  alt="The Fifth Column" className="ev-past-sm-img" />
          <img src={openSoc}   alt="Open Socrates"    className="ev-past-book-img" />
        </div>
      </div>

      {/* ── MAILING LIST ── */}
      <div className="ev-mailing">
        <h2 className="section-title">JOIN OUR MAILING LIST</h2>
      </div>
    </div>
  );
}
