import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ConnectingLine from './components/ConnectingLine';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import WhatIsBullshit from './pages/WhatIsBullshit';
import AudiencesWant from './pages/AudiencesWant';
import HowToKnow from './pages/HowToKnow';
import Interventions from './pages/Interventions';
import Tools from './pages/Tools';
import Events from './pages/Events';
import Library from './pages/Library';
import Research from './pages/Research';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Sidebar />
        <ConnectingLine />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-is-bullshit" element={<WhatIsBullshit />} />
            <Route path="/audiences-want" element={<AudiencesWant />} />
            <Route path="/how-to-know" element={<HowToKnow />} />
            <Route path="/interventions" element={<Interventions />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/events" element={<Events />} />
            <Route path="/library" element={<Library />} />
            <Route path="/research" element={<Research />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
