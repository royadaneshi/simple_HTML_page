function read_more_btn() {
    var sidebar = document.getElementById("mySidebar");
    var firstRec = document.querySelector(".first_rec");
  
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    //   firstRec.style.width = "70vw";
      firstRec.style.width = "calc(100% - 16vw)";
      document.getElementById("mySidebar").style.width = "15vw";
    //   document.getElementById("mySidebar").style.height ="fit-content";
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

    } else {
      sidebar.classList.add("open");
      firstRec.style.width = "calc(100% - 4vw)";
      document.getElementById("mySidebar").style.width = "3vw";
    //   document.getElementById("mySidebar").style.height ="fit-content";

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
  