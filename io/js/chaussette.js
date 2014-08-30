/**
 * Chaussette.IO sur un toit (Socket.IO on a roof)
 * A none IO game
 *
 * 2014
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'socket', {preload: preload, create: create, update: update}),
    everySockets = [];

function preload()
{
	game.load.image('night', 'assets/night.png');
	game.load.image('roof', 'assets/roof.png');
	game.load.image('fire', 'assets/fire.png');
	game.load.spritesheet('socket', 'assets/socket.png', 99, 85);
}

function create()
{
	// Set physics system
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'night');

	solid = game.add.group();
	solid.enableBody = true;

	var roof = solid.create(0, game.world.height - 144, 'roof');
	roof.body.immovable = true;

	var fire = solid.create(game.world.width - 130, game.world.height - 330, 'fire');
	fire.body.immovable = true;

	// Creat the sockets group
	sockets = game.add.group();

	// Set up keyboard
	cursors = game.input.keyboard.createCursorKeys();

	// Socket.IO in da place \o/
	connection = io();

	// Create the socket player
	connection.on('New socket', function(id) {
		socket = sockets.create(670, 0, 'socket');
		socket.id = id;

		game.physics.arcade.enable(sockets);

		socket.body.gravity.y = 800;
		socket.body.collideWorldBounds = true;

		socket.animations.add('left' , [0], 10, true);
		socket.animations.add('right', [1], 10, true);

		// Tell other sockets you're new
		connection.emit('Hi sockets');
	});

	// Welcome new sockets by telling where you are
	connection.on('Welcome new socket', function() {
		connection.emit('Here I am', {x: socket.body.x, y: socket.body.y, id: socket.id});
	});

	// Tell you where sockets are
	connection.on('Here he is', function(hereHeIs) {
		updatePosition(hereHeIs);
	});

	// A socket leaves the roof :(
	connection.on('Bye bye sockets', function(id) {
		var him = everySockets[id];
		if (him) {
			sockets.remove(him);
		}
	});
}

function update()
{
	// If no body, the socket player is not fully ready
	if (!socket.body) {
		return;
	}

	// Optimization
	var toBeUpdated = false;

	// Collision sockets vs roof
	game.physics.arcade.collide(sockets, solid);

	socket.body.velocity.x = 0;

	if (cursors.left.isDown) {
		socket.body.velocity.x = -300;
		socket.animations.play('left');
		toBeUpdated = true;
	} else if (cursors.right.isDown) {
		socket.body.velocity.x = 300;
		socket.animations.play('right');
		toBeUpdated = true;
	} else {
		socket.animations.stop();
	}

	if (cursors.up.isDown && socket.body.touching.down) {
		socket.body.velocity.y = -600;
		toBeUpdated = true;
	}

	if (!socket.body.touching.down) {
		toBeUpdated = true;
	}

	if (toBeUpdated) {
		// Tell other sockets where you are
		connection.emit('Here I am', {x: socket.body.x, y: socket.body.y, id: socket.id});
	}
}

function updatePosition(hereHeIs)
{
	var him = everySockets[hereHeIs.id];

	if (him) {
		him.x = hereHeIs.x;
		him.y = hereHeIs.y;
	} else {
		newSocket = sockets.create(hereHeIs.x, hereHeIs.y, 'socket');

		game.physics.arcade.enable(sockets);

		newSocket.body.gravity.y = 800;
		newSocket.body.collideWorldBounds = true;

		everySockets[hereHeIs.id] = newSocket;
	}
}
