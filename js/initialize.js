//Physijs.scripts.worker = 'js/external/physijs_worker.js';
//Physijs.scripts.ammo = 'ammo.js';

function loadSoundFX()
{
	background_gunfire_01 = new Audio("assets/audio/background-gunfire-01.mp3");
	background_gunfire_02 = new Audio("assets/audio/background-gunfire-02.mp3");
	background_gunfire_03 = new Audio("assets/audio/background-gunfire-03.mp3");
	cannon_fire_01 = new Audio("assets/audio/cannon-fire-01.wav");
	cannon_fire_02 = new Audio("assets/audio/cannon-fire-02.mp3");
	cannon_fire_03 = new Audio("assets/audio/cannon-fire-03.mp3");
	cannon_fire_04 = new Audio("assets/audio/cannon-fire-04.wav");
	cannon_turning_01 = new Audio("assets/audio/cannon-turning-01.wav");
	cannon_ammochange_01 = new Audio("assets/audio/cannon-ammochange-01.wav");
	collision_explosion_01 = new Audio("assets/audio/collision-explosion-01.mp3");
	collision_explosion_02 = new Audio("assets/audio/collision-explosion-02.mp3");
	collision_explosion_03 = new Audio("assets/audio/collision-explosion-03.mp3");
	collision_explosion_04 = new Audio("assets/audio/collision-explosion-04.mp3");
	enemy_killed_01 = new Audio("assets/audio/enemy-killed-01.mp3");
	theme_beach_01 = new Audio("assets/audio/theme-beach-01.mp3");
	theme_beach_01.loop = true;
	theme_rainforest_01 = new Audio("assets/audio/theme-rainforest-01.mp3");
	theme_rainforest_01.loop = true;
	theme_thunder_01 = new Audio("assets/audio/theme-thunder-01.mp3");
	theme_thunder_02 = new Audio("assets/audio/theme-thunder-02.mp3");
	theme_thunder_03 = new Audio("assets/audio/theme-thunder-03.mp3");
	theme_thunder_04 = new Audio("assets/audio/theme-thunder-04.mp3");
	theme_thunder_05 = new Audio("assets/audio/theme-thunder-05.mp3");
	theme_thunder_06 = new Audio("assets/audio/theme-thunder-06.mp3");
	victory = new Audio("assets/audio/victory.mp3");
	defeat = new Audio("assets/audio/defeat.wav");
	theme_thunder.push(theme_thunder_01);
	theme_thunder.push(theme_thunder_02);
	theme_thunder.push(theme_thunder_03);
	theme_thunder.push(theme_thunder_04);
	theme_thunder.push(theme_thunder_05);
	theme_thunder.push(theme_thunder_06);
	background_gunfire.push(background_gunfire_01);
	background_gunfire.push(background_gunfire_01);
	background_gunfire.push(background_gunfire_01);
	cannon_fire.push(cannon_fire_01);
	cannon_fire.push(cannon_fire_02);
	cannon_fire.push(cannon_fire_03);
	cannon_fire.push(cannon_fire_04);
	collision_explosion.push(collision_explosion_01);
	collision_explosion.push(collision_explosion_02);
	collision_explosion.push(collision_explosion_03);
	collision_explosion.push(collision_explosion_04);
}
function launchGame(theme)
{
	init(theme);
	document.getElementById( 'loadup-modal' ).style.display = "none";
	document.getElementById( 'canvas' ).style.display = "block";
	document.getElementById( 'HUD-left' ).style.display = "block";
	document.getElementById( 'HUD-right' ).style.display = "block";
	document.getElementById( 'HUD-timer' ).style.display = "block";
	document.getElementById( 'HUD-legend' ).style.display = "block";
}
function onDocumentMouseDown( event )
{
	event.preventDefault();
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
	var clickX = event.clientX;
	var clickY = event.clientY;
	clickNotFire(clickX, clickY);
}
function onDocumentMouseMove( event )
{
	var mouseXBefore = mouseX;
	var mouseYBefore = mouseY;
	mouseX = event.clientX + (WIDTH / 2);
	var posOrNegX = (mouseX > mouseXBefore) ? 1 : -1;
	mouseY = event.clientY + (HEIGHT / 2);
	var posOrNegY = (mouseY > mouseYBefore) ? 1 : -1;
	if( posOrNegX < 0 )
	{
		turningLeft();
	}
	else if( posOrNegX >= 0 )
	{
		turningRight();
	}
	if( posOrNegY < 0 )
	{
		turningUp();
	}
	else if( posOrNegY >= 0 )
	{
		turningDown();
	}
}
function onDocumentMouseUp( event )
{
	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	timeStampEnd = Date.now();
	if( (timeStampEnd - timeStampStart <= 200) && (timeStampStart != 0) )
	{
		fire();
	}
	timeStampStart = 0;
	timeStampEnd = 0;
}
function onDocumentTouchStart( event )
{
	if ( event.touches.length === 1 )
	{
		event.preventDefault();
		var clickX = event.touches[ 0 ].pageX;
		var clickY = event.touches[ 0 ].pageY;
		clickNotFire(clickX, clickY);
	}
}
function onDocumentTouchEnd( event )
{
	if ( event.touches.length === 1 )
	{
		event.preventDefault();
	}
	timeStampEnd = Date.now();
	if( (timeStampEnd - timeStampStart <= 200) && (timeStampStart != 0) )
	{
		fire();
	}
	timeStampStart = 0;
	timeStampEnd = 0;
}
function onDocumentTouchMove( event )
{
	var mouseXBefore = mouseX;
	var mouseYBefore = mouseY;
	event.preventDefault();
	mouseX = event.touches[ 0 ].pageX;
	var posOrNegX = (mouseX > mouseXBefore) ? 1 : -1;
	mouseY = event.touches[ 0 ].pageY;
	var posOrNegY = (mouseY > mouseYBefore) ? 1 : -1;
	if( event.touches.length === 1 && posOrNegX < 0 )
	{
		turningLeft();
	}
	else if( event.touches.length === 1 && posOrNegX >= 0 )
	{
		turningRight();
	}
	if( event.touches.length === 1 && posOrNegY < 0 )
	{
		turningUp();
	}
	else if( event.touches.length === 1 && posOrNegY >= 0 )
	{
		turningDown();
	}
}
function init(theme)
{
	loadSoundFX();

	keyboard = new THREEx.KeyboardState();

	WIDTH = (window.innerWidth) * 0.999;
	HEIGHT = (window.innerHeight) * 0.999;

	scene = new Physijs.Scene();
	scene.setGravity(new THREE.Vector3( 0, 0, -30 ));
	scene.addEventListener('update', function() 
	{
		scene.simulate( undefined, 2 );
	});

	// Generate cameras
	GenerateCameras();
	camera = camera1;
	
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( 0x000000, 1.0 );
	renderer.setSize( WIDTH, HEIGHT );
	renderer.shadowMapEnabled = true;

	// Generate ground, sky, and walls.
	var terrain = GenerateTerrain( theme );
	scene.add( terrain[0] );
	scene.add( terrain[1] );
	scene.add( terrain[2] );
	scene.add( terrain[3] );
	scene.add( terrain[4] );
	scene.add( terrain[5] );

	// Generate cannon
	cannon = GenerateCannon();
	scene.add( cannon );

	// Load textures
	ball1Texture = THREE.ImageUtils.loadTexture('assets/textures/guns/cannonball-1.jpg');
	ball2Texture = THREE.ImageUtils.loadTexture('assets/textures/guns/cannonball-3.jpg');
	ball3Texture = THREE.ImageUtils.loadTexture('assets/textures/guns/cannonball-2.jpg');
	blockTexture = THREE.ImageUtils.loadTexture('assets/textures/materials/brick-1.jpg');

	if(theme == 0)
	{
		brickTexture = THREE.ImageUtils.loadTexture('assets/textures/materials/brick-5.jpg');
		theme_beach_01.autoplay = true;
	}
	else if(theme == 1)
	{
		brickTexture = THREE.ImageUtils.loadTexture('assets/textures/materials/brick-4.jpg');
		theme_rainforest_01.autoplay = true;
	}
	else
	{
		brickTexture = THREE.ImageUtils.loadTexture('assets/textures/materials/brick-2.jpg');
		theme_thunder[Math.floor((Math.random() * 5))].play();
	}
	background_gunfire[Math.floor((Math.random() * 2))].play();	

	// Generate a castle
	var coords = Math.floor(Math.random() * 2);
	CreateCastle(1, coords);
	/*
	coords = Math.floor(Math.random() * 2);
	CreateCastle(0, coords);

	CreateCastle(0, -1);

	CreateCastle(1, -1);
	*/
    var directionalLight = new THREE.DirectionalLight( 0xffffff );
    directionalLight.position.set( 0, -30, 150 );
    directionalLight.shadowCameraNear = 1;
    directionalLight.shadowCameraFar = 1000;
    directionalLight.castShadow = true;
	directionalLight.intensity = 1.3;
    scene.add(directionalLight);
	
	scene.simulate();
	
	var container = document.getElementById( 'canvas' );
	document.body.appendChild( container );
	container.appendChild( renderer.domElement );
	document.getElementById( 'slugAmount' ).innerHTML = ammoType1Count;
	document.getElementById( 'slug' ).style.border = "1px solid #FFFFFF";
	document.getElementById( 'explosiveAmount' ).innerHTML = ammoType2Count;
	document.getElementById( 'shrapnelAmount' ).innerHTML = ammoType3Count;
	document.getElementById( 'enemy-targets-count' ).innerHTML = enemyList.length;
	document.getElementById( 'cam1' ).style.border = "1px solid #FFFFFF";

	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	document.addEventListener( 'touchstart', onDocumentTouchStart, false );
	document.addEventListener( 'touchmove', onDocumentTouchMove, false );
	document.addEventListener( 'touchend', onDocumentTouchEnd, false );

	render();
}