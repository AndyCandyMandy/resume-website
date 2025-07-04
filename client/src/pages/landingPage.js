import {Link} from "react-router-dom"
import Canvas from "../components/canvas.js"

function App() {
  return ( 
    <div>
        <main className="landingBody"> 

          {/* <Canvas className="landingCanvas"></Canvas> */}

          <div className="landingHeader"> 

            <p>Greetings, I am <span style={{ color: "#0090d3" }}>Andy Giang</span>.</p> 
            <p>Welcome to my website!</p> 
            
            <a className="landingBtn" href="/assets/AndyGiang_Online_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <Link className="landingBtn" to="/homePage">Home Page</Link>

          </div>

        </main>
    </div>
  );
}

export default App;