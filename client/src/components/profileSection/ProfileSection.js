import { useInView } from "react-intersection-observer";

function ProfileSection() {
    const { ref: profileRef, inView: profileInView} = useInView({ threshold: 0.3, triggerOnce: true });    

    return ( 
        <section className="profileBody" id="profileId" ref={profileRef}>
            <h1 className={`hiddenElement ${profileInView ? "fadeIn" : ""}`}>Who is <span style={{ color: "#0090d3" }}>Andy Giang</span>?</h1>
            <div className={`profileContent hiddenElement ${profileInView ? "fadeIn" : ""}`} style={{ animationDelay: "0.2s" }}> 

                <p>
                    As an individual, I highly value the idea that people should always strive to improve themselves through lifelong learning. Through my role as a full-stack developer, I enjoy pushing the boundaries of my knowledge and capabilities when it comes to web development to create efficient but also visually appealing web applications. I incorporate my technical expertise as a programmer to create functional but maintainable backends while leveraging my creativity and eye for detail to create visually intuitive and interactable frontends.
                </p>
            </div> 
        </section>
        
    );
}

export default ProfileSection;