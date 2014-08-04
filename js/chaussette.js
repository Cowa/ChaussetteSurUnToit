/**
 * Chaussette sur un toit (Socket on a roof)
 * A none game
 *
 * 2014, copyright in the trash
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'socket', {preload: preload, create: create, update: update});

function preload() {
	game.load.image('night' , 'assets/night.png');
	game.load.image('roof'  , 'assets/roof.png');
	game.load.image('fire'  , 'assets/fire.png');
	game.load.spritesheet('socket', 'assets/socket.png', 99, 85);
}

function create() {
	// Set physics system
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'night');

	solid            = game.add.group();
	solid.enableBody = true;

	var roof = solid.create(0, game.world.height - 144, 'roof');
	roof.body.immovable = true;

	var fire = solid.create(game.world.width - 130, game.world.height - 330, 'fire');
	fire.body.immovable = true;

	// Creating the socket
	socket = game.add.sprite(670, 0, 'socket');
	game.physics.arcade.enable(socket);

	socket.body.gravity.y = 800;
	socket.body.collideWorldBounds = true;

	socket.animations.add('left' , [0], 10, true);
	socket.animations.add('right', [1], 10, true);

	cursors = game.input.keyboard.createCursorKeys();
}

function update() {
	// Collision socket vs roof
	game.physics.arcade.collide(socket, solid);

	socket.body.velocity.x = 0;

	if (cursors.left.isDown) {
		socket.body.velocity.x = -300;
		socket.animations.play('left');
	} else if (cursors.right.isDown) {
		socket.body.velocity.x = 300;
		socket.animations.play('right');
	} else {
		socket.animations.stop();
	}

	if (cursors.up.isDown && socket.body.touching.down) {
		socket.body.velocity.y = -600;
	}
}
