const bananaOne = document.getElementById("box1");
const bananaTwo = document.getElementById("box3");
const appleOne = document.getElementById("box2");
const appleTwo = document.getElementById("box6");
const orangeOne = document.getElementById("box4");
const orangeTwo = document.getElementById("box5");


clickCounter = 0;
function clickCheck () {
    if (clickCounter >= 3) {
        alert("Please refresh the page, some error occured")
    }
}


let bananaWon = 0;
let orangeWon = 0;
let appleWon = 0;
function checkIfWon () {
    if(clickCounter == 2) {
        if (bananaOneCheck == 1 && bananaTwoCheck == 1) {
            let resultB = document.getElementById("resultB");
            resultB.innerHTML = "Bananas Done!"
            clickCounter = 0
            bananaWon = 1;
        }
        if (orangeOneCheck == 1 && orangeTwoCheck == 1) {
            let resultO = document.getElementById("resultO");
            resultO.innerHTML = "Oranges Done!"
            clickCounter = 0
            orangeWon = 1;
        }
        if (appleOneCheck == 1 && appleTwoCheck == 1) {
            let resultA = document.getElementById("resultA");
            resultA.innerHTML = "Apples Done!"
            clickCounter = 0
            appleWon = 1;
        } else {
            if(bananaWon != 1) {
                document.getElementById("photoBoxOne").style.cssText = "display: none;"
                document.getElementById("photoBoxThree").style.cssText = "display: none;"
                clickCounter = 0
                bananaOneCheck = 0;
                bananaTwoCheck = 0;
            }
            if(orangeWon != 1) {
                document.getElementById("photoBoxFour").style.cssText = "display: none;"
                document.getElementById("photoBoxFive").style.cssText = "display: none;"
                clickCounter = 0
                orangeOneCheck = 0;
                orangeTwoCheck = 0;
            }
            if (appleWon != 1) {
                document.getElementById("photoBoxTwo").style.cssText = "display: none;"
                document.getElementById("photoBoxSix").style.cssText = "display: none;"
                clickCounter = 0
                appleOneCheck = 0;
                appleTwoCheck = 0;
            }
        }
    }
}

function absoluteWinCheck () {
    if(appleWon == 1 && orangeWon == 1 && bananaWon == 1) {
        let resultB = document.getElementById("resultB");
        resultB.innerHTML = "You won the game in only "+seconds+" seconds and "+minutes+" minutes! Congratulations!"

        let resultO = document.getElementById("resultO");
        resultO.innerHTML = " "

        let resultA = document.getElementById("resultA");
        resultA.innerHTML = " "
    }
}

// Bananas click events
let bananaOneCheck = 0;
bananaOne.addEventListener("click", e => {
    if(bananaWon == 1) {
        absoluteWinCheck();
    } else {
        clickCounter++;
        clickCheck();
        document.getElementById("photoBoxOne").style.cssText = "display: block;"
        bananaOneCheck = 1;
        checkIfWon();
        absoluteWinCheck();
    }
});

let bananaTwoCheck = 0;
bananaTwo.addEventListener("click", e => {
    if (bananaWon == 1) {
        absoluteWinCheck();
    } else {
        clickCounter++;
        clickCheck();
        document.getElementById("photoBoxThree").style.cssText = "display: block;"
        bananaTwoCheck = 1;
        checkIfWon();
        absoluteWinCheck();
    }
});

// apples click events
let appleOneCheck = 0;
appleOne.addEventListener("click", e => {
    if (appleWon == 1) {
        absoluteWinCheck();
    } else {
        clickCounter++;
        clickCheck();
        document.getElementById("photoBoxTwo").style.cssText = "display: block;"
        appleOneCheck = 1;
        checkIfWon();
        absoluteWinCheck();
    }
});

let appleTwoCheck = 0;
appleTwo.addEventListener("click", e => {
    if (appleWon == 1) {
        absoluteWinCheck();
    } else {
        clickCounter++;
        clickCheck();
        document.getElementById("photoBoxSix").style.cssText = "display: block;"
        appleTwoCheck = 1;
        checkIfWon();
        absoluteWinCheck();
    }
});

// oranges click events

let orangeOneCheck = 0;
orangeOne.addEventListener("click", e => {
    if (orangeWon == 1) {
        absoluteWinCheck();
    } else {
        clickCounter++;
        clickCheck();
        document.getElementById("photoBoxFour").style.cssText = "display: block;"
        orangeOneCheck = 1;
        checkIfWon();
        absoluteWinCheck();
    }
});

let orangeTwoCheck = 0;
orangeTwo.addEventListener("click", e => {
    if (orangeWon == 1) {
        absoluteWinCheck();
    } else {
        clickCounter++;
        clickCheck();
        document.getElementById("photoBoxFive").style.cssText = "display: block;"
        orangeTwoCheck = 1;
        checkIfWon();
        absoluteWinCheck();
    }
});

// Stats // Stats // Stats //

//Timer
const secondContainer = document.getElementById("seconds");
const minuteContainer = document.getElementById("minutes");

let seconds = 0;
let minutes = 0;

function startIncrement() {
  intervalId = setInterval(() => {
      seconds = seconds + 1;
      secondContainer.innerHTML = "Seconds: "+seconds;
      if(seconds == 60) {
        minutes = minutes + 1;
        seconds = 0
        minuteContainer.innerHTML = "Minutes: "+minutes;
        secondContainer.innerHTML = "Seconds: "+seconds;
      }
  }, 1000);
};


startIncrement()

