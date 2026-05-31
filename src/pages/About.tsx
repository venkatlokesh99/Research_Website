import './About.css';
import PunkHeader from '../components/PunkHeader';
import faculty1 from '../assets/Team/jane-bambauer.png';
import faculty2 from '../assets/Team/lyrissa-lidsky.png';
import faculty3 from '../assets/Team/myiah-hutchens.png';
import faculty4 from '../assets/Team/jim-harperr.png';
import faculty5 from '../assets/Team/jieun-shin.png';
import sponsorUfLevin from '../assets/sponsor-uf-levin.png';
import sponsorUfBrechner from '../assets/sponsor-uf-brechner.png';
import sponsorKnight from '../assets/sponsor-knight.png';
import sponsorIcle from '../assets/sponsor-icle.png';

export default function About() {
  return (
    <div className="about-page-real">
      <PunkHeader />
      
      <h1 className="halftone-title about-page-title">ABOUT</h1>
      
      <div className="about-section">
        <h2 className="section-title">THE MISSION</h2>
        <div className="about-description pagella-body">
          <p>The Program for the Study of Bullshit, housed at the University of Florida, is a multidisciplinary research institution that tackles the study of misinformation and misbelief in a novel way. We take the agency of media audiences into account, and we also recognize that misinformation and misbelief are not always easily separated from legitimate, plausible claims.</p>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">THE FACULTY</h2>
        <div className="faculty-grid">
          <div className="faculty-card">
            <img src={faculty1} alt="Jane Bambauer" className="faculty-image" />
            <div className="faculty-info pagella-body">
              <span className="faculty-name">Jane Bambauer</span>
              <span className="faculty-title">Law</span>
            </div>
          </div>
          <div className="faculty-card">
            <img src={faculty2} alt="Lyrissa Lidsky" className="faculty-image" />
            <div className="faculty-info pagella-body">
              <span className="faculty-name">Lyrissa Lidsky</span>
              <span className="faculty-title">Law</span>
            </div>
          </div>
          <div className="faculty-card">
            <img src={faculty3} alt="Myiah Hutchens" className="faculty-image" />
            <div className="faculty-info pagella-body">
              <span className="faculty-name">Myiah Hutchens</span>
              <span className="faculty-title">Public Relations</span>
            </div>
          </div>
          <div className="faculty-card">
            <img src={faculty4} alt="Jim Harper" className="faculty-image" />
            <div className="faculty-info pagella-body">
              <span className="faculty-name">Jim Harper</span>
              <span className="faculty-title">Research Director</span>
            </div>
          </div>
          <div className="faculty-card">
            <img src={faculty5} alt="Jieun Shin" className="faculty-image" />
            <div className="faculty-info pagella-body">
              <span className="faculty-name">Jieun Shin</span>
              <span className="faculty-title">Media Production,<br/>Management, and Technology</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">THE THANK YOUS</h2>
        <div className="thanks-description pagella-body">
          <p>We are very grateful for the support from the following institutions</p>
        </div>
        <div className="sponsor-grid">
          <div className="sponsor-logo-box">
            <img src={sponsorUfLevin} alt="UF Levin College of Law" className="sponsor-logo-img" />
          </div>
          <div className="sponsor-logo-box">
            <img src={sponsorUfBrechner} alt="UF Brechner Center" className="sponsor-logo-img" />
          </div>
          <div className="sponsor-logo-box">
            <img src={sponsorKnight} alt="Knight Foundation" className="sponsor-logo-img" />
          </div>
          <div className="sponsor-logo-box icle-box">
            <img src={sponsorIcle} alt="International Center for Law & Economics" className="sponsor-logo-img icle-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
