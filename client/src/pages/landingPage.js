import {Link} from "react-router-dom"

function App() {
  return ( 
    <div>
        <main className="landingBody"> 

          <div className="landingHeader"> 
            <p>Greetings, I am <span style={{ color: "#ffc400" }}>Andy Giang</span>.</p> 
            <p>Welcome to my website!</p>
            <button className="landingBtn">Resume</button> 
            <Link className="landingBtn" to="/homePage">Home Page</Link>

            
          </div>

        </main>
    </div>
  );
}

export default App;