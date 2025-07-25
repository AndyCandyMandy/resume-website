import { useInView } from "react-intersection-observer";

import "./ContactSection.css"; 

function ContactSection() {
    const { ref: contactRef, inView: contactInView} = useInView({ threshold: 0.3, triggerOnce: true });  

    return ( 
        <section className="contactBody" id="contactId" ref={contactRef}>
            <h3 className={`hiddenElement ${contactInView ? "fadeIn" : ""}`} style={{ textAlign: "center" }}>Contact Me</h3> 

            <div className={`contactContent hiddenElement ${contactInView ? "fadeIn" : ""}`} style={{ animationDelay: "0.2s", textAlign: "center" }}>  
              <p>
                If you have any questions or inquiries regarding my work, please don't hesitate to reach out to me through email or Linkdin.
                Please feel free to explore my projects on my public GitHub profile.
              </p>

              <a className="btnType1" style={{ margin: "1rem" }} href="mailto:andygiang102@gmail.com">Email</a> 
              <a className="btnType1" href="/assets/AndyGiang_Online_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              
            </div>
        </section>
    );
}

export default ContactSection;