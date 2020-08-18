namespace SpriteKind {
    export const Firework = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    makeFirework()
    spriteList.push(origin)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    spriteList = sprites.allOfKind(SpriteKind.Firework)
    if (spriteList.length > 0) {
        firework = randint(0, spriteList.length - 1)
        origin = spriteList[firework]
        spriteList.removeAt(firework)
        music.magicWand.play()
        for (let index = 0; index < 100; index++) {
            projectile = sprites.createProjectile(img`
                1 
                `, randint(-100, 100), randint(-100, 100), SpriteKind.Player, origin)
            origin.setFlag(SpriteFlag.Ghost, true)
            projectile.image.fill(randint(1, 14))
        }
        origin.destroy()
    }
})
function makeFirework () {
    origin = sprites.create(img`
        1 1 1 
        1 2 1 
        1 1 1 
        `, SpriteKind.Firework)
    origin.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    origin.setFlag(SpriteFlag.Ghost, true)
}
let projectile: Sprite = null
let firework = 0
let origin: Sprite = null
let spriteList: Sprite[] = []
game.splash("Press A to launch fireworks", "Press B to add more!")
for (let index = 0; index < 10; index++) {
    makeFirework()
}
