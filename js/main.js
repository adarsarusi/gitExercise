'use strict'

var ballColor = ''

var gBalls = [{ id: 'ball1', size: 100 }, { id: 'ball2', size: 100 }]

function onBallClick(elBall, maxDiameter) {

    const ball = gBalls.find(ball => ball.id === elBall.id)

    ball.size += getRandomInt(20, 60)

    if (ball.size > maxDiameter) {
        ball.size = 100
    }

    elBall.style.width = ball.size + "px";
    elBall.style.height = ball.size + "px";
    elBall.innerHTML = ball.size
    
}

function onBallClickSwap() {
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

function onBallClickReduce() {
    var elFirstBall = document.querySelector('.ball1')
    var elSecondBall = document.querySelector('.ball2')

    const ball1 = gBalls.find(ball => ball.id === elFirstBall.id)
    const ball2 = gBalls.find(ball => ball.id === elSecondBall.id)

    ball1.size -= getRandomInt(20, 60)
    ball2.size -= getRandomInt(20, 60)

    if (ball1.size < 100) ball1.size = 100
    if (ball2.size < 100) ball2.size = 100

    elFirstBall.style.width = ball1.size + 'px'
    elFirstBall.style.height = ball1.size + 'px'
    elFirstBall.innerHTML = ball1.size

    elSecondBall.style.width = ball2.size + 'px'
    elSecondBall.style.height = ball2.size + 'px'
    elSecondBall.innerHTML = ball2.size
}
