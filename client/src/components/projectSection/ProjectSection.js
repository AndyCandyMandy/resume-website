import { useInView } from "react-intersection-observer";

import wizcatPreview from '../../images/WizCat_ProjectPreview.png'; 
import warptrialPreview from '../../images/WarpTrial_ProjectPreview.png'; 
import rmwPreview from '../../images/RMW_ProjectPreview.png';

function ProjectSection() {
    const { ref: projectRef, inView: projectInView} = useInView({ threshold: 0.3, triggerOnce: true }); 

    return ( 
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
    );
}

export default ProjectSection;