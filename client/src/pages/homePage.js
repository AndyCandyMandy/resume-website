//import Canvas from "../components/canvas.js"; 

import Header from "../components/stickyHeader/Header.js"; 
import Profile from "../components/profileSection/ProfileSection.js"; 
import Projects from "../components/projectSection/ProjectSection.js"; 
import Contacts from "../components/contactSection/ContactSection.js"; 

function App() { 


  return ( 
    <div>  
        <section className="landingBody">
        
          {/*<Canvas className="landingCanvas"></Canvas>*/}

          <div className="landingContent"> 

            <p className="landingText">Greetings, I am <span style={{ color: "#0090d3" }}>Andy Giang</span>.</p> 
            <p className="landingText" style={{ marginBottom:"2rem" }}>Welcome to my website!</p> 
            
            <a className="btnType1" href="/assets/AndyGiang_Online_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>

        </section>

        <Header></Header>
        
        <main className="homeBody"> 

          <Profile></Profile>

          <Projects></Projects>

          <Contacts></Contacts>

        </main> 
        <footer className="footerSection"> 

          <a className="footerBtn" href="https://github.com/AndyCandyMandy" target="_blank" rel="noreferrer">
            <span className="devicon-github-original"/>
            <span style={{margin:"0", marginLeft:"1rem"}}>GitHub</span>
          </a> 

          <a className="footerBtn" href="https://www.linkedin.com/in/andy-giang-5571792aa/" target="_blank" rel="noreferrer">
            <span className="devicon-linkedin-plain"/>
            <span style={{margin:"0", marginLeft:"1rem"}}>Linkedin</span>
          </a>

        </footer>
    </div>
  );
}

export default App;