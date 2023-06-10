
import '../styles/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Helmet } from 'react-helmet';
import Header from './header';
import Footer from './footer';


export default function Contact(){
  
    return(
        <div className="<Contact>">
        <Helmet>
          <link
           href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="KA.png" />
          <title>Contact | Kaisa Arumeel</title>
        </Helmet>
       <Header/>
  
      <div class="container">
        <div class="contact-text">
            <h1 class="contact-me">Contact me
            </h1>
            <p class="shy-hi">DON'T BE SHY, SAY HI!</p>
            <div class="social-icons">
                
                 <a href="https://www.linkedin.com/in/kaisa-arumeel-926640214/" target="_blank"><img alt="LinkedIn" src="linkedin.png" />Kaisa Arumeel </a> 
                 <a href="mailto:" target="_blank"><img alt="Mail" src="mail.png" />kaisa.arumeel@gmail.com</a>  
                 <a  href="https://www.instagram.com/kaisaarumeel/" target="_blank"><img alt="Instagram" src="instagram.png" /> @kaisaarumeel</a> 
                 <a  href="https://github.com/kaisaarumeel" target="_blank"><img alt="GitHub" src="github.png" /> @kaisaarumeel</a> 
            </div>
          
            
        </div>  

        <div class="kaisa-pic-container">
            <img class="kaisapic" src="kaisa-web-35.jpg"></img>

            <p class="anna-pics">All photos on this website are taken by <a href="https://www.annaidam.com/"> ANNAIDAM </a></p>
        </div>
    </div>
      
      <Footer/>
      </div>

  );
}
