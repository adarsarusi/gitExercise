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