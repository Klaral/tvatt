/******************** Dropdown. när användaren klickar på knappen, ändras mellan gömd och visa dropdown innehållet ********************/

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Stänger dropdown menu även när användaren klickar utanför den.
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}      


/******************* toggle + swap från cell 1-4 (ej 0-4, var i = 1) ******************/

function toggleswappa1(el) {
    var kids = document.getElementById('toggle1').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
     
 }

function toggleswappa2(el) {
    var kids = document.getElementById('toggle2').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
     
 }

function toggleswappa3(el) {
    var kids = document.getElementById('toggle3').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
     
 }

function toggleswappa4(el) {
    var kids = document.getElementById('toggle4').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
     
 }

function toggleswappa5(el) {
    var kids = document.getElementById('toggle5').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
     
 }

function toggleswappa6(el) {
    var kids = document.getElementById('toggle6').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
     
 }

function toggleswappa7(el) {
    var kids = document.getElementById('toggle7').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
     
 }



/******************************************/



var divs = ["Menu1", "Menu2"];
    var visibleDivId = null;
    function toggleVisibility(tbodyId) {
      if(visibleDivId === tbodyId) {
        //visibleDivId = null;
      } else {
        visibleDivId = tbodyId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, tbodyId, tr;
      for(i = 0; i < divs.length; i++) {
        tbodyId = divs[i];
        tr = document.getElementById(tbodyId);
        if(visibleDivId === tbodyId) {
          tr.style.display = "block";
        } else {
          tr.style.display = "none";
        }
      }
    }




/***************** login *******************/

function onSignIn(googleUser){
    var progile=googleUser.getBasicProfile();
    $(".g-signin2").css("display", "none");
    $(".data").css("display","block");
    $("#pic").attr('crs', profile.getImageUrl());
    $("#email").text(profile.getEmail());
}












/******************** alt.1 Klicka och rutan blir röd (bokad) *******************/
/*function myTime() {
    var x = document.getElementsByClassName("bokadruta");
    x[0].style.backgroundColor = "red";
}*/

/*** alt.2 Boka och rutan blir röd ***/
/*function myTime(x) {
    x.style.backgroundColor = "#FF6464";
    
    var x = document.getElementsByClassName("")
}*/

/*** alt.1 toggle (ändra färg i cell) en ruta från grön till röd och tillbaka igen ***/
/*function toggle(td)
{
	td.className=(td.className=='out')?'over':'out';
}*/

/*** alt.2 toggle (ändra färg i cell) en ruta från grön till röd och tillbaka igen ***/
/*function toggle1(el){
    if(el.className == "out"){
        el.className = "over";
    }else {
        el.className = "out";
    }
}; */





