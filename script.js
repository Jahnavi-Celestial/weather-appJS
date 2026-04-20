
applyStyles()

const root = document.getElementById("root")

root.append(headerSection(), heroSection(), nextForecastSection(), footerSection())

let locationIcon = document.querySelector("#locationIcon")
locationIconLogic(locationIcon)

let theme = document.querySelector("#theme")
themeLogic(theme)

let gitDiv = document.querySelector("#git")
gitLogic(gitDiv)

let inputBox = document.querySelector("#input-box")
inputLogic(inputBox)

buttonsLogic()

let fDiv3 = document.querySelector("#scrollToTop")
scrollToTopLogic(fDiv3)



// ---- api fetch -----


//input logic

//scroll to top


//buttons logic


//------ date and day and time ------



//------ dynamic divs ------
