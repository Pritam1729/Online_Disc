


function myfunction() {
    let x = Math.floor(Math.random()*6+1)
    if(x==1){
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
    }
    else if(x==2){
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
    }
    else if(x==3){
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
    }
    else if(x==4){
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
    }
    else if(x==5){
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
    }
    else{
        document.querySelector(".img1").setAttribute("src","images/dice6.png"); 
    }

    document.querySelector("h5").innerHTML = "<h5></h5>";
    document.querySelector(".h1").innerHTML = "<h2> you got " + x + "</h2>";
}