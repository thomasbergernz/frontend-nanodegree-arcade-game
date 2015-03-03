// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < ctx.canvas.width) {
    	this.x += (this.speed * dt);
	} else {
		this.reset();
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.reset = function() {
    this.x = -100;
	this.y = randomY();
	this.speed = randomSpeed();
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.reset();
};

Player.prototype.update = function(dt) { 
    //when player reaches water, player wins, player reset
	if (this.y < 40) {
    this.reset();
	console.log(score += 10);
}
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    //move player according to keyboard input params allowedKeys[e.keyCode]
    if (key === 'left' && this.x > 0) {
        this.x -= 101;
    } else if (key === 'right' && this.x < 395) {
        this.x += 101;
    } else if (key === 'up' && this.y > 0) { //90 TODO handle water row
	    this.y -= 83;
    } else if (key === 'down' && this.y < 400) {
        this.y += 83;
    }
};
Player.prototype.reset = function() {
    this.x = 202;
    this.y = 404;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
//assign a random speed and random position to the bugs
var totalEnemies = 3;
for (var i = 0; i < totalEnemies; i++) {
	var bug = new Enemy();
	bug.x = 0;
	bug.y = randomY();
	bug.speed = randomSpeed();
    allEnemies.push(bug);
}
// Pick random speed for enemy
function randomSpeed() {
	var speed = [200,300,400]; // pixels / second
	return speed[Math.floor(Math.random() * speed.length)];
}
function randomY() {
	var position = [60,143,226]; 
	return position[Math.floor(Math.random() * position.length)];
}

var player = new Player();
var lives = 3;
var score = 0;
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});