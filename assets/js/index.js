window.onscroll = function() {
    var offset = 300; // Offset value in pixels
  
    if (window.pageYOffset > offset) {
      document.getElementById("upBtn").style.display = "block";
    } else {
      document.getElementById("upBtn").style.display = "none";
    }



    var offset2 = 290;
    
    
    if(window.pageYOffset > offset2){
        $(".card").addClass("cardAnime");
    }
    else if(window.pageYOffset < offset2){
        $(".card").removeClass("cardAnime");
    }

    var offset3 = 1600;

    if(window.pageYOffset > offset3){
        $(".formContainer").addClass("formanime");
    }
    else{
        $(".formContainer").removeClass("formanime");
    }


  };

  