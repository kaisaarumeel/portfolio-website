document.addEventListener('DOMContentLoaded', function() {
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
      sidebar.style.width = '0px';
    }
  
    hamburger.addEventListener('click', function() {
      if (!menuOpen) {
        openMenu();
        hamburger.style.display = "none";
      }
    });
  
    overlay.addEventListener('click', function() {
      if (menuOpen) {
        closeMenu();
        hamburger.style.display = "block";
      }
    });
      
  });
  
