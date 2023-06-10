
import '../styles/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Helmet } from 'react-helmet';


export default function Header(){
  
    return(
        <div className="Header">
        <div class="header">
          <a href="home" class="header-items">
              <button id="homebtn">home</button>
          </a>
          <a href="aboutme" class="header-items">
              <button id="aboutmebtn">about me</button>
          </a>
          <a href="projects" class="header-items">
              <button id="projectbtn">projects</button>
          </a>
          <a href="contact" class="header-items">
              <button id="contactbtn">contact</button>
          </a>
      </div>

      </div>

  );
}
