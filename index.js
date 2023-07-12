function read_more_btn() {
    if ( document.getElementById("mySidebar").style.width == "3vw"){
        document.getElementById("mySidebar").style.width = "10vw";
        const elements= document.getElementsByClassName("items")
        elements[0].style.display="block";
        elements[1].style.display="block";
        elements[2].style.display="block";
        elements[3].style.display="block";
        elements[4].style.display="block";
        elements[5].style.display="block";
        elements[6].style.display="block";
        elements[7].style.display="block";
        elements[8].style.display="block";
        elements[9].style.display="block";
        elements[10].style.display="block";
    }else{

        document.getElementById("mySidebar").style.width = "3vw";
        const elements= document.getElementsByClassName("items")
        elements[0].style.display="none";
        elements[1].style.display="none";
        elements[2].style.display="none";
        elements[3].style.display="none";
        elements[4].style.display="none";
        elements[5].style.display="none";
        elements[6].style.display="none";
        elements[7].style.display="none";
        elements[8].style.display="none";
        elements[9].style.display="none";
        elements[10].style.display="none";
    }
  }
  
