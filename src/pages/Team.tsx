import './Team.css';
import PunkHeader from '../components/PunkHeader';

import lokeshImg from '../assets/Team/lokesh-vejendla.jpg';
import abhiImg from '../assets/Team/abhi-gorle.png';
import andiImg from '../assets/Team/andi-bettinger.png';
import katherineImg from '../assets/Team/katherine-marin.png';
import lilaImg from '../assets/Team/lila-greenberg.png';
import julieImg from '../assets/Team/julie-wittenberg.png';
import jimImg from '../assets/Team/jim-harperr.png';
import jessicaImg from '../assets/Team/jessica-sparks.png';
import jieunImg from '../assets/Team/jieun-shin.png';
import janeImg from '../assets/Team/jane-bambauer.png';
import myiahImg from '../assets/Team/myiah-hutchens.png';
import lyrissaImg from '../assets/Team/lyrissa-lidsky.png';

const teamMembers: { name: string; image?: string }[] = [
  { name: 'Lokesh Vejendla', image: lokeshImg },
  { name: 'Abhi Gorle',      image: abhiImg },
  { name: 'Andi Bettinger',  image: andiImg },
  { name: 'Katherine Marin',  image: katherineImg },
  { name: 'Lila Greenberg',   image: lilaImg },
  { name: 'Julie Wittenberg', image: julieImg },
  { name: 'Jim Harper',     image: jimImg },
  { name: 'Jessica Sparks',  image: jessicaImg },
  { name: 'Jieun Shin',      image: jieunImg },
  { name: 'Jane Bambauer',   image: janeImg },
  { name: 'Myiah Hutchens',  image: myiahImg },
  { name: 'Lyrissa Lidsky',  image: lyrissaImg },
];

export default function Team() {
  return (
    <div className="about-page-real">
      <PunkHeader />

      <h1 className="halftone-title about-page-title">OUR TEAM</h1>

      <div className="team-container">
        <div className="team-grid">
          {teamMembers.map(({ name, image }, index) => (
            <div key={index} className="team-member-placeholder">
              <div className="team-photo-box">
                {image ? (
                  <img src={image} alt={name} className="team-photo-img" />
                ) : (
                  <span className="placeholder-text">{name.split(' ')[0].toUpperCase()}</span>
                )}
              </div>
              <p className="team-member-name">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
