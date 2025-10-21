let homeScore = 0
let guestScore = 0

let homeDisplay = document.getElementById("homedisplay-el")
let guestDisplay = document.getElementById("guestdisplay-el")

function incrementHomeScore(incrementValue){
    
    homeScore += incrementValue
    homeDisplay.textContent = homeScore
}

function incrementGuestScore(incrementValue){
    guestScore += incrementValue
    guestDisplay.textContent = guestScore
}