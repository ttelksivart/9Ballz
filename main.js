const FLOOR_HEIGHT = 16
const JUMP_FORCE = 1000
const SPEED = 375

// initialize context
kaboom({
	width: 500,
	height: 400,
	scale: 1.1,})

setBackground(3, 151, 3)

// load assets
loadSprite("9ball", "assets/9Ball.png")
loadSprite("brick", "assets/Brick.png")
loadSprite("brickGRN", "assets/grnBrick.png")
loadSound("dead", "assets/dead.mp3")
loadSound("jump", "assets/jump.wav")
loadSprite("gbf", "assets/deviceFrame.png")
loadSprite("allBall", "assets/allBalls0.png")
scene("game", () => {
	// define gravity
	setGravity(2800)

	// add a game object to screen
	const player = add([
		// list of components
		sprite("9ball"),
		pos(120, 320),
		area(),
		body(),
		scale(.7),
		rotate(0),
		anchor('center'),
	])

	// floor
	add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(0, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
	add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(16, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
	add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(32, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
	add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(48, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
	add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(64, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(80, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(96, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(112, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(128, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(144, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(160, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(176, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(192, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(208, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(224, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(240, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(256, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(272, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(288, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(304, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(320, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(336, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(352, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(368, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(384, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(400, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])	
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(416, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(432, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(448, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])	
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(464, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(480, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
		add([
		sprite('brickGRN', width(), FLOOR_HEIGHT),
		outline(4),
		pos(496, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(195, 195, 195),
	])
	
	function jump() {
		if (player.isGrounded()) {
			player.jump(JUMP_FORCE)
			play("jump")
		}
	}

	onKeyPress("space", jump)
	onClick(jump)

	function spawnTree() {
		add([
			rect(13, rand(13, 42)),
			area(),
			outline(2),
			scale(3),
			pos(width(), height() - FLOOR_HEIGHT),
			anchor("botleft"),
			move(LEFT, SPEED),
			offscreen({ destroy: true }),
			"tree",
		])
		wait(rand(0.65, 1.5), spawnTree)
}
	spawnTree()
	player.onUpdate(() => {
		player.angle += 222 * dt()
	})
	
	player.onCollide("tree", () => {
		go("lose", score)
		play("dead")
	})
	let score = 0

	const scoreLabel = add([
		text(score),
		pos(24, 24),
	])
	// increment score every frame
	onUpdate(() => {
		score++
		scoreLabel.text = score
	})
})
scene("lose", (score) => {
	add([
		sprite("allBall"),
		pos(256,256),
		scale(2.75),
		anchor("botright"),
	])
	add([
		text("GAME OVER"),
		pos(50,300),
		scale(2),
	])
	add([
		text(score),
		pos(width() / 2, height() / 2 + 64),
		scale(2),
		anchor("center"),
	])
	onKeyPress("space", () => go("game"))
	onClick(() => go("game"))
})
go("game")
