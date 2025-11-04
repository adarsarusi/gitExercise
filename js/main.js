'use strict'

var ballSize = 100
var ballColor = ''

function onBallClick(elBall, maxDiameter) {
    ballSize += getRandomInt(20, 60)
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerHTML = ballSize

    if (ballSize > maxDiameter) {
        ballSize = 100
        elBall.style.width = ballSize + 'px'
        elBall.style.height = ballSize + 'px'
        elBall.innerHTML = ballSize
        
    }

    ballColor = getRandomColor()
    elBall.style.backgroundColor = ballColor
}

function onBall3Click(){
    var elFirstBall = document.querySelector('.ball1')
    var elSecondBall = document.querySelector('.ball2')

    var heldColor = elSecondBall.style.backgroundColor
    var heldSize = elSecondBall.style.width

    elSecondBall.style.backgroundColor = elFirstBall.style.backgroundColor
    elSecondBall.style.width = elFirstBall.style.width
    elSecondBall.style.height = elFirstBall.style.width

    elFirstBall.style.backgroundColor = heldColor
    elFirstBall.style.width = heldSize
    elFirstBall.style.height = heldSize
}