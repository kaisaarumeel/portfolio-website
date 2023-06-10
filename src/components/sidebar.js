
import '../styles/styles.css';

export default function SideBar(){
  
    return(

<div className="sidebar">
            <div className="sidebar-text">
            <a href="aboutme" className="sidebar-item">
                <button id="aboutme">ABOUT ME</button>
              </a>
              <a href="projects" className="sidebar-item">
                <button id="project">PROJECTS</button>
              </a>
              <a href="contact" className="sidebar-item">
                <button id="contact">CONTACT</button>
              </a>
            </div>
          </div>
    )
}