controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -16
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 16
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 16
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 6 6 6 . . . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 . . . . . . . . 
    . . . 6 . 6 6 6 . 6 . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 . . . . . . . . 
    . . . . . 6 6 6 . . . . . . . . 
    . . . . . 6 6 6 . . . . . . . . 
    . . . . . 6 . 6 . . . . . . . . 
    . . . . 6 6 . 6 6 . . . . . . . 
    . . . 6 6 6 . 6 6 6 . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.castle.saplingPine)
game.onUpdateInterval(500, function () {
    if (Math.percentChance(100)) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 4 2 2 2 2 2 2 c 2 . . . 
            . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
            . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
            . 2 c 2 e e e e e e e b c 4 2 2 
            . 2 2 e b b e b b b e e b 4 2 2 
            . 2 e b b b e b b b b e 2 2 2 2 
            . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
            . e e e e e e f e e e f e 2 d d 
            . e e e e e e f e e f e e e 2 d 
            . e e e e e e f f f e e e e e e 
            . e f f f f e e e e f f f e e e 
            . . f f f f f e e f f f f f e . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, 50, 0)
        projectile.setPosition(0, 40)
        tiles.placeOnRandomTile(projectile, sprites.vehicle.roadHorizontal)
        projectile.x = 16
        projectile.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(500, function () {
    if (Math.percentChance(100)) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . 3 d 3 3 3 3 3 3 c 3 . . . 
            . . 3 c d 3 3 3 3 3 3 c c 3 . . 
            . 3 c c d d d d d d 3 c c d 3 d 
            . 3 c 3 a a a a a a a b c d 3 3 
            . 3 3 a b b a b b b a a b d 3 3 
            . 3 a b b b a b b b b a 3 3 3 3 
            . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
            . a a a a a a f a a a f a 3 d d 
            . a a a a a a f a a f a a a 3 d 
            . a a a a a a f f f a a a a a a 
            . a f f f f a a a a f f f a a a 
            . . f f f f f a a f f f f f a . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, 50, 0)
        projectile.setPosition(0, 40)
        tiles.placeOnRandomTile(projectile, sprites.vehicle.roadHorizontal)
        projectile.x = 16
        projectile.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(500, function () {
    if (Math.percentChance(100)) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 9 6 6 6 6 6 6 c 6 . . . 
            . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
            . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
            . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
            . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
            . 6 8 b b b 8 b b b b 8 6 6 6 6 
            . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
            . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
            . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
            . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
            . 8 f f f f 8 8 8 8 f f f 8 8 8 
            . . f f f f f 8 8 f f f f f 8 . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, 50, 0)
        projectile.setPosition(0, 63)
        tiles.placeOnRandomTile(projectile, sprites.vehicle.roadHorizontal)
        projectile.x = 16
        projectile.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(500, function () {
    if (Math.percentChance(40)) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 c 5 . . . 
            . . 5 c 5 5 5 5 5 5 5 c c 5 . . 
            . 5 c c 5 5 5 5 5 5 5 c c 5 5 d 
            . 5 c 5 5 5 5 5 5 5 5 b c 5 5 5 
            . 5 5 5 b b 5 b b b 5 5 b 5 5 5 
            . 5 5 b b b 5 b b b b 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 f 5 5 5 f 5 5 d d 
            . 5 5 5 5 5 5 f 5 5 f 5 5 5 5 d 
            . 5 5 5 5 5 5 f f f 5 5 5 5 5 5 
            . 5 f f f f 5 5 5 5 f f f 5 5 5 
            . . f f f f f 5 5 f f f f f 5 . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, 50, 0)
        projectile.setPosition(0, 91)
        tiles.placeOnRandomTile(projectile, sprites.vehicle.roadHorizontal)
        projectile.x = 16
        projectile.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(500, function () {
    if (Math.percentChance(90)) {
        projectile = sprites.createProjectileFromSide(img`
            ....................................
            ....................................
            ....................................
            ...............ffffcc...............
            ...............fbbbddc..............
            ................fbbbddcffffff.......
            ccccc.......fffcbbbbbbbbbbbbbff.....
            cbbbdc....ffcccbbbbbcbcbbbbbbbbff...
            .cbbddcfffcccccbbbbcbbcbbbbbbbbbbf..
            ..fbbdbccccccccbbbbcbcbbbbbbbbbbcbf.
            ..fcbbccccccccccbbbbbcbbfffbbbbbbbf.
            ..fccbffcbcccccccbbbbcbbfff1111bbff.
            .fcbbf..ccbbbccccccbbbb111111111ff..
            fbbff.....cccbddfbbbdb111ccccccc....
            fff..........ccfbbbdbfcccccc........
            ...............ffffff...............
            `, 50, 0)
        projectile.setPosition(0, 91)
        tiles.placeOnRandomTile(projectile, assets.tile`myTile`)
        projectile.x = 16
        projectile.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
