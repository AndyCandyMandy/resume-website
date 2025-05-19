function App() {
  return ( 
    <div> 
        <header className="headerSection"> 
            <p className="headerBtn">Profile</p> 
            <p className="headerBtn">Projects</p> 
            <p className="headerBtn">Contacts</p>
        </header>
        <main className="homeBody"> 


          <section className="profileBody">
            <h1>Who is <span style={{ color: "#ffc400" }}>Andy Giang</span>?</h1>
            <div className="profileContent">
              <img src="/logo512.png" alt="Logo" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
              </p>
            </div>
          </section>

          <section className="projectBody">
            <h1>Projects</h1>

            <div className="projectContent">
              <h3>Project #1</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
              </p>
            </div>

            <div className="projectContent">
              <h3>Project #2</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
              </p>
            </div> 

            <div className="projectContent">
              <h3>Project #3</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
              </p>
            </div>
          
          </section> 

          <section className="contactBody">
            <h1>Contact Me</h1>

          </section>


        </main>
    </div>
  );
}

export default App;