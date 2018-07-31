import {GAME} from './js/Game';
import {Steve} from './js/Steve';
import * as PIXI from './lib/pixi.js';

function Run() {
	console.log(PIXI)
	PIXI.Container.call(this);
	this.steve = new Steve();
    // this.view = new GAME.RprView(this);
    // this.segmentManager = new GAME.SegmentManager(this);
    // this.enemyManager = new GAME.EnemyManager(this);
    // this.pickupManager = new GAME.PickupManager(this);
    // this.floorManager = new GAME.FloorManager(this);
    // this.collisionManager = new GAME.CollisionManager(this);
    // this.LocalStorage = new Fido.LocalStorage(GAME.bundleId);



    // this.bulletMult = 1;
    // this.pickupCount = 0;
    // this.score = 0;
    // this.joyrideMode = false;
    // this.joyrideCountdown = 0;
    // this.isPlaying = false;
    // this.levelCount = 0;
    // this.gameReallyOver = false;
    // this.isDying = false;

    this.steve.view.visible = false;
    this.addChild(this.steve.view);
    this.start();
}

Run.prototype = Object.create(PIXI.Container.prototype);


Run.prototype.start = function() {
	this.steve.level = 1;
	this.steve.position.y = 477;
	this.steve.speed.y = 0;
	this.steve.speed.x = this.steve.baseSpeed;
	this.steve.view.rotation = 0;
	this.steve.isFlying = false;
	this.steve.isDead = false;
	this.steve.view.play()
	this.steve.view.visible = true;
}

Run.prototype.update = function() {
	
}

export {Run};