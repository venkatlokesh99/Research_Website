import './Research.css';
import PunkHeader from '../components/PunkHeader';
import OurWorkCard from '../components/OurWorkCard';
import gradingPdf from '../assets/Grading-Predictions-Penn-May2026.pdf';

export default function Research() {
  return (
    <div className="about-page-real">
      <PunkHeader />
      
      <h1 className="halftone-title research-page-title">OUR RESEARCH</h1>
      
      <div className="about-section">
        <h2 className="section-title text-center">THE CASE FOR FOCUSING ON<br/>AUDIENCE DEMAND</h2>
        <div className="research-grid">
          <OurWorkCard title={"ARTICLE:\nTHE DEMAND\nFOR BULLSHIT"} bgPattern="bg-purple-circles" textColor="#a8f0f8" link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6194318" />
          <OurWorkCard title={"ESSAY:\nTHE DEMAND FOR\nBULLSHIT UNDER\nAMERICAN AND\nEUROPEAN LAW"} bgPattern="bg-dark-grid" textColor="#a8f0f8" link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6858718" />
          <OurWorkCard title={"CHAPTER:\nTHE DEMAND FOR\nBULLSHIT"} bgPattern="bg-redwave" textColor="#a8f0f8" />
          <OurWorkCard title={"ARTICLE:\nSeeing Red (And Blue): Partisan Identity"} bgPattern="bg-red-grid" textColor="#ff5252" link="https://doi.org/10.1080/15213269.2024.2347237" />
          <OurWorkCard title={"ARTICLE:\nTO SEEK OR\nNOT TO SEEK?"} bgPattern="bg-redwave" textColor="#a8f0f8" link="https://doi.org/10.1080/10510974.2024.2412868" />
          <OurWorkCard title={"ARTICLE:\nEMOTION SELLS:\nRAGE BAIT VS.\nINFO BAIT"} bgPattern="bg-soundwave" link="https://www.tandfonline.com/doi/full/10.1080/21670811.2025.2505566" textColor="#00ffff" />
        </div>
      </div>

      <div className="about-section" style={{ marginTop: '2rem' }}>
        <h2 className="section-title">GRADING THE NEWS</h2>
        <div className="research-grid">
          <OurWorkCard title={"WORK IN\nPROGRESS:\nUSING LLMS TO\nSCORE NEWS AND\nOPINION MEDIA"} bgPattern="bg-dots" textColor="#00ffff" link={gradingPdf} />
        </div>
      </div>

      <div className="about-section" style={{ marginTop: '2rem' }}>
        <h2 className="section-title">NEW INSTITUTIONS</h2>
        <div className="research-grid">
          <OurWorkCard title={"ARTICLE:\nSHIN\n(2025)"} bgPattern="bg-redwave" textColor="#a8f0f8" link="https://www.sciencedirect.com/science/article/pii/S0160791X26000412" />
        </div>
      </div>

      <div className="about-section" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
        <h2 className="section-title">LEGAL SCHOLARSHIP</h2>
        <div className="research-grid">
          <OurWorkCard title={"CHAPTER:\nDEFAMATION LAW\n& THE FOURTH\nESTATE"} bgPattern="bg-dark-grid" textColor="#a8f0f8" link="https://www.cambridge.org/core/services/aop-cambridge-core/content/view/8DE7F1A9233A333D63A3479A6474D701/9781009515535c8_100-115.pdf/defamation_law_and_the_crumbling_legitimacy_of_the_fourth_estate.pdf" />
          <OurWorkCard title={"ARTICLE:\nLIDSKY &\nDAVES"} bgPattern="bg-purple-circles" textColor="#a8f0f8" link="https://www.journaloffreespeechlaw.org/lidskydaves.pdf" />
          <OurWorkCard title={"ARTICLE:\nCURATION AS\nCOMPETITION,\nCURATION AS VICE"} bgPattern="bg-yellow-pink-diag" textColor="#fe1165" link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5148059" />
        </div>
      </div>
    </div>
  );
}
