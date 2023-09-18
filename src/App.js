import { Container } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Master Heading */}
      <div className="masthead">
        <Container className="d-flex align-items-center">
          {/* Left */}
          <div className='masthead-left'>
            {/* App Name */}
            <div>
              <h1 style={{ fontSize: "5em", textAlign: "center" }}>Time to get <img src="HypeLightDark.png" style={{ width: "30%" }}/></h1>
            </div>

            {/* App description */}
            <p style={{ fontSize: "2em", textAlign: "center" }}>The newest social media experience: Connecting, Engaging, and Celebrating Diversity</p>

            {/* Call to action */}
          </div>

          {/* Right */}
          <div className='masthead-right'>
            {/* App wireframes */}
            <div style={{ position: "relative" }}>
              <img src="portrait_black.png" className='wireframe' style={{ width: "75%", top: 0 }} />
              <img src="HypeLandingImg.jpg" style={{ width: "75%" }}/>
            </div>
          </div>
        </Container>
      </div>

      {/* App features */}
      {/* Call to action */}
      {/* Contact Form */}
      {/* Footer */}
    </div>
  );
}

export default App;
