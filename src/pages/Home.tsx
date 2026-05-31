import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Massive absolute SVG splatter that spans full width (minus 250px margin hack in CSS) */}
      <div className="pink-splatter-bg">
        <svg
          viewBox="0 0 1000 650"
          preserveAspectRatio="none"
          className="pink-splatter-svg"
        >
          <path
            fill="#ff55b3"
            d="M 0 0 
               L 1000 0 
               L 1000 450
               C 900 500, 800 480, 760 520
               L 710 470
               C 800 480, 850 560, 800 580
               L 750 500
               C 700 530, 650 550, 600 580
               L 540 510
               C 500 540, 450 550, 400 560
               L 350 490
               C 300 510, 250 530, 180 500
               L 140 440
               C 100 460, 50 420, 0 380
               Z"
          />
          {/* A completely detached splat on the far right if needed */}
          <path fill="#ff55b3" d="M 950 580 C 980 600, 920 620, 1000 640 L 1000 520 C 950 540, 970 560, 950 580 Z" />
        </svg>
      </div>

      <div className="home-hero">
        <h1 className="hero-title">
          <span className="hero-subtitle">Nevermind “misinformation,” The Problem Is</span>
          <span className="top-word">THE DEMAND</span>
          <span className="small-word">FOR</span>
          <span className="bottom-word">BULLSHIT</span>
        </h1>
      </div>

      <div className="home-content">
        <div className="question-item">
          <div className="question-header clickable" onClick={() => navigate('/what-is-bullshit')}>
            <span className="arrow-icon">
              <svg viewBox="0 0 40 20" width="1.2em" height="0.6em" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinejoin="miter">
                <polygon points="1,2 28,2 38,10 28,18 1,18" />
              </svg>
            </span>
            <span className="question-text">WHAT IS BULLSHIT?</span>
          </div>
        </div>

        <div className="question-item">
          <div className="question-header clickable" onClick={() => navigate('/audiences-want')}>
            <span className="arrow-icon">
              <svg viewBox="0 0 40 20" width="1.2em" height="0.6em" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinejoin="miter">
                <polygon points="1,2 28,2 38,10 28,18 1,18" />
              </svg>
            </span>
            <span className="question-text">WHAT DO AUDIENCES WANT IF THEY<br />DON'T WANT THE TRUTH?</span>
          </div>
        </div>

        <div className="question-item">
          <div className="question-header clickable" onClick={() => navigate('/how-to-know')}>
            <span className="arrow-icon">
              <svg viewBox="0 0 40 20" width="1.2em" height="0.6em" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinejoin="miter">
                <polygon points="1,2 28,2 38,10 28,18 1,18" />
              </svg>
            </span>
            <span className="question-text">HOW WOULD WE KNOW WHETHER IT'S<br />BULLSHIT?</span>
          </div>
        </div>

        <div className="question-item">
          <div className="question-header clickable" onClick={() => navigate('/interventions')}>
            <span className="arrow-icon">
              <svg viewBox="0 0 40 20" width="1.2em" height="0.6em" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinejoin="miter">
                <polygon points="1,2 28,2 38,10 28,18 1,18" />
              </svg>
            </span>
            <span className="question-text">WHAT TYPES OF<br />INTERVENTIONS MIGHT WORK?</span>
          </div>
        </div>
      </div>

      <footer className="home-footer">
        <span className="home-footer-text">A Research Project at the University of Florida</span>
      </footer>
    </div>
  );
}
