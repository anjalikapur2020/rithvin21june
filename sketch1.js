var splashimg
var gameState = "wait"
var storybutton, mutebutton, musicbutton, nextbutton, playbutton, infobutton, bglevel1
var e1, e2, e3
var ground, enemieslevel1Group, playermissile, enemymissile, playermissileimg, enemymissileimg
var playermissileGroup, enemymissileGroup
var explosionimg, explosion,i,j,enemy1,enemy2,enemy3,enemy4,enemy5,randX1,randX2,randX3
var health1=10
var maxHealth=400
var score=0
var health2=10



function preload() {
    splashimg = loadImage("assets/splash.gif")
    // bglevel1=loadImage("assets/background.png")
    bglevel1 = loadImage("assets/level2_bg.jpg")

    bglevel2 = loadImage("assets/level3_bg.jpg")



    playerimg = loadImage("assets/playersplane.gif")

    e1 = loadImage("assets/enemy plane1.gif")
    e2 = loadImage("assets/enemyplane2.png")
    e3 = loadImage("assets/enemyplane3.png")



    playermissileimg = loadImage("assets/player missile.gif")
    enemymissileimg = loadImage("assets/enemy missile.gif")

    explosionimg = loadImage("assets/explosion.gif")
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/startbutton.png")
    playbutton.position(0, height / 2)
    playbutton.size(250, 250)

    musicbutton = createImg("assets/soundButton.png")
    musicbutton.position(width - 250, height / 2)
    musicbutton.size(250, 250)


    mutebutton = createImg("assets/mute.png")
    mutebutton.position(width - 250, height / 2)
    mutebutton.size(250, 250)
    mutebutton.hide()

    // replace with information image
    infobutton = createImg("assets/popUpMessage.png")
    infobutton.position(0, 0)
    infobutton.size(width, height)
    infobutton.hide()

    ground = createSprite(width / 2, height / 2)
    ground.addImage(bglevel1)
    ground.visible = false
    ground.scale = 4.25
    // groundimg.resize(width*1.5,height)
    ground.velocityY = 7
    ground.y = ground.height / 2

    playermissileGroup = new Group()
    enemymissileGroup = new Group()
    enemieslevel1Group = new Group()

    // character
    player = createSprite(width / 2, height - 100)
    player.addImage(playerimg)
    player.scale = 0.075
    player.visible = false
    player.debug = true
    //player missile
    // playermissile=createSprite(width)





    


}

function draw() {
    if (gameState == "wait") {
        background(splashimg)
        infobutton.hide()

    }

    playbutton.mousePressed(() => {
        gameState = "info"
        playbutton.hide()
        infobutton.show()

    })
    if (gameState === "info") {
        infobutton.show()
    }

    infobutton.mousePressed(() => {
        background(bglevel1)

        gameState = "level1"
        playbutton.hide()
        infobutton.hide()
        mutebutton.hide()
        musicbutton.hide()


    })



    musicbutton.mousePressed(() => {
        musicbutton.hide()
        mutebutton.show()
    })

    mutebutton.mousePressed(() => {
        musicbutton.show()
        mutebutton.hide()
    })

    if (gameState == "level1") {
        background(0)
        spawnEnemiesLevel1()
        movement()
        ground.visible = true
        player.visible = true

        // enemieslevel1Group.overlap(player, () => {
        //     alert("enemy destroyed")
        // })

        if (ground.y > height) {
            ground.y = 0
        }

        mutebutton.hide()
        musicbutton.hide()

  








if (playermissileGroup.isTouching(enemy1) || playermissileGroup.isTouching(enemy2)) {
    // coinCollecting.play()
    if (playermissileGroup.isTouching(enemy1)) {
        enemy1.remove()
        // score += 10
        health1 += 30
    }
    if (playermissileGroup.isTouching(enemy2)) {
        enemy2.remove()
        // score1 += 10
        health1 += 30

    }

  

}









if (health1>=maxHealth){
    gameState="level2"
    enemy1.visible=false
    enemy2.visible=false
    player.visible=false
    ground.visible=false
    playermissileGroup.destroyEach()
}




    }



if(gameState=="level2"){
    background("red")
ground.addImage(bglevel2)

    spawnEnemiesLevel2()
    movement()
    ground.visible = true
    player.visible = true

    // enemieslevel1Group.overlap(player, () => {
    //     alert("enemy destroyed")
    // })

    if (ground.y > height) {
        ground.y = 0
    }

    mutebutton.hide()
    musicbutton.hide()


// if (playermissileGroup.isTouching(enemy3) || playermissileGroup.isTouching(enemy4) ||  playermissileGroup.isTouching(enemy5)) {
// // coinCollecting.play()
// if (playermissileGroup.isTouching(enemy3)) {
//     enemy3.remove()
//     // score += 10
//     health2 += 30
// }
// if (playermissileGroup.isTouching(enemy4)) {
//     enemy4.remove()
//     // score1 += 10
//     health2 += 30

// }

// if (playermissileGroup.isTouching(enemy5)) {
//     enemy5.remove()
//     // score1 += 10
//     health2 += 30

// }

// }









// if (health2>=maxHealth){
// gameState="level3"
// enemy3.visible=false
// enemy4.visible=false
// enemy5.visible=false

// player.visible=false
// ground.visible=false
// playermissileGroup.destroyEach()
// }




}



    drawSprites()

if(gameState=="level1"){
    healthlevel1()
}

if(gameState=="level2"){
    healthlevel2()
}


}



// health level 1
function healthlevel1() {
    stroke("blue");
    strokeWeight(10);
    noFill();
    rect(10, 10, 200, 20);

    noStroke();
    fill(255,25, 25);
    rect(10, 10, map(health1, 0, maxHealth, 0, 200), 20);
    //   health++
}


// Level 1 - spawn enemies
function spawnEnemiesLevelunknow() {
    if (frameCount % 80 == 0) {
        var randX = Math.round(random(50, width - 50))
        enemy = createSprite(randX, 0)
        enemy.velocityY = 4
        enemy.scale = 0.5


        rand = Math.round(random(1, 2))
        switch (rand) {
            case 1: enemy.addImage(e2)
                break;

            case 2: enemy.addImage(e3)
                break;

            default: break;

        }

        enemieslevel1Group.add(enemy)

    }
}



function spawnEnemiesLevel1() {
    if (frameCount % 80 == 0) {
        var randX1 = Math.round(random(50, width - 50))
        enemy1 = createSprite(randX1, 0)
        enemy1.velocityY = 4
        enemy1.scale = 0.25
        enemy1.visible=false
        enemy1.addImage(e2)
        

        var randX2 = Math.round(random(50, width - 50))
        enemy2 = createSprite(randX2, 0)
        enemy2.velocityY = 4
        enemy2.scale = 0.25
        enemy2.visible=false
        enemy2.addImage(e3)



        rand = Math.round(random(1, 2))
        switch (rand) {
            case 1: enemy1.visible=true
                break;

            case 2: enemy2.visible=true
                break;

            default: break;

        }

        // enemieslevel1Group.add(enemy)

    }
}




// level 2


function healthlevel2() {
    stroke("cyan");
    strokeWeight(10);
    noFill();
    rect(10, 10, 200, 20);

    noStroke();
    fill(255, 0, 0);
    rect(10, 10, map(health2, 0, maxHealth, 0, 200), 20);
    //   health++
}




function spawnEnemiesLevel2() {
    if (frameCount % 80 == 0) {
        var randX1 = Math.round(random(50, width - 50))
        enemy3 = createSprite(randX1, 0)
        enemy3.velocityY = 5.5
        enemy3.scale = 0.075
        enemy3.visible=false
        enemy3.addImage(e1)
        

        var randX2 = Math.round(random(50, width - 50))
        enemy4 = createSprite(randX2, 0)
        enemy4.velocityY = 5.5
        enemy4.scale = 0.25
        enemy4.visible=false
        enemy4.addImage(e2)

        var randX3 = Math.round(random(50, width - 50))
        enemy5 = createSprite(randX3, 0)
        enemy5.velocityY = 5.5
        enemy5.scale = 0.25
        enemy5.visible=false
        enemy5.addImage(e3)



        rand = Math.round(random(1, 3))
        switch (rand) {
            case 1: enemy3.visible=true
                break;

            case 2: enemy4.visible=true
                break;

                case 3: enemy5.visible=true
                break;

            default: break;

        }
    }

}


function movement() {
    if (keyDown("Right_Arrow")) {
        player.x += 5
    }

    if (keyDown("Left_Arrow")) {
        player.x -= 5
    }

    if (keyDown("space")) {

        playermissile = createSprite(player.x, player.y)
        playermissile.addImage(playermissileimg)
        playermissile.velocityY = -6
        playermissile.scale = 0.35
        playermissileGroup.add(playermissile)

    }
}


