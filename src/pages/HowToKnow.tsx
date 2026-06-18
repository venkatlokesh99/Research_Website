import './HowToKnow.css';
import PunkHeader from '../components/PunkHeader';
import LiteratureCard from '../components/LiteratureCard';
import OurWorkCard from '../components/OurWorkCard';

export default function HowToKnow() {
  return (
    <div className="about-page">
      <PunkHeader />
      
      <h1 className="halftone-title how-title">
        <span className="title-line">HOW WOULD WE KNOW</span>
        <span className="title-line">WHETHER IT'S BULLSHIT?</span>
      </h1>
      
      <div className="about-description pagella-body">
        <p>How can we measure the quality of a speaker or the epistemic performance of a listener? Source quality can be measured using factual/predictive accuracy, logical soundness, and ideological bias. Audience quality can be gauged through measures of epistemic vigilance and source preferences.</p>
      </div>

      <div>
        <h2 className="section-title">RELEVANT LITERATURE</h2>
        <div className="literature-grid">
          <LiteratureCard title={"MEASURES\nOF SOURCE\nQUALITY"} bgPattern="bg-how-1" textColor="#8bf0ff" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=1205722365#gid=1205722365" />
          <LiteratureCard title={"MEASURES\nOF AUDIENCE\nQUALITY"} bgPattern="bg-how-3" textColor="#ff5252" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=566497843#gid=566497843" />
          <LiteratureCard title={"LLM TOOLS"} bgPattern="bg-how-2" textColor="#ffffff" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=1344202204#gid=1344202204" />
        </div>
      </div>

      <div>
        <h2 className="section-title">OUR WORK</h2>
        <div className="our-work-section">
          <OurWorkCard title={"ARTICLE:\nTHE DEMAND\nFOR BULLSHIT"} bgPattern="bg-purple-circles" textColor="#a8f0f8" link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6194318" />
          <div className="our-work-divider"></div>
          <OurWorkCard title={"WORK IN\nPROGRESS:\nUSING LLMS TO\nSCORE NEWS AND\nOPINION MEDIA"} bgPattern="bg-sunburst" textColor="#00ffff" />
        </div>
      </div>
    </div>
  );
}
