function GenerateCannon()
{
	var cylinderTexture = THREE.ImageUtils.loadTexture('assets/textures/guns/barrel-1.jpg');
	var cylinderGeometry = new THREE.CylinderGeometry( 2, 2, 20, 32 );
	var cylinderMaterial = new THREE.MeshLambertMaterial({map: cylinderTexture});
	var can = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
	can.position.y = -3;

	var loaderGeometry = new THREE.CylinderGeometry( 0.5, 0.5, 2, 32 );
	var loaderMaterial = new THREE.MeshLambertMaterial({map: cylinderTexture});
	var loader = new THREE.Mesh( loaderGeometry, loaderMaterial );
	loader.position.y = 8;

	var firingPinGeometry = new THREE.CylinderGeometry( 0.1, 0.1, 1, 32 );
	var firingPinMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
	var firingPin = new THREE.Mesh( firingPinGeometry, firingPinMaterial );
	firingPin.position.y = 6;
	firingPin.position.z = 2.5;
	firingPin.rotation.x = Math.PI / 2;

	var muzzleGeometry = new THREE.CircleGeometry( 1.5, 32 );
	var muzzleMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
	var muzzle = new THREE.Mesh( muzzleGeometry, muzzleMaterial );
	muzzle.position.y = -13.1;
	muzzle.rotation.x = Math.PI / 2;

	var wheelTexture = THREE.ImageUtils.loadTexture('assets/textures/materials/cannon-wheel-rim.png');
	var wheelGeometry = new THREE.RingGeometry(4, 5, 32, 32, 0, Math.PI * 2);
	var wheelMaterial = new THREE.MeshLambertMaterial({map: wheelTexture});
	wheelMaterial.side = THREE.DoubleSide;
	var wheel1 = new THREE.Mesh( wheelGeometry, wheelMaterial );
	wheel1.position.x = 2;
	wheel1.rotation.y = Math.PI / 2;
	var wheel2 = new THREE.Mesh( wheelGeometry, wheelMaterial );
	wheel2.position.x = -2;
	wheel2.rotation.y = Math.PI / 2;
	var wheel3 = new THREE.Mesh( wheelGeometry, wheelMaterial );
	wheel3.position.x = 2.5;
	wheel3.rotation.y = Math.PI / 2;
	var wheel4 = new THREE.Mesh( wheelGeometry, wheelMaterial );
	wheel4.position.x = -2.5;
	wheel4.rotation.y = Math.PI / 2;

	var wheelCylinder1Geometry = new THREE.CylinderGeometry( 5, 5, 0.5, 32, 32, true );
	var wheelCylinder1 = new THREE.Mesh( wheelCylinder1Geometry, wheelMaterial );
	wheelCylinder1.position.x = 2.25;
	wheelCylinder1.rotation.z = Math.PI / 2;

	var wheelCylinder2 = new THREE.Mesh( wheelCylinder1Geometry, wheelMaterial );
	wheelCylinder2.position.x = -2.25;
	wheelCylinder2.rotation.z = Math.PI / 2;

	var wheelCylinder2Geometry = new THREE.CylinderGeometry( 4, 5, 0.5, 32, 32, true );
	var wheelCylinder1_2 = new THREE.Mesh( wheelCylinder2Geometry, wheelMaterial );
	wheelCylinder1_2.position.x = 2.25;
	wheelCylinder1_2.rotation.z = Math.PI / 2;

	var wheelCylinder2_2 = new THREE.Mesh( wheelCylinder2Geometry, wheelMaterial );
	wheelCylinder2_2.position.x = -2.25;
	wheelCylinder2_2.rotation.z = Math.PI / 2;

	var axelGeometry = new THREE.RingGeometry(0, 1, 32, 32, 0, Math.PI * 2);
	var axel1 = new THREE.Mesh( axelGeometry, wheelMaterial );
	axel1.position.x = 2;
	axel1.rotation.y = Math.PI / 2;
	var axel2 = new THREE.Mesh( axelGeometry, wheelMaterial );
	axel2.position.x = -2;
	axel2.rotation.y = Math.PI / 2;
	var axel3 = new THREE.Mesh( axelGeometry, wheelMaterial );
	axel3.position.x = 2.5;
	axel3.rotation.y = Math.PI / 2;
	var axel4 = new THREE.Mesh( axelGeometry, wheelMaterial );
	axel4.position.x = -2.5;
	axel4.rotation.y = Math.PI / 2;

	var axelCylinder1Geometry = new THREE.CylinderGeometry( 1, 1, 0.5, 32, 32, true );
	var axelCylinder1 = new THREE.Mesh( axelCylinder1Geometry, wheelMaterial );
	axelCylinder1.position.x = 2.25;
	axelCylinder1.rotation.z = Math.PI / 2;

	var axelCylinder2 = new THREE.Mesh( axelCylinder1Geometry, wheelMaterial );
	axelCylinder2.position.x = -2.25;
	axelCylinder2.rotation.z = Math.PI / 2;

	var axelCylinder2Geometry = new THREE.CylinderGeometry( 0, 1, 0.5, 32, 32, true );
	var axelCylinder1_2 = new THREE.Mesh( axelCylinder2Geometry, wheelMaterial );
	axelCylinder1_2.position.x = 2.25;
	axelCylinder1_2.rotation.z = Math.PI / 2;

	var axelCylinder2_2 = new THREE.Mesh( axelCylinder2Geometry, wheelMaterial );
	axelCylinder2_2.position.x = -2.25;
	axelCylinder2_2.rotation.z = Math.PI / 2;

	var spokeGeometry = new THREE.CylinderGeometry( 0.25, 0.25, 9.5, 32, 32, false );
	var spoke1 = new THREE.Mesh( spokeGeometry, wheelMaterial );
	spoke1.position.x = -2.25;

	var spoke2 = new THREE.Mesh( spokeGeometry, wheelMaterial );
	spoke2.position.x = -2.25;
	spoke2.rotation.x = Math.PI / 3;

	var spoke3 = new THREE.Mesh( spokeGeometry, wheelMaterial );
	spoke3.position.x = -2.25;
	spoke3.rotation.x = Math.PI / -3;

	var spoke4 = new THREE.Mesh( spokeGeometry, wheelMaterial );
	spoke4.position.x = 2.25;

	var spoke5 = new THREE.Mesh( spokeGeometry, wheelMaterial );
	spoke5.position.x = 2.25;
	spoke5.rotation.x = Math.PI / 3;

	var spoke6 = new THREE.Mesh( spokeGeometry, wheelMaterial );
	spoke6.position.x = 2.25;
	spoke6.rotation.x = Math.PI / -3;

	cannon = new THREE.Object3D();
	cannon.add( can );
	cannon.add( loader );
	cannon.add( firingPin );
	cannon.add( muzzle );
	cannon.add( wheel1 );
	cannon.add( wheel2 );
	cannon.add( wheel3 );
	cannon.add( wheel4 );
	cannon.add( wheelCylinder1 );
	cannon.add( wheelCylinder2 );
	cannon.add( wheelCylinder1_2 );
	cannon.add( wheelCylinder2_2 );
	cannon.add( axel1 );
	cannon.add( axel2 );
	cannon.add( axel3 );
	cannon.add( axel4 );
	cannon.add( axelCylinder1 );
	cannon.add( axelCylinder2 );
	cannon.add( axelCylinder1_2 );
	cannon.add( axelCylinder2_2 );
	cannon.add( spoke1 );
	cannon.add( spoke2 );
	cannon.add( spoke3 );
	cannon.add( spoke4 );
	cannon.add( spoke5 );
	cannon.add( spoke6 );
	
	cannon.rotation.z = Math.PI / 2;
	cannon.position.x -= 144;
	cannon.position.z += 5;
	cannon.name = "Cannon";
	return cannon;
}

function GenerateCannonBall(caliber)
{
	var ballTexture;
	var ballGeometry;
	var ballMaterial;

	if( caliber == 0 )
	{
		ballGeometry = new THREE.SphereGeometry( 2, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2 );
		ballMaterial = Physijs.createMaterial( new THREE.MeshLambertMaterial({map: ball1Texture}), 1, 0.05 );
	}
	else if( caliber == 1 )
	{
		ballGeometry = new THREE.SphereGeometry( 2, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2 );
		ballMaterial = Physijs.createMaterial( new THREE.MeshLambertMaterial({map: ball2Texture}), 1, 0.05 );
	}
	else
	{
		ballGeometry = new THREE.SphereGeometry( 0.25, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2 );
		ballMaterial = Physijs.createMaterial( new THREE.MeshLambertMaterial({map: ball3Texture}), 1, 0.05 );
	}
	
	ball = new Physijs.SphereMesh( ballGeometry, ballMaterial, 100 );
	if(caliber == 1)
	{
		ball.collisions = 0;
		ball.addEventListener( 'collision', function( other_object, linear_velocity, angular_velocity )
		{
			console.log("Removing ", this.name, " # ", this.id, "from the game.");
			var position = this.position;
			scene.remove(this);
			ballList.splice(ballList.indexOf(this), 1);
			for(var i = 0; i < 5; i++)
			{
				ballsGeometry = new THREE.SphereGeometry( 1, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2 );
				ballsMaterial = Physijs.createMaterial( new THREE.MeshLambertMaterial({map: ball2Texture}), 1, 0.05 );
				var balls = new Physijs.SphereMesh( ballsGeometry, ballsMaterial, 100 );
				balls.mass *= 0.25;
				balls.position.set(position.x + i, position.y - i, position.z);
				balls.name = "Shrapnel";
				ballList.push(balls);
				scene.add(balls);
				var randomx = Math.floor((Math.random() * 30) + 1);
				if(randomx % 2 == 0)
				{
					randomx = -randomx;
				}
				var randomy = Math.floor((Math.random() * 30) + 1);
				if(randomy % 2 == 0)
				{
					randomy = -randomy;
				}
				var randomz = Math.floor((Math.random() * 30) + 1);
				if(randomz % 2 == 0)
				{
					randomz = -randomz;
				}
				balls.applyCentralImpulse( new THREE.Vector3( randomx * ball.mass, -randomy * ball.mass, -randomz * ball.mass) );
			}
		});
	}
	
	ball.position.x = cannon.position.x + 17.5;
	ball.position.y = (cannon.rotation.z - (Math.PI / 2)) * 17;
	ball.position.z = cannon.position.z + (17 * Math.tan(Math.abs(cannon.rotation.y))) + 2;

	ball.name = "Cannonball";
	ballList.push(ball);
	return ball;
}

function fireCannonball(caliber, scatter)
{
	cannon_fire[Math.floor((Math.random() * 3))].play();
	ball = GenerateCannonBall(caliber);
	scene.add( ball );
	ball.applyCentralImpulse( new THREE.Vector3( 200 * ball.mass, -( Math.PI / 2 - cannon.rotation.z ) * (200 * ball.mass), -(scatter * cannon.rotation.y) * 10000 ) );
}