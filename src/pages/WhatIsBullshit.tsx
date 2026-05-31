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
        <p>Bullshit is an indifference to the truth. A claim may be true, it may be false. Truth is beside the point. Rather, when a speaker offers bullshit, or when a listener accepts it, they offer or accept the claim in order to serve some non-epistemic purpose, like fitting in with friends or feeling secure.</p>
      </div>

      <div>
        <h2 className="section-title">RELEVANT LITERATURE</h2>
        <div className="literature-grid">
          <LiteratureCard title={"BULLSHIT\nDEFINED"} bgPattern="bg-starburst" textColor="#a8f0f8" />
          <LiteratureCard title={"SUPPLY\nV.\nDEMAND"} bgPattern="bg-wavy" textColor="#a8f0f8" />
          <LiteratureCard title={"AGENDA-\nSETTING"} bgPattern="bg-agenda" textColor="#d4b3f8" />
        </div>
      </div>

      <div>
        <h2 className="section-title">OUR WORK</h2>
        <div className="our-work-section">
          <OurWorkCard title={"ARTICLE:\nTHE DEMAND\nFOR BULLSHIT"} bgPattern="bg-purple-circles" textColor="#a8f0f8" />
          <div className="our-work-divider"></div>
          <OurWorkCard title={"ARTICLE:\nCURATION AS\nCOMPETITION,\nCURATION AS VICE"} bgPattern="bg-yellow-pink-diag" textColor="#fe1165" />
          <OurWorkCard title={"ESSAY:\nTHE DEMAND FOR\nBULLSHIT UNDER\nAMERICAN AND\nEUROPEAN LAW"} bgPattern="bg-dark-grid" textColor="#a8f0f8" />
        </div>
      </div>
    </div>
  );
}
