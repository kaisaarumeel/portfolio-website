import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Helmet } from 'react-helmet';
import '../styles/styles.css';
import SideBar from './sidebar';


export default function Home() {

  useEffect(() => {
    const hamburger = document.getElementsByClassName('hamburger')[0];
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const overlay = document.getElementsByClassName('overlay')[0];

    let menuOpen = false;

    function openMenu() {
      menuOpen = true;
      overlay.style.display = 'block';
      sidebar.style.width = '45vh';
    }

    function closeMenu() {
      menuOpen = false;
      overlay.style.display = 'none';
      sidebar.style.width= '0';
    }

    hamburger.addEventListener('click', function () {
      if (!menuOpen) {
        openMenu();
        hamburger.style.display = 'none';
      }
    });

    overlay.addEventListener('click', function () {
      if (menuOpen) {
        closeMenu();
        hamburger.style.display = 'block';
      }
    });
  }, []);
  return (
    <div className="Home">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="KA.png" />
        <title>Kaisa Arumeel</title>
      </Helmet>
      <div className="row home-page-container">
        <div className="col-8 kaisa-arumeel-text">
          <div className="kaisa-text">
            <p>
              <span className="drop-letter drop-k">K</span>aisa
            </p>
          </div>
          <div className="arumeel-text">
            <p>
              <span className="drop-a">A</span>rumeel
            </p>
          </div>
        </div>
        <div className="col-4 menu-on-home-page">
          <div className="overlay"></div>

          <div className="menu-container">
            <button className="hamburger">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          </div>
          <SideBar/>
        </div>
      </div>
    </div>
  );

  
}
