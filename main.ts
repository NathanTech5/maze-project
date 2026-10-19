sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 1 f . . f 1 . 2 . . . 
    . . . . 2 . . . . . . . 2 . . . 
    . . . . 2 . 8 8 8 8 . . 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . 2 . 2 . . . . . . 
    . . . . . . . 2 . 2 . . . . . . 
    . . . 2 2 2 2 2 . 2 2 2 . . . . 
    . . . 2 . . . . . . . 2 . . . . 
    . 2 2 2 . . . . . . . 2 2 2 . . 
    . 2 . 2 . . . . . . . 2 . 2 . . 
    . 2 . 2 . . . . . . . 2 . 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 . . 2 . . . . . . . 
    . . . . . 2 . . 2 . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level7`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
info.changeScoreBy(1)
