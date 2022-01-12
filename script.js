const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
let result = 0;
let currentTime = 60;
let timerID = null;
let hitPosition;
function randomSquare(){
     square.forEach(squares => {
          squares.classList.remove('mole');
     });
     let randomSquare = square[Math.floor(Math.random() * 9)];
     randomSquare.classList.add('mole');
     hitPosition = randomSquare.id;
}
square.forEach(squares => {
     squares.addEventListener('mousedown',() => {
          if(squares.id == hitPosition){
               result++;
               score.textContent = result;
               hitPosition = null;
          }
     });
});
function moveMole(){
     timerID = setInterval(randomSquare,1000);
}
moveMole();
function countDown(){
     currentTime--;
     timeLeft.textContent = currentTime;
     if(currentTime == 0){
          clearInterval(countDownTimerID);
          clearInterval(timerID);
          alert('Game Over! Your Final Score is ' + result);
     }
}
let countDownTimerID = setInterval(countDown,1000);