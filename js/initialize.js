Physijs.scripts.worker = 'js/external/physijs_worker.js';
Physijs.scripts.ammo = 'ammo.js';

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

function init()
{
	loadSoundFX();

	keyboard = new THREEx.KeyboardState();

	WIDTH = (window.innerWidth) * 0.97;
	HEIGHT = (window.innerHeight) * 0.97;

	scene = new Physijs.Scene();
	scene.setGravity(new THREE.Vector3( 0, 0, -30 ));
	scene.addEventListener('update', function() 
	{
		scene.simulate( undefined, 1 );
	});

	// Generate cameras
	GenerateCameras();
	camera = camera1;
	
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( 0x000000, 1.0 );
	renderer.setSize( WIDTH, HEIGHT );
	renderer.shadowMapEnabled = true;

	// Controls landscape textures, castle brick textures,
	// SoundFX, and more.
	theme = Math.floor((Math.random() * 3));

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
	castle = CreateCastle(castleTemplate1);

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
	//orbControls = new THREE.OrbitControls( camera3, renderer.domElement );	
	document.getElementById( 'slugAmount' ).innerHTML = ammoType1Count;
	document.getElementById( 'slug' ).style.border = "1px solid #FFFFFF";
	document.getElementById( 'explosiveAmount' ).innerHTML = ammoType2Count;
	document.getElementById( 'shrapnelAmount' ).innerHTML = ammoType3Count;
	document.getElementById( 'enemy-targets-count' ).innerHTML = enemyList.length;	
	render();
}