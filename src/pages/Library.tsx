import './Library.css';
import PunkHeader from '../components/PunkHeader';
import LiteratureCard from '../components/LiteratureCard';

export default function Library() {
  return (
    <div className="about-page-real">
      <PunkHeader />
      
      <h1 className="halftone-title library-page-title">THE BS LIBRARY</h1>
      
      <div className="about-section">
        <div className="hero-library-card">
          <div className="hero-card-inner bg-lib-hero">
            <h2 className="hero-card-text staatliches-tags">
              <span style={{ color: '#ffffff' }}>TAKE ME<br/>TO THE<br/></span>
              <span style={{ color: '#c1ff72' }}>WHOLE<br/>THING</span>
            </h2>
          </div>
        </div>

        <div className="library-rows">
          <div className="library-row">
            <LiteratureCard title={"BULLSHIT\nDEFINED"} bgPattern="bg-starburst" textColor="#a8f0f8" />
            <LiteratureCard title={"SUPPLY\nV.\nDEMAND"} bgPattern="bg-wavy" textColor="#a8f0f8" />
            <LiteratureCard title={"AGENDA-\nSETTING"} bgPattern="bg-agenda" textColor="#d4b3f8" />
          </div>
          
          <div className="library-row">
            <LiteratureCard title={"SOCIAL &\nPSYCHOLOGICAL\nEXPLANATIONS"} bgPattern="bg-ribbons" textColor="#a8f0f8" />
            <LiteratureCard title={"PREFERENCE\nFALSIFICATION"} bgPattern="bg-palette" textColor="#a8f0f8" />
          </div>
          
          <div className="library-row">
            <LiteratureCard title={"MEASURES\nOF SOURCE\nQUALITY"} bgPattern="bg-how-1" textColor="#8bf0ff" />
            <LiteratureCard title={"MEASURES\nOF AUDIENCE\nQUALITY"} bgPattern="bg-how-3" textColor="#ff5252" />
            <LiteratureCard title={"LLM TOOLS"} bgPattern="bg-how-2" textColor="#ffffff" />
          </div>
          
          <div className="library-row">
            <LiteratureCard title={"INTERVENTIONS"} bgPattern="bg-interventions-1 align-bottom" textColor="#8bf0ff" />
            <LiteratureCard title={"NEW\nINSTITUTIONS"} bgPattern="bg-ribbons" textColor="#ffffff" />
            <LiteratureCard title={""} bgPattern="bg-interventions-3" textColor="transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
