import { scrollSectionBtn, scrollTopBtn } from "../../utils/scrollTo.js";

import "./Header.css"; 

function Header() {
  return ( 
    <header className="headerBody" id="headerId"> 
        <p className="headerBtn" onClick={() => scrollTopBtn()}>Home</p>
        <p className="headerBtn" onClick={() => scrollSectionBtn("profileId")}>Profile</p>
        <p className="headerBtn" onClick={() => scrollSectionBtn("projectId")}>Projects</p> 
        <p className="headerBtn" onClick={() => scrollSectionBtn("contactId")}>Contacts</p>     
    </header>
  );
}

export default Header;