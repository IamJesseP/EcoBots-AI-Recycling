import LandingPage from './LandingPage';
import Nav from './Nav';
import Footer from './Footer';
import Recycle from './Recycle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="recycle" element={<Recycle />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
