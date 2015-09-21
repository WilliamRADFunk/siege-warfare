var background_gunfire_01,
	background_gunfire_02,
	background_gunfire_03,
	cannon_fire_01,
	cannon_fire_02,
	cannon_fire_03,
	cannon_fire_04,
	cannon_turning_01,
	collision_explosion_01,
	collision_explosion_02,
	collision_explosion_03,
	collision_explosion_04,
	theme_beach_01,
	theme_rainforest_01,
	theme_thunder_01,
	theme_thunder_02,
	theme_thunder_03,
	theme_thunder_04,
	theme_thunder_05,
	theme_thunder_06,
	victory,
	defeat,
	theme_thunder = [];
	background_gunfire = [],
	cannon_fire = [],
	collision_explosion = [];
var camera,
	camera1,
	camera2,
	camera2FirstUse = true,
	camera3,
	cameraSelected = 1;
var scene;
var renderer;
var keyboard;
var orbControls;
var theme = 0;
var cannon;
var ball;
var ballList = [];
var ammoType1Count = 50;
var ammoType2Count = 30;
var ammoType3Count = 20;
var caliber = 0;
var castleTemplate1 = ["4", "0200","0210","0220","0230","0240","0250","0300","0400","0500","0600","0700","0350","0450","0550","0650","0750","0710","0720","0730","0740"];
var castle = [];
var enemyList = [];
var updateCounter = 0;
var lastFired = 0;
var timer = 36000;

var blockTexture;
var brickTexture;
var ball1Texture;
var ball2Texture;
var ball3Texture;