let home = 0
let away = 0


function increaseHome(score) {
  console.log("increasing home by " + score);

}

function homeButton() {
  home++
  console.log('home team increased by 1, home team score is: ' + home);
  drawHomeScore()

}
function homePlusThree() {
  home += 3
  console.log('home team increased by 3, current score: ' + home);
  drawHomeScore()
}

function awayButton() {
  away++
  console.log('away team increased by 1, current score: ' + away);
  drawAwayScore()
}

function awayPlusThree() {
  away += 3
  console.log('away team increased by 3, current score: ' + away);
  drawAwayScore()
}

function drawHomeScore() {
  console.log(`The home team scored`);
  const homeTeam = document.getElementById('home-score')
  homeTeam.innerText = home

}
function drawAwayScore() {
  console.log(`The home team scored`);
  const awayTeam = document.getElementById('away-score')
  awayTeam.innerText = away

}

function reset() {
  home = 0
  away = 0
  drawAwayScore()
  drawHomeScore()
  console.log('score has been reset');

}