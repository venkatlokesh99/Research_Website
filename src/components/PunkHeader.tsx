import { Link } from 'react-router-dom';
import './PunkHeader.css';

export default function PunkHeader() {
  return (
    <div className="top-banner-container">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h2 className="pink-banner-header">The Program for the Study of Bullshit</h2>
      </Link>
    </div>
  );
}
