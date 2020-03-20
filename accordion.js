"use strict";


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


fetch("http://worldtimeapi.org/api/timezone/Europe/Copenhagen")
.then (function(data) {
return data.json();
})
.then (function(post) {
const datoOGtid=new Date(post.datetime);
console.log("Måned: "+ datoOGtid.getMonth());
console.log("Dato: "+datoOGtid.getDate());
console.log("Årstal: "+datoOGtid.getFullYear());
console.log("Tid: "+datoOGtid.getHours()+":"+datoOGtid.getMinutes());

});


