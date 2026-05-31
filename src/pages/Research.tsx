import './Research.css';
import PunkHeader from '../components/PunkHeader';
import OurWorkCard from '../components/OurWorkCard';

export default function Research() {
  return (
    <div className="about-page-real">
      <PunkHeader />
      
      <h1 className="halftone-title research-page-title">OUR RESEARCH</h1>
      
      <div className="about-section">
        <h2 className="section-title text-center">THE CASE FOR FOCUSING ON<br/>AUDIENCE DEMAND</h2>
        <div className="research-grid">
          <OurWorkCard title={"ARTICLE:\nTHE DEMAND\nFOR BULLSHIT"} bgPattern="bg-purple-circles" textColor="#a8f0f8" />
          <OurWorkCard title={"ESSAY:\nTHE DEMAND FOR\nBULLSHIT UNDER\nAMERICAN AND\nEUROPEAN LAW"} bgPattern="bg-dark-grid" textColor="#a8f0f8" />
          <OurWorkCard title={"CHAPTER:\nTHE DEMAND FOR\nBULLSHIT"} bgPattern="bg-redwave" textColor="#a8f0f8" />
        </div>
      </div>

      <div className="about-section" style={{ marginTop: '2rem' }}>
        <h2 className="section-title">GRADING THE NEWS</h2>
        <div className="research-grid">
          <OurWorkCard title={"WORK IN\nPROGRESS:\nUSING LLMS TO\nSCORE NEWS AND\nOPINION MEDIA"} bgPattern="bg-soundwave" textColor="#00ffff" />
        </div>
      </div>

      <div className="about-section" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
        <h2 className="section-title">NEW INSTITUTIONS</h2>
        <div className="research-grid">
          <OurWorkCard title={"WORK IN\nPROGRESS:\nWHAT FACTUAL\nADJUDICATION RULES\nARE MOST TRUSTED?"} bgPattern="bg-dots" textColor="#a8f0f8" />
        </div>
      </div>
    </div>
  );
}
