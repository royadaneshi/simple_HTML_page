function read_more_btn() {

  var sidebar = document.getElementById("mySidebar");
  var firstRec = document.querySelector(".first_rec");
//close
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    firstRec.style.width = "calc(100% - 23vw)";
    document.getElementById("mySidebar").style.width = "22vw";

    const elements = document.getElementsByClassName("items");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
    const days = document.getElementsByClassName("day");
    for (var i = 0; i < days.length; i++) {
      days[i].style.display = "block";
    }
    document.getElementById("title").style.display = "block";
    document.getElementById("time").style.paddingRight="7vw";

    var bell = document.getElementsByClassName("bell")[0];
    bell.style.fontSize = "7vh";
    // document.getElementByClassName("first_rec").style.

  } else {
    sidebar.classList.add("open");
    firstRec.style.width = "calc(100% - 6vw)";
    document.getElementById("mySidebar").style.width = "5vw";

    const elements = document.getElementsByClassName("items");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
    const days = document.getElementsByClassName("day");
    for (var i = 0; i < days.length; i++) {
      days[i].style.display = "none";
    }
    today=calander()

    switch (today) {
      case 0:
        document.getElementById("one").style.display = "block";
        document.getElementsByClassName("day")[0].style.display = "block";

        break;
      case 1:
        document.getElementById("two").style.display = "block";
        document.getElementsByClassName("day")[1].style.display = "block";

        break;
      case 2:
      document.getElementById("three").style.display = "block";
      document.getElementsByClassName("day")[2].style.display = "block";

      break;
      case 3:
        document.getElementById("four").style.display = "block";
        document.getElementsByClassName("day")[3].style.display = "block";

        break;
      case 4:
        document.getElementById("five").style.display = "block";
        document.getElementsByClassName("day")[4].style.display = "block";

        break;
      case 5:
        document.getElementById("six").style.display = "block";
        document.getElementsByClassName("day")[5].style.display = "block";
        break;
      case 6:
      document.getElementById("seven").style.display = "block";
      document.getElementsByClassName("day")[6].style.display = "block";

      break;
      default:
        document.getElementById("one").style.display ="block";
        document.getElementsByClassName("day")[0].style.display = "block";

        break;
    }
    document.getElementById("title").style.display = "none";
    document.getElementById("time").style.paddingRight="1vw";

    var bell = document.getElementsByClassName("bell")[0];
    bell.style.fontSize = "4vh";
  }
}

function calander() {
  clock() 
  setInterval(clock, 1000);
  var currentDate =new Date(); //"2023-07-03"

  if (currentDate.getDay()==6){
    var currentDay = 0;
  }else{
    var currentDay = currentDate.getDay()+1; // 0 (شنبه)  6 (جمعه)

  }
  var firstDayOffset =  currentDay ;

  var firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - (firstDayOffset));
  var second = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()- (firstDayOffset-1));
  var third = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - (firstDayOffset-2));
  var fourth =  new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - (firstDayOffset-3));
  var fifth = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - (firstDayOffset-4));
  var sixth = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - (firstDayOffset-5));
  var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - (firstDayOffset-6));


  document.getElementById("one").textContent = String(firstDay.getDate());
  document.getElementById("two").textContent = String(second.getDate());
  document.getElementById("three").textContent = String(third.getDate());
  document.getElementById("four").textContent = String(fourth.getDate());
  document.getElementById("five").textContent = String(fifth.getDate());
  document.getElementById("six").textContent = String(sixth.getDate());
  document.getElementById("seven").textContent = String(lastDay.getDate());

  switch (currentDay) {
    case 0:
      document.getElementById("one").style.backgroundColor = "#860f86";
      break;
    case 1:
      document.getElementById("two").style.backgroundColor = "#860f86";
      break;
    case 2:
    document.getElementById("three").style.backgroundColor = "#860f86";
    break;
    case 3:
      document.getElementById("four").style.backgroundColor = "#860f86";
      break;
    case 4:
      document.getElementById("five").style.backgroundColor = "#860f86";
      break;
    case 5:
      document.getElementById("six").style.backgroundColor = "#860f86";
      break;
    case 6:
    document.getElementById("seven").style.backgroundColor = "#860f86";
    break;

    default:
      document.getElementById("one").style.backgroundColor = " #d1d1e0";
      break;
  }
  return currentDay
}

function clock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  console.log("Current Time:", hours + ":" + minutes);
  document.getElementById("time").textContent="ساعت   "+hours + ":" + minutes;
}
