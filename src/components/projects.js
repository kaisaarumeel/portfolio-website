
import '../styles/projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Helmet } from 'react-helmet';
import Header from './header';
import Footer from './footer';


export default function Projects(){
  
    return(
        <div className="Projects">
        <Helmet>
          <link
           href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="KA.png" />
          <title>Projects | Kaisa Arumeel</title>
        </Helmet>
        <Header/>
  
    
        <div class="col-1"></div>
 

    <div class="row project">
        <div class="col-10 project-card">
            <div class="row testing">
                <div class="col-4 kiwave-pic-container">
                    <img class="kiwave-pic" src="KiWave-light.png" alt=""></img>
                </div>
                <div class="col-6 kiwave-text"> 
                    <div class="kiwave-header">KiWave Sonar System</div>
                    <p> KiWave  is a monitoring system to detect objects and display the outline of them in a specific area. 

                        The system consists of two main parts: the Wio Seeed Terminal and the GUI which communicate through MQTT by publishing and subscribing data. 
                        The Wio terminal is connected to two ultrasonic sensors which are rotating on top of a Servo motor. 
                        The sensors send and receive high-frequency sound waves to detect items within a certain radius from themselves. 
            
                        The front-end utilises SvelteJS framework and displays a radar screen to the end user, in the form of a radar image which includes range and degree of the object relative to the sensors. 
                        The GUI offers the user many other features: specifying the sector and range, starting and stopping the sonar, using trackmode.
                         The front-end shows a loading scene when the Wio terminal is not connected and also notifies the user once an object is detected in an extremely close range.
                        
                        Find the GitHub repository <a class="kiwave-link" href="https://github.com/kaisaarumeel/KiWave-Sonar-System">here</a>. 
                        </p>
                    
                </div>
            </div>
        </div>
    </div>


    <div class="row project">
        <div class="col-10 project-card">
            <div class="row testing">
                <div class="col-4 snake-pic-container"><img class="snake-pic" src="snake-game.png" alt=""></img></div>
                <div class="col-6 snake-text"> 
                    <div class="snake-header">The Snake Game</div>
                    <p>One of my first projects was a classic Snake game that I built from scratch in Java. It's a simple game with a nostalgic feel that challenges players to grow their snake without crashing.
                        I enjoyed working on this project because it allowed me to practice my programming skills and experiment with game design. It's a fun game that I hope will entertain and challenge players of all ages.
                        Find the GitHub respository <a class="snake-link" href="https://github.com/kaisaarumeel/snake-game">here</a>. 
                    </p>
                </div>
            </div>    
        </div>
    </div>

    <div class="row project">
        <div class="col-10 project-card">
            <div class="row testing">
                <div class="col-4 goncourt-pic-container">
                    <img class="goncourt-pic" src="goncourt.png" alt=""></img>
                </div>
                <div class="col-6 goncourt-text"> 
                    <div class="goncourt-header">Prix Goncourt de l'Estonie</div>
                    <p> I had the honour to be chosen as a member of the Prix de Goncourt jury in Estonia. 
                        Prix Goncourt is the most prestigeous literary award in France that chooses the best novel every year.
                        I, together with 8 other critics, the French Ambassador Éric Lamouroux and the French Institute in Estonia, read the 4 best novels of 2021
                        in French and we nominated the novel “La plus secrète mémoire des hommes” by Mohamed Mbougar Sarr as the winner.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
      </div>

  );
}
