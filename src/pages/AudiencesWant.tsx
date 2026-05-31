import './AudiencesWant.css';
import PunkHeader from '../components/PunkHeader';
import LiteratureCard from '../components/LiteratureCard';
import OurWorkCard from '../components/OurWorkCard';

export default function AudiencesWant() {
  return (
    <div className="about-page">
      <PunkHeader />
      
      <h1 className="halftone-title audi-title">
        <span className="title-line">WHAT DO AUDIENCES WANT</span>
        <span className="title-line">IF THEY DON'T WANT THE TRUTH?</span>
      </h1>
      
      <div className="about-description pagella-body">
        <p>Everyone wants to track down the truth some of the time they interact with information, but we also sometimes use information to serve other goals: to fit in socially, to entertain ourselves, or to feel secure in our understanding of how the world works.</p>
      </div>

      <div>
        <h2 className="section-title">RELEVANT LITERATURE</h2>
        <div className="literature-grid">
          <LiteratureCard title={"SOCIAL &\nPSYCHOLOGICAL\nEXPLANATIONS"} bgPattern="bg-ribbons" textColor="#a8f0f8" />
          <LiteratureCard title={"PREFERENCE\nFALSIFICATION"} bgPattern="bg-palette" textColor="#a8f0f8" />
          <LiteratureCard title={"BULLSHIT\nDEFINED"} bgPattern="bg-starburst" textColor="#d4b3f8" />
        </div>
      </div>

      <div>
        <h2 className="section-title">OUR WORK</h2>
        <div className="our-work-section">
          <OurWorkCard title={"ARTICLE:\nTHE DEMAND\nFOR BULLSHIT"} bgPattern="bg-purple-circles" textColor="#a8f0f8" />
          <div className="our-work-divider"></div>
          <OurWorkCard title={"ESSAY:\nTHE DEMAND FOR\nBULLSHIT UNDER\nAMERICAN AND\nEUROPEAN LAW"} bgPattern="bg-dark-grid" textColor="#a8f0f8" />
          <OurWorkCard title={"CHAPTER:\nTHE DEMAND FOR\nBULLSHIT"} bgPattern="bg-red-grid" textColor="#a8f0f8" />
        </div>
      </div>
    </div>
  );
}
