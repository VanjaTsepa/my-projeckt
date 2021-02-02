var modalCalc = document.getElementById("modalCalculator");
var btnCalc = document.getElementById("btnCalc");
var spanCalc = document.getElementsByClassName("closeCalc")[0];
var modalGame = document.getElementById("modalGames");
var btnGame = document.getElementById("btnGame");
var spanGame = document.getElementsByClassName("closeGame")[0];

btnCalc.onclick = function() {
    modalCalc.style.display = "block";
}


spanCalc.onclick = function() {
    modalCalc.style.display = "none";
}


btnGame.onclick = function() {
    modalGame.style.display = "block";
}


spanGame.onclick = function() {
    modalGame.style.display = "none";
}



window.onclick = function(event) {
    if (event.target == modalCalc) {
        modalCalc.style.display = "none";
    }
    if (event.target == modalGame) {
        modalGame.style.display = "none";
    }
}

