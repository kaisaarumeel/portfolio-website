
import '../styles/aboutme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Helmet } from 'react-helmet';
import Header from './header';
import Footer from './footer';


export default function AboutMe(){
  
    return(
        <div className="AboutMe">
        <Helmet>
          <link
           href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="KA.png" />
          <title>About me | Kaisa Arumeel</title>
        </Helmet>
        
  
        
          <Header/>
      
      <div class="kaisa">
          <div class="col-1"></div>
          <div class="col-5 first-pic">
              <img class="pic" src="kaisa-web-72.jpg" alt=""/>
          </div>
          <div class = "col-5 intro-text"> 
              <div class="intro-text-container">
              <h2 class="Kaisa-Arumeel">Kaisa Arumeel</h2>
              <p>I'm a learning enthusiast with two words always on my mind: "Why?" and "Yes!" Curiosity about the world and a can-do-will-do mindset are my
              main values in life. I want to induldge in the challenge of digitalization and I am constantly looking for opportunities to grow.</p>
              </div>
          </div> 
      </div>
          
      <div class=" middle">
          <div class="col-1"></div>
  
          <div class="col-4 skills">
              <h2 class="skills-title">SKILLS</h2>
              <p>BACK-END: Java, SQL</p>
              <p>FRONT-END: HTML, CSS, JavaScript, Svelte</p>
              <li>Object Oriented Programming</li>
              <li>Agile project management</li>
              <li>Requirements & UX design</li>
              <li>Data structures and algorithms</li>
  
              <div class="languages">
                  <h2 class="languages-title">LANGUAGES</h2>
                  <p> Estonian - Native</p>
                  <p> English - C1</p>
                  <p> French - B2</p>
                  <p> Russian - B1</p>
                  <p> Spanish - B1</p>
              </div>
          </div>
          <div class = "col-6 education"> 
              <p> <h2 class="education-title">EDUCATION</h2>
                  <h3 class="school"> Chalmers University of Technology / University of Gothenburg (2022-2025)</h3>
                  Bachelor's degree in Software Engineering and Management
                  <li>GPA 5.0/5</li>
              
                  <h3 class="school">University of Tartu (2021)</h3>
                  Extra online course in The Basics of Psychology
  
                  <h3 class="school">Tallinn French School (2010-2022)</h3>
                  <li>Ranked 3rd in Estonia (2020)</li>
                  <li>GPA 5.0/5</li>
                  <li>Broad Mathematics exam 98/100</li>
                  <li>Estonian language exam 99/100</li>
                  </p>
          </div> 
          <div class="col-1"></div>
  
      </div>
          
      <div class="bottom">
          <div class="col-1"></div>
          <div class="col-6 honours">
              <h2 class="honours-title">HONOURS</h2>
              <p>The Estonian President's recognition for one of the best graduates in 2022.</p>
              <p>Best beginner orator in the British Parliamentary Debate in Estonia 2021.</p>
              <p>Third place in the Estonian High School Debating Championships 2021</p>
              <p>Member of the Prix Goncourt Estonian jury. The Prix Goncourt is the most prestigeous literary award in France.</p>
              <p>Active member of the student council, representing my high school in discussions with the school board and organising events. Editor in the school newspaper and blog.</p>
          </div>
          <div class="col-5 second-pic">
              <img class="bed-pic" src="kaisa-web-19.jpg" alt="" />
            
            
          </div>
          <div class="col-1"></div>
  
         </div>
         <Footer/>
      </div>

  );
}
