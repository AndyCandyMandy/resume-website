import { useInView } from "react-intersection-observer";

function App() { 
  const { ref: profileRef, inView: profileInView} = useInView({
    /* Optional options */
    threshold: 0,
  });  
  const { ref: projectRef, inView: projectInView} = useInView({
    /* Optional options */
    threshold: 0,
  });  
  const { ref: contactRef, inView: contactInView} = useInView({
    /* Optional options */
    threshold: 0,
  }); 

  const scrollTopBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const scrollSectionBtn = (id) => { 
    const element = document.getElementById(id); 
    const header = document.getElementById("headerId");

    const headerOffset = (element.getBoundingClientRect().top + window.pageYOffset) - header.offsetHeight;

    window.scrollTo({ 
      top: headerOffset, 
      behavior: "smooth"
    });
  }

  return ( 
    <div> 
        <header className="headerSection" id="headerId">  
            <p className={`headerBtn ${profileInView ? "inViewport" : ""}`} onClick={() => scrollSectionBtn("profileId")}>Profile</p>
            <p className={`headerBtn ${projectInView ? "inViewport" : ""}`} onClick={() => scrollSectionBtn("projectId")}>Projects</p> 
            <p className={`headerBtn ${contactInView ? "inViewport" : ""}`} onClick={() => scrollSectionBtn("contactId")}>Contacts</p>
        </header>
        <main className="homeBody"> 


          <section className="profileBody" id="profileId" ref={profileRef}>
            <h1>Who is <span style={{ color: "#ffc400" }}>Andy Giang</span>?</h1>
            <div className="profileContent">
              <img src="/logo512.png" alt="Logo" style={{ maxWidth: "100%", height: "auto" }}/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
              </p>
            </div> 
          </section>

          <h3 className="titleCarousel">My tools and languages for web development!</h3>
          <div className="displayCarousel"> 
            
            <div className="trackCarousel">
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt=""/>  
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt=""/>
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt=""/>  
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/couchdb/couchdb-original-wordmark.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" alt=""/> 
            </div> 
            <div className="trackCarousel">
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt=""/>  
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt=""/>
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt=""/>  
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/couchdb/couchdb-original-wordmark.svg" alt=""/> 
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" alt=""/> 
            </div> 
          </div>

          <section className="projectBody" id="projectId" ref={projectRef}>
            <h1>Projects</h1>

            <div className="projectContent">
              <h3 className="projectHeader">Project #1</h3> 
              <img src="/logo192.png" alt="Logo" style={{ maxWidth: "100%", height: "auto" }}/>
              <p className="projectDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
              </p> 
              <button className="projectBtn">About</button> 
              <button className="projectBtn">Project</button>
            </div>

            <div className="projectContent">
              <h3 className="projectHeader">Project #2</h3> 
              <img src="/logo192.png" alt="Logo" style={{ maxWidth: "100%", height: "auto" }}/>
              <p className="projectDescription"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
              </p> 
              <button className="projectBtn">About</button> 
              <button className="projectBtn">Project</button>
            </div> 

            <div className="projectContent">
              <h3 className="projectHeader">Project #3</h3> 
              <img src="/logo192.png" alt="Logo" style={{ maxWidth: "100%", height: "auto" }}/>
              <p className="projectDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
              </p> 
              <button className="projectBtn">About</button> 
              <button className="projectBtn">Project</button>
            </div>
          
          </section> 

          <section className="contactBody" id="contactId" ref={contactRef}>
            <h1 style={{ textAlign: "center" }}>Contact Me</h1> 

            <form className="contactContent" >  
              <p>If you have any questions or inquiries regarding my work, please don't hesitate to reach out to me.</p>
              <input className="contactInput" type="text" placeholder="Enter Name"/> 
              <input className="contactInput" type="text" placeholder="Enter Email"/> 
              <textarea className="contactMessage" type="text" placeholder="Enter Message"/> 
              <button className="contactSubmitBtn" type="submit">Submit</button>
            </form>

          </section>

          <button className="scrollBtn" onClick={scrollTopBtn}>^</button>
        </main> 
        <footer className="footerSection"> 
          <i class="devicon-github-original" style={{ fontSize: "50px" }}></i>
          <i class="devicon-linkedin-plain" style={{ fontSize: "50px" }}></i>

        </footer>
    </div>
  );
}

export default App;