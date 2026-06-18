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
          <a href="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=628650597" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="hero-card-inner bg-lib-hero">
              <h2 className="hero-card-text staatliches-tags">
                <span style={{ color: '#ffffff' }}>TAKE ME<br/>TO THE<br/></span>
                <span style={{ color: '#c1ff72' }}>WHOLE<br/>THING</span>
              </h2>
            </div>
          </a>
        </div>

        <div className="library-rows">
          <div className="library-row">
            <LiteratureCard title={"BULLSHIT\nDEFINED"} bgPattern="bg-starburst" textColor="#a8f0f8" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=833036648#gid=833036648" />
            <LiteratureCard title={"SUPPLY\nV.\nDEMAND"} bgPattern="bg-wavy" textColor="#a8f0f8" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=405486700#gid=405486700" />
            <LiteratureCard title={"AGENDA-\nSETTING"} bgPattern="bg-agenda" textColor="#d4b3f8" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=2089199103#gid=2089199103" />
          </div>
          
          <div className="library-row">
            <LiteratureCard title={"SOCIAL &\nPSYCHOLOGICAL\nEXPLANATIONS"} bgPattern="bg-ribbons" textColor="#a8f0f8" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=1311535512#gid=1311535512" />
            <LiteratureCard title={"PREFERENCE\nFALSIFICATION"} bgPattern="bg-palette" textColor="#a8f0f8" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=2114665819#gid=2114665819" />
          </div>
          
          <div className="library-row">
            <LiteratureCard title={"MEASURES\nOF SOURCE\nQUALITY"} bgPattern="bg-how-1" textColor="#8bf0ff" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=1205722365#gid=1205722365" />
            <LiteratureCard title={"MEASURES\nOF AUDIENCE\nQUALITY"} bgPattern="bg-how-3" textColor="#ff5252" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=566497843#gid=566497843" />
            <LiteratureCard title={"LLM TOOLS"} bgPattern="bg-how-2" textColor="#ffffff" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=1344202204#gid=1344202204" />
          </div>
          
          <div className="library-row">
            <LiteratureCard title={"INTERVENTIONS"} bgPattern="bg-interventions-1 align-bottom" textColor="#8bf0ff" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=907503143#gid=907503143" />
            <LiteratureCard title={"NEW\nINSTITUTIONS"} bgPattern="bg-ribbons" textColor="#ffffff" />
            <LiteratureCard title={""} bgPattern="bg-interventions-3" textColor="transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
