'use strict'

var gBalls = [{ id: 'ball1', size: 100 , prevSize: 100}, { id: 'ball2', size: 100 , prevSize: 100}]

function onBallClick(elBall, maxDiameter) {

    const ball = gBalls.find(ball => ball.id === elBall.id)

    ball.prevSize = ball.size

    ball.size += getRandomInt(20, 60)

    if (ball.size > maxDiameter) {
        ball.size = 100
    }

    elBall.style.width = ball.size + "px";
    elBall.style.height = ball.size + "px";
    elBall.innerHTML = ball.size

    var randColor = getRandomColor()
    ball.color = randColor
    elBall.style.backgroundColor = randColor

}

function onBallClickSwap() {
    var elFirstBall = document.querySelector('.ball1')
    var elSecondBall = document.querySelector('.ball2')

    const ball1 = gBalls.find(ball => ball.id === elFirstBall.id)
    const ball2 = gBalls.find(ball => ball.id === elSecondBall.id)

    ball1.prevSize = ball1.size
    ball1.prevColor = ball1.color
    ball2.prevSize = ball2.size
    ball2.prevColor = ball2.color

    ball1.size = ball2.prevSize
    ball1.color = ball2.prevColor
    ball2.size = ball1.prevSize
    ball2.color = ball1.prevColor

    elSecondBall.style.backgroundColor = ball2.color
    elSecondBall.style.width = ball2.size + 'px'
    elSecondBall.style.height = ball2.size + 'px'
    elSecondBall.innerHTML = ball2.size
    
    elFirstBall.style.backgroundColor = ball1.color
    elFirstBall.style.width = ball1.size + 'px'
    elFirstBall.style.height = ball1.size + 'px'
    elFirstBall.innerHTML = ball1.size
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

function randomBgColor(){
    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()
}