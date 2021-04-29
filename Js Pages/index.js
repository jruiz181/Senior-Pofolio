function mouseover(x){
    x.style.height = "110px";
    x.style.width = "110px";
    x.style.transition = ".75s";
}
function mouseout(x){
    x.style.height = "100px";
    x.style.width = "100px";
    x.style.transition = ".75s";

}
function mouseover2(x){
    x.style.fontSize = "1.4em";
    x.style.transition = ".75s";
}
function mouseout2(x){
    x.style.fontSize = "1.2em"
    x.style.transition = ".75s";

}
// -------------------------------

// welcome transistion

window.onload = function welcome(){
    var welcome = document.getElementById("welcome");
    welcome.style.opacity = "1";
    welcome.style.fontSize = "9em";
    welcome.style.textShadow = "grey 5px 5px 10px";
    welcome.style.transition = "2.5s";
}

// 

function mail(x){
    x.style.fontSize = "1.1em";
    x.style.color = "#5493db";
    x.style.transition = ".5s";
}

function mail2(x){
    x.style.fontSize = "1em";
    x.style.color = "white";
    x.style.transition = ".5s";
}

function sm(x){
    x.style.width = "55px";
    x.style.height = "55px";
    x.style.transition = ".5s"
}
function sm2(x){
    x.style.width = "50px";
    x.style.height = "50px";
    x.style.transition = ".5s"
}