//Counter to keep track of moves
let count=1;
        
const myCollection = document.getElementsByClassName("button");
let win = "no";

//Event delegation
function myFunction(event) { 
    var x = event.target;
    if(x.className == "reset"){
        document.getElementById("demo").style.display = "none";
        for(var i =0; i<myCollection.length; i++){
            myCollection[i].innerHTML = "";
        }
        count = 1;
        win = "no";
        
    }else if(count%2 === 1 && !x.innerHTML){
        x.innerHTML = "X";
        document.getElementsByClassName("indicator")[0].style.color = "black";
        document.getElementsByClassName("indicator")[1].style.color = "red";
        count++;
    }else if(count%2=== 0 && !x.innerHTML){
        x.innerHTML = "O";
        document.getElementsByClassName("indicator")[0].style.color = "red";
        document.getElementsByClassName("indicator")[1].style.color = "black";
        count++;
    }
            
            
    for(var i=0; i<=6; i+=3){
        if(myCollection[i].innerHTML && myCollection[i].innerHTML===myCollection[i+1].innerHTML && myCollection[i].innerHTML===myCollection[i+2].innerHTML){
            win = myCollection[i].innerHTML;
            break;
        }
    }
    for(var i=0; i<3; i++){
        if(myCollection[i].innerHTML && myCollection[i].innerHTML===myCollection[i+3].innerHTML && myCollection[i].innerHTML===myCollection[i+6].innerHTML){
            win = myCollection[i].innerHTML;
            break;
        }
    }
    for(var i=0; i<1; i++){
        if(myCollection[i].innerHTML && myCollection[i].innerHTML===myCollection[i+4].innerHTML && myCollection[i].innerHTML===myCollection[i+8].innerHTML){
            win = myCollection[i].innerHTML;
            break;
        }
    }
    for(var i=2; i<3; i++){
        if(myCollection[i].innerHTML && myCollection[i].innerHTML===myCollection[i+2].innerHTML && myCollection[i].innerHTML===myCollection[i+4].innerHTML){
            win = myCollection[i].innerHTML;
            break;
        }
    }
    if (win != "no") {
        /*for (var i=0;i<document.getElementsByClassName('row').length;i++){
            document.getElementsByClassName('row')[i].style.pointerEvents = "none";
        }*/
        document.getElementById("demo").style.display = "initial";
        document.getElementById("demo").innerText = win + " is the winner!";
    
    } else if(count>9){
        document.getElementById("demo").style.display = "initial";
        document.getElementById("demo").innerText = "Game draw!";
    }
}
if(count>=9 || win != ""){
    count=1;
}