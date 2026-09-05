let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

homeScore.textContent = 0
guestScore.textContent = 0


function homeAdd1() {
    Number(homeScore.textContent++)
    console.log(homeScore)
}

function homeAdd2() {
    homeScore.textContent = Number(homeScore.textContent) + 2
    console.log(homeScore)
}

function homeAdd3() {
    homeScore.textContent = Number(homeScore.textContent) + 3
    console.log(homeScore)
}

function guestAdd1() {
    Number(guestScore.textContent++)
    console.log(guestScore)
}

function guestAdd2() {
    guestScore.textContent = Number(guestScore.textContent) + 2
    console.log(guestScore)
}

function guestAdd3() {
    guestScore.textContent = Number(guestScore.textContent) + 3
    console.log(guestScore)
}