var background_gunfire_01,
	background_gunfire_02,
	background_gunfire_03,
	cannon_fire_01,
	cannon_fire_02,
	cannon_fire_03,
	cannon_fire_04,
	collision_explosion_01,
	collision_explosion_02,
	collision_explosion_03,
	collision_explosion_04,
	theme_beach_01,
	theme_beach_02,
	theme_rainforest_01,
	theme_thunder_01,
	theme_thunder_02,
	theme_thunder_03,
	theme_thunder_04,
	theme_thunder_05,
	theme_thunder_06;
var camera,
	camera1,
	camera2,
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
var ballChanged = false;
var caliber = 0;
var castleTemplate1 = ["5", "000","010","020","030","040","050","100","200","300","400","500","150","250","350","450","550","510","520","530","540"];
var castle = [];
var updateCounter = 0;
var lastFired = 0;

var brickTexture;
var ball1Texture;
var ball2Texture;
var ball3Texture;