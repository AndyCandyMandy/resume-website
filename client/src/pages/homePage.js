import { useInView } from "react-intersection-observer";

import Carousel from "../components/animatedCarousel/carousel.js";

import wizcatPreview from '../images/WizCat_ProjectPreview.png'; 
import warptrialPreview from '../images/WarpTrial_ProjectPreview.png'; 
import rmwPreview from '../images/RMW_ProjectPreview.png';

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
            <h1 className={`hiddenElement ${profileInView ? "fadeIn" : ""}`}>Who is <span style={{ color: "#0090d3" }}>Andy Giang</span>?</h1>
            <div className={`profileContent hiddenElement ${profileInView ? "fadeIn" : ""}`} style={{ animationDelay: "0.2s" }}>
              <img src="/logo512.png" alt="Logo" style={{ maxWidth: "100%", height: "auto" }}/>
              <p>
                As an individual, I highly value the idea that people should always strive to improve themselves through lifelong learning. Through my role as a full-stack developer, I enjoy pushing the boundaries of my knowledge and capabilities when it comes to web development to create efficient but also visually appealing web applications. I incorporate my technical expertise as a programmer to create functional but maintainable backends while leveraging my creativity and eye for detail to create visually intuitive and interactable frontends.
              </p>
            </div> 
          </section>

          
          <h3 className={`titleCarousel hiddenElement ${profileInView ? "fadeIn" : ""}`}>My tools and languages for web development!</h3> 
          <div className={`hiddenElement ${profileInView ? "fadeIn" : ""}`}>
            <Carousel ></Carousel>
          </div>
          
          

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
                  <a className="projectBtn" href="https://github.com/cmpt306team12/CMPT306-WizCat" target="_blank" rel="noreferrer">GitHub</a> 
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
                  <a className="projectBtn" href="https://github.com/AndyCandyMandy/warp-trials-mouse-to-target-research-program" target="_blank" rel="noreferrer">GitHub</a>
                </div>

              </div>

              <img className="projectImage" src={warptrialPreview} alt="WarpTrial Preview"/> 
            </div> 

            <div className={`projectContent hiddenElement ${projectInView ? "fadeIn" : ""}`} style={{ animationDelay: "0.6s" }}>
              <div className="projectResBox">
                <h3 className="projectHeader">Resturant Maintainable Website</h3> 
                <p className="projectRoleDescription">Fullstack Developer</p>
                <p className="projectDescription"> 
                  A full-stack web development project built using React for the frontend, Node.js for the backend, and MySQL as the database. The primary goal of this website is to enable restaurant owners to independently manage and update content, such as menu items, prices, announcements, operating hours, etc., reducing their overall reliance on developers for small but important changes to their webpage. Combines an appealing, user-friendly design with well-organized and extensible code to simplify future maintenance and updates if required by the developer.
                </p> 
                
                <div className="projectBtnBox"> 
                  <a className="projectBtn" href="https://github.com/AndyCandyMandy/restaurant-maintainable-website" target="_blank" rel="noreferrer">GitHub</a>
                </div>

              </div>

              <img className="projectImage" src={rmwPreview} alt="RMW Preview"/> 
            </div>
          
          </section> 


          <section className="contactBody" id="contactId" ref={contactRef}>
            <h1 className={`hiddenElement ${contactInView ? "fadeIn" : ""}`} style={{ textAlign: "center" }}>Contact Me</h1> 

            <div className={`contactContent hiddenElement ${contactInView ? "fadeIn" : ""}`} style={{ animationDelay: "0.2s", textAlign: "center" }}>  
              <p>If you have any questions or inquiries regarding my work, please don't hesitate to reach out to me.</p>
              <a className="contactSubmitBtn" href="mailto:andygiang102@gmail.com">Email</a>
              <a className="footerBtn devicon-linkedin-plain" href="https://www.linkedin.com/in/andy-giang-5571792aa/" target="_blank" rel="noreferrer"></a>
            </div>
          </section>


        </main> 
        <footer className="footerSection"> 
          <a className="footerBtn devicon-github-original" href="https://github.com/AndyCandyMandy" target="_blank" rel="noreferrer"></a>
          

        </footer>
    </div>
  );
}

export default App;