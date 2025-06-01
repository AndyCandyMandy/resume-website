import { useInView } from "react-intersection-observer";

import wizcatPreview from '../images/WizCat_ProjectPreview.png'; 
import warptrialPreview from '../images/WarpTrial_ProjectPreview.png';

function App() { 
  
  const { ref: profileRef, inView: profileInView} = useInView({ threshold: 0.3, triggerOnce: true });  
  const { ref: projectRef, inView: projectInView} = useInView({ threshold: 0.3, triggerOnce: true });  
  const { ref: contactRef, inView: contactInView} = useInView({ threshold: 0.3, triggerOnce: true });  

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
            <p className="headerBtn" onClick={() => scrollSectionBtn("profileId")}>Profile</p>
            <p className="headerBtn" onClick={() => scrollSectionBtn("projectId")}>Projects</p> 
            <p className="headerBtn" onClick={() => scrollSectionBtn("contactId")}>Contacts</p>
        </header>
        <main className="homeBody"> 


          <section className="profileBody" id="profileId" ref={profileRef}>
            <h1 className={`hiddenElement ${profileInView ? "fadeIn" : ""}`}>Who is <span style={{ color: "#ffc400" }}>Andy Giang</span>?</h1>
            <div className={`profileContent hiddenElement ${profileInView ? "fadeIn" : ""}`} style={{ animationDelay: "0.2s" }}>
              <img src="/logo512.png" alt="Logo" style={{ maxWidth: "100%", height: "auto" }}/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
              </p>
            </div> 
          </section>

          
          <h3 className={`titleCarousel hiddenElement ${profileInView ? "fadeIn" : ""}`}>My tools and languages for web development!</h3>
          <section className={`displayCarousel hiddenElement ${profileInView ? "fadeIn" : ""}`}> 
            
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
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt=""/> 
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
              <img className="logoCarousel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt=""/> 
            </div> 
            
          </section>
          

          <section className="projectBody" id="projectId" ref={projectRef}>
            <h1 className={`hiddenElement ${projectInView ? "fadeIn" : ""}`}>Projects</h1>

            <div className={`projectContent hiddenElement ${projectInView ? "fadeIn" : ""}`} style={{ animationDelay: "0.2s" }}>
              <div className="projectResBox">
                <h3 className="projectHeader">WizCat Adventures</h3> 
                <p className="projectRoleDescription">Game Developer, Design Lead, and Artist</p>
                <p className="projectDescription"> 
                  WizCat Adventures is an indie game project developed in the span of 2.5 months, utilizing the Unity Game Engine while showcasing proper elements of game development. With heavy inspiration from Noita, Wii Tanks, and Vampire Survivors, WizCat Adventures embraces the roguelike genre of its role models. The game was recognized as being the top project in the course due to our focus on well-rounded game mechanics, a polished, visually engaging interface, and our team collaboration within an agile environment.
                </p> 
                
                <div className="projectBtnBox"> 
                  <a className="projectBtn" href="https://github.com/cmpt306team12/CMPT306-WizCat" target="_blank" rel="noreferrer">About</a> 
                  <a className="projectBtn" href="https://allahgold.itch.io/wizcat" target="_blank" rel="noreferrer">Project</a>
                </div>

              </div>

              <img className="projectImage" src={wizcatPreview} alt="WizCat Preview"/> 
            </div>

            <div className={`projectContent hiddenElement ${projectInView ? "fadeIn" : ""}`} style={{ animationDelay: "0.4s" }}>
              <div className="projectResBox">
                <h3 className="projectHeader">Warp Trials Research Program</h3> 
                <p className="projectRoleDescription">Software Developer</p>
                <p className="projectDescription"> 
                  A collaborative research project designed with the intention to gauge, compare, and record different cursor warping mechanisms based on entirely Java and its libraries. The program is organized through a model-view-controller (MVC) architecture for organization and scalability, aiming for a low-coupling and high-cohesion framework. Using the Fitts’s Index of Difficulty in conjunction with time-based trials, the program can collect and organize specific data, such as trial numbers, click errors, elapsed time, etc., to visually present in graph form.
                </p> 
                
                <div className="projectBtnBox"> 
                  <a className="projectBtn" href="https://github.com/AndyCandyMandy/warp-trials-mouse-to-target-research-program" target="_blank" rel="noreferrer">About</a>
                </div>

              </div>

              <img className="projectImage" src={warptrialPreview} alt="WarpTrial Preview"/> 
            </div> 

            <div className={`projectContent hiddenElement ${projectInView ? "fadeIn" : ""}`} style={{ animationDelay: "0.6s" }}>
              <div className="projectResBox">
                <h3 className="projectHeader">Project #3</h3> 
                <p className="projectRoleDescription">Fullstack Developer</p>
                <p className="projectDescription"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida aliquam leo quis porta. Sed elementum dolor ac lorem scelerisque, vel vulputate dui consequat. Pellentesque ut enim id tellus luctus gravida eget a tellus. Morbi hendrerit consequat velit, at scelerisque erat sodales sit amet. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh enim, mollis id sem a, viverra mollis nisi. Ut porttitor erat ac magna fringilla luctus.
                </p> 
                
                <div className="projectBtnBox"> 
                  <button className="projectBtn">About</button>  
                  <a className="projectBtn" href="https://allahgold.itch.io/wizcat" target="_blank" rel="noreferrer">Project</a>
                </div>

              </div>

              <img className="projectImage" src={wizcatPreview} alt="WizCat Preview"/> 
            </div>
          
          </section> 

          <section className="contactBody" id="contactId" ref={contactRef}>
            <h1 className={`hiddenElement ${contactInView ? "fadeIn" : ""}`} style={{ textAlign: "center" }}>Contact Me</h1> 

            <form className={`contactContent hiddenElement ${contactInView ? "fadeIn" : ""}`} style={{ animationDelay: "0.2s", textAlign: "center" }}>  
              <p>If you have any questions or inquiries regarding my work, please don't hesitate to reach out to me.</p>
              <input className="contactInput" type="text" placeholder="Enter Name"/> 
              <input className="contactInput" type="text" placeholder="Enter Email"/> 
              <textarea className="contactMessage" type="text" placeholder="Enter Message"/> 
              <button className="contactSubmitBtn" type="submit">Submit</button>
            </form>

          </section>

          <button className="scrollBtn" onClick={scrollTopBtn}>	&#9650;</button>
        </main> 
        <footer className="footerSection"> 
          <a className="footerBtn devicon-github-original" href="https://github.com/AndyCandyMandy" target="_blank" rel="noreferrer"></a>
          <a className="footerBtn devicon-linkedin-plain" href="https://github.com/AndyCandyMandy" target="_blank" rel="noreferrer"></a>

        </footer>
    </div>
  );
}

export default App;