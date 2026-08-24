import './WhatIsBullshit.css';
import PunkHeader from '../components/PunkHeader';
import OurWorkCard from '../components/OurWorkCard';
import LiteratureCard from '../components/LiteratureCard';

export default function WhatIsBullshit() {
  return (
    <div className="about-page">
      <PunkHeader />

      <h1 className="halftone-title about-header">WHAT IS BULLSHIT?</h1>

      <div className="about-description pagella-body">
        <p>Bullshit is an indifference to the truth. A claim may be correct, or it may be false. Truth is beside the point. Rather, when a speaker offers bullshit, or when a listener accepts it, they offer or accept the claim in order to serve some non-epistemic purpose, like fitting in with friends or feeling secure.</p>
      </div>

      <div>
        <h2 className="section-title">RELEVANT LITERATURE</h2>
        <div className="literature-grid">
          <LiteratureCard title={"BULLSHIT\nDEFINED"} bgPattern="bg-starburst" textColor="#a8f0f8" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=833036648#gid=833036648" />
          <LiteratureCard title={"SUPPLY\nV.\nDEMAND"} bgPattern="bg-wavy" textColor="#a8f0f8" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=405486700#gid=405486700" />
          <LiteratureCard title={"AGENDA-\nSETTING"} bgPattern="bg-agenda" textColor="#d4b3f8" link="https://docs.google.com/spreadsheets/d/14uZLGmrgj2qsuMEu6amvTffC-1EeZWsZaaZJpkS11H8/edit?gid=2089199103#gid=2089199103" />
        </div>
      </div>

      <div>
        <h2 className="section-title">OUR WORK</h2>
        <div className="our-work-section">
          <OurWorkCard title={"ARTICLE:\nTHE DEMAND\nFOR BULLSHIT"} bgPattern="bg-purple-circles" textColor="#a8f0f8" link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6194318" />
          <OurWorkCard title={"ARTICLE:\nCURATION AS\nCOMPETITION,\nCURATION AS VICE"} bgPattern="bg-yellow-pink-diag" textColor="#fe1165" link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5148059" />
          <OurWorkCard title={"ESSAY:\nTHE DEMAND FOR\nBULLSHIT UNDER\nAMERICAN AND\nEUROPEAN LAW"} bgPattern="bg-dark-grid" textColor="#a8f0f8" link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6858718" />
          <OurWorkCard title={"ARTICLE:\nSeeing Red (And Blue): Partisan Identity"} bgPattern="bg-red-grid" textColor="#ff5252" link="https://doi.org/10.1080/15213269.2024.2347237" />
          <OurWorkCard title={"ARTICLE:\nTO SEEK OR\nNOT TO SEEK?"} bgPattern="bg-redwave" textColor="#a8f0f8" link="https://doi.org/10.1080/10510974.2024.2412868" />
          <OurWorkCard title={"ARTICLE:\nEMOTION SELLS:\nRAGE BAIT VS.\nINFO BAIT"} bgPattern="bg-soundwave" link="https://www.tandfonline.com/doi/full/10.1080/21670811.2025.2505566" textColor="#00ffff" />
        </div>
      </div>
    </div>
  );
}
