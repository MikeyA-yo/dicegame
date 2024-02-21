


   //random number between 1 and 6
let randomNumber1=Math.floor(Math.random()*6)+1;

let randomNumber2=Math.floor(Math.random()*6)+1;


//selecting the dice
function player1() {
   if (randomNumber1===1) {
      document.querySelector(".img1").setAttribute("src","images/dice1.png");
  }else if (randomNumber1===2) {
      document.querySelector(".img1").setAttribute("src","images/dice2.png");
  }else if (randomNumber1===3) {
      document.querySelector(".img1").setAttribute("src","images/dice3.png");
  }else if (randomNumber1===4) {
      document.querySelector(".img1").setAttribute("src","images/dice4.png");
  }else if (randomNumber1===5) {
      document.querySelector(".img1").setAttribute("src","images/dice5.png");
  }else{
      document.querySelector(".img1").setAttribute("src","images/dice6.png");
  }; 
  click1();
}

//selecting for image 2

function player2() {
   if (randomNumber2===1) {
      document.querySelector(".img2").setAttribute("src","images/dice1.png");
   }else if (randomNumber2===2) {
      document.querySelector(".img2").setAttribute("src","images/dice2.png");
   }else if (randomNumber2===3) {
      document.querySelector(".img2").setAttribute("src","images/dice3.png");
   }else if (randomNumber2===4) {
      document.querySelector(".img2").setAttribute("src","images/dice4.png");
   }else if (randomNumber2===5) {
      document.querySelector(".img2").setAttribute("src","images/dice5.png");
   }else  {
      document.querySelector(".img2").setAttribute("src","images/dice6.png");
   };
   click2();
   winner();
}
let person1Name;
let person2Name;
function get1(){
   let field = document.getElementById('player1');
   person1Name =  field.value;
   field.value= '';
   field.setAttribute('placeholder', person1Name);
}
function get2(){
   let field = document.getElementById('player2');
   person2Name=field.value;
   field.value= '';
   field.setAttribute('placeholder', person2Name);
}
document.getElementById('sub1').addEventListener('click', get1);
document.getElementById('sub2').addEventListener('click', get2);
    


 
function winner() {
 //winner announcing

   if (randomNumber1==randomNumber2) {
      document.querySelector("h1").innerHTML="It's a draw 🎲";
   } else if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML=person1Name ? person1Name +" won this one" :"🚩Player 1 won this one";
   }else{
      document.querySelector("h1").innerHTML=person2Name ? person2Name +" won this one" :"🚩Player 2 won this one";
   };  
 
 
}
 



document.querySelector("#pl1").addEventListener("click",player1);

document.querySelector("#pl2").addEventListener("click",player2);
function click1() {
   document.querySelector("#pl1").classList.add("ani");
   
   setTimeout(function (){
      document.querySelector("#pl1").classList.remove("ani");
   },400);
  
}
function click2() {
   document.querySelector("#pl2").classList.add("ani");
   setTimeout(function(){
      document.querySelector("#pl2").classList.remove("ani");
   },400);
}
