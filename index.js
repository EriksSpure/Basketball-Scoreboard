let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")
let addOneHome = document.getElementById("add-one-btn-home")
let addTwoHome = document.getElementById("add-two-btn-home")
let addThreeHome = document.getElementById("add-three-btn-home")
let addOneAway = document.getElementById("add-one-btn-away")
let addTwoAway = document.getElementById("add-two-btn-away")
let addThreeAway = document.getElementById("add-three-btn-away")

homeScore = 0
awayScore = 0

function addOneHomeF() {
    homeScore +=1
    homeScoreEl.textContent = homeScore 
}
function addTwoHomeF() {
    homeScore +=2
    homeScoreEl.textContent = homeScore  
}
function addThreeHomeF() {
    homeScore +=3
    homeScoreEl.textContent = homeScore   
}
function addOneAwayF() {
    awayScore +=1
    awayScoreEl.textContent = awayScore     
}
function addTwoAwayF() {
    awayScore +=2
    awayScoreEl.textContent = awayScore      
}
function addThreeAwayF() {
    awayScore +=3
    awayScoreEl.textContent = awayScore     
}