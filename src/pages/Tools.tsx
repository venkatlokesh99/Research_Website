import './Tools.css';
import PunkHeader from '../components/PunkHeader';
import LiteratureCard from '../components/LiteratureCard';
import factCourtLogo from '../assets/fact-court-logo.png';

export default function Tools() {
  return (
    <div className="about-page-real">
      <PunkHeader />

      <h1 className="halftone-title about-page-title">OUR TOOLS</h1>

      <div className="about-section">
        <h2 className="section-title">GRADING THE NEWS WITH LLMS</h2>
        <div className="about-description pagella-body">
          <p>Fact-checking is often used when claims are already contested and politicized. Are there other ways to grade the quality of a source of news or commentary? We think so...</p>
        </div>

        <div className="tools-grid">
          <div className="tool-column">
            <a href="https://huggingface.co/spaces/Abhiram9491/NewsPrediction" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="tool-card bg-gray-pattern" style={{ cursor: 'pointer' }}>
                <h3 className="tool-title staatliches-tags" style={{ color: '#ff4d4d' }}>PREDICTION<br />HUNTER</h3>
              </div>
            </a>
            <div className="tool-desc pagella-body">
              <p>This LLM tool can scan old text to look for predictions, infer a due date, and then grade them.</p>
            </div>
          </div>

          <div className="tool-column">
            <div className="tool-card bg-pink-pattern">
              <h3 className="tool-title staatliches-tags" style={{ color: '#ffffff' }}>LOGIC<br />CHECKER</h3>
            </div>
            <div className="tool-desc pagella-body">
              <p>This LLM tool awards positive points for good epistemic practices and negative points for logical fallacies.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">FACT COURT</h2>
        <div className="fact-court-container">
          <div className="fact-court-icon">
            <img src={factCourtLogo} alt="Fact Court Logo" className="fact-court-logo-img" />
          </div>
          <div className="fact-court-desc pagella-body">
            <p>If a speaker wants to cut through the bullshit and promise to pay if somebody can prove them wrong, where can they go to settle that sort of bet?</p>
            <br />
            <p>We are building the platform to resolve friendly bets and truth bounties.</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">RELEVANT LITERATURE</h2>
        <div className="literature-grid lit-4-cols">
          <LiteratureCard title={"MEASURES\nOF SOURCE\nQUALITY"} bgPattern="bg-how-1" textColor="#8bf0ff" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=1205722365#gid=1205722365" />
          <LiteratureCard title={"MEASURES\nOF AUDIENCE\nQUALITY"} bgPattern="bg-how-3" textColor="#ff5252" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=566497843#gid=566497843" />
          <LiteratureCard title={"LLM TOOLS"} bgPattern="bg-how-2" textColor="#ffffff" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=1344202204#gid=1344202204" />
          <LiteratureCard title={"INTERVENTIONS"} bgPattern="bg-interventions-1 align-bottom" textColor="#8bf0ff" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=907503143#gid=907503143" />
        </div>
      </div>
    </div>
  );
}
