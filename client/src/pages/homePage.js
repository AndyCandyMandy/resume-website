function App() {
  return ( 
    <div> 
        <header className="headerSection"> 
            <p className="headerBtn">Profile</p> 
            <p className="headerBtn">Projects</p> 
            <p className="headerBtn">Contacts</p>
        </header>
        <main className="homeBody"> 


          <div className="profileBody">
            <h1>Who is <span style={{ color: "#ffc400" }}>Andy Giang</span>?</h1>
            <picture>

            </picture>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
            </p>
          </div>

          <div className="projectBody">
            <h1>Projects</h1>
          
          </div> 

          <div className="contactBody">
            <h1>Contact Me</h1>

          </div>


        </main>
    </div>
  );
}

export default App;