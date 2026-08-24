import './Interventions.css';
import PunkHeader from '../components/PunkHeader';
import LiteratureCard from '../components/LiteratureCard';
import OurWorkCard from '../components/OurWorkCard';
import gradingPdf from '../assets/Grading-Predictions-Penn-May2026.pdf';

export default function Interventions() {
  return (
    <div className="about-page">
      <PunkHeader />
      
      <h1 className="halftone-title int-title">
        <span className="title-line">WHAT TYPES OF INTERVENTIONS</span>
        <span className="title-line">MIGHT WORK?</span>
      </h1>
      
      <div className="about-description pagella-body">
        <p>How can content producers, new institutions, or the government help promote and support truth-tracking?</p>
      </div>

      <div>
        <h2 className="section-title">RELEVANT LITERATURE</h2>
        <div className="literature-grid">
          <LiteratureCard title={"INTERVENTIONS"} bgPattern="bg-interventions-1 align-bottom" textColor="#8bf0ff" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=907503143#gid=907503143" />
          <LiteratureCard title={"NEW\nINSTITUTIONS"} bgPattern="bg-ribbons" textColor="#ffffff" />
          <LiteratureCard title={""} bgPattern="bg-interventions-3" textColor="transparent" />
        </div>
      </div>

      <div>
        <h2 className="section-title">OUR WORK</h2>
        <div className="our-work-section">
          <OurWorkCard title={"ARTICLE:\nTHE DEMAND\nFOR BULLSHIT"} bgPattern="bg-purple-circles" textColor="#a8f0f8" link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6194318" />
          {/* <div className="our-work-divider"></div> */}
          <OurWorkCard title={"WORK IN\nPROGRESS:\nUSING LLMS TO\nSCORE NEWS AND\nOPINION MEDIA"} bgPattern="bg-soundwave" textColor="#00ffff" link={gradingPdf} />
          <OurWorkCard title={"ARTICLE:\nUser perceptions of credibility signals"} bgPattern="bg-dots" textColor="#a8f0f8" link="https://www.sciencedirect.com/science/article/pii/S0160791X26000412" />
        </div>
      </div>
    </div>
  );
}
