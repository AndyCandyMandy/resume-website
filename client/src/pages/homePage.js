function App() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

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
              <img src="/logo512.png" alt="Logo" style={{ maxWidth: "100%", height: "auto" }}/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
              </p>
            </div>
          </section>

          <section className="projectBody">
            <h1>Projects</h1>

            <div className="projectContent">
              <h3 className="projectHeader">Project #1</h3>
              <p className="projectDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
              </p>
            </div>

            <div className="projectContent">
              <h3 className="projectHeader">Project #2</h3>
              <p className="projectDescription"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
              </p>
            </div> 

            <div className="projectContent">
              <h3 className="projectHeader">Project #3</h3>
              <p className="projectDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
              </p>
            </div>
          
          </section> 

          <section className="contactBody">
            <h1 style={{ textAlign: "center" }}>Contact Me</h1> 

            <form className="contactContent" > 
              <input className="contactInput" type="text" placeholder="Enter Name"/> 
              <input className="contactInput" type="text" placeholder="Enter Email"/> 
              <textarea className="contactMessage" type="text" placeholder="Enter Message"/> 
              <button className="contactSubmitBtn" type="submit">Submit</button>
            </form>

          </section>

          <button className="scrollBtn" onClick={scrollTop}>^</button>
        </main> 
        <footer className="footerSection"> 
          <button>github</button> 
          <button>linkdon</button>

        </footer>
    </div>
  );
}

export default App;