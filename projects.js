function readMore(){
    var moretext = document.getElementById('more');
    var btn = document.getElementById('btn');
  
    if(moretext.style.display === "none"){
      moretext.style.display = "block";
      btn.classList.add("open");
    } else {
      moretext.style.display = "none";
      btn.classList.remove("open");
    }
  }
  
