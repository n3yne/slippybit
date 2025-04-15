controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(moving)) {
        moving = true
        spriteMax = 5
        while (mySprite.y > spriteMax && !(testColliding())) {
            mySprite.y += -1
            pause(10)
            if (mySprite.overlapsWith(Goal)) {
                LevelComplete()
            }
        }
        if (testColliding()) {
            mySprite.y += 2
        }
        moving = false
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(moving)) {
        moving = true
        spriteMax = 5
        while (mySprite.x > spriteMax && !(testColliding())) {
            mySprite.x += -1
            pause(10)
            if (mySprite.overlapsWith(Goal)) {
                LevelComplete()
            }
        }
        if (testColliding()) {
            mySprite.x += 2
        }
        moving = false
    }
})
function Level1 () {
    barrier[0].setPosition(75, 25)
    barrier[1].setPosition(55, 35)
    barrier[2].setPosition(45, 55)
    barrier[3].setPosition(65, 85)
    barrier[4].setPosition(5, 15)
    barrier[5].setPosition(155, 45)
    barrier[6].setPosition(15, 75)
    barrier[7].setPosition(35, 5)
}
function testColliding () {
    for (let i = 0; i <= barrier.length - 1; i++) {
        if (mySprite.overlapsWith(barrier[i])) {
            return true
        }
    }
    return false
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(moving)) {
        moving = true
        spriteMax = 155
        while (mySprite.x < spriteMax && !(testColliding())) {
            mySprite.x += 1
            pause(10)
            if (mySprite.overlapsWith(Goal)) {
                LevelComplete()
            }
        }
        if (testColliding()) {
            mySprite.x += -2
        }
        moving = false
    }
})
function LevelComplete () {
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    pause(2000)
    textWinning = textsprite.create("Level Complete!")
    textWinning.setPosition(75, 68)
    pauseUntil(() => false)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(moving)) {
        moving = true
        spriteMax = 116
        while (mySprite.y < spriteMax && !(testColliding())) {
            mySprite.y += 1
            pause(10)
            if (mySprite.overlapsWith(Goal)) {
                LevelComplete()
            }
        }
        if (testColliding()) {
            mySprite.y += -2
        }
        moving = false
    }
})
let textWinning: TextSprite = null
let spriteMax = 0
let moving = false
let mySprite: Sprite = null
let Goal: Sprite = null
let barrier: Sprite[] = []
barrier = [
sprites.create(assets.image`Square`, SpriteKind.Enemy),
sprites.create(assets.image`Square`, SpriteKind.Enemy),
sprites.create(assets.image`Square`, SpriteKind.Enemy),
sprites.create(assets.image`Square`, SpriteKind.Enemy),
sprites.create(assets.image`Square`, SpriteKind.Enemy),
sprites.create(assets.image`Square`, SpriteKind.Enemy),
sprites.create(assets.image`Square`, SpriteKind.Enemy),
sprites.create(assets.image`Square`, SpriteKind.Enemy)
]
scene.setBackgroundColor(9)
Goal = sprites.create(assets.image`Computer`, SpriteKind.Food)
Goal.changeScale(-0.4, ScaleAnchor.Middle)
Goal.setPosition(5, 5)
mySprite = sprites.create(assets.image`Penguin`, SpriteKind.Player)
mySprite.setPosition(75, 55)
// scene.setBackgroundImage(assets.image`GridBG`)
Level1()
