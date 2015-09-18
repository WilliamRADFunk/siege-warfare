function GenerateCannon()
{
	var cylinderTexture = THREE.ImageUtils.loadTexture('assets/barrel-3.png');
	var cylinderGeometry = new THREE.CylinderGeometry( 2, 2, 20, 32 );
	var cylinderMaterial = new THREE.MeshLambertMaterial({map: cylinderTexture});
	var can = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
	//can.position.y = -5;

	var loaderGeometry = new THREE.CylinderGeometry( 0.5, 0.5, 2, 32 );
	var loaderMaterial = new THREE.MeshLambertMaterial({map: cylinderTexture});
	var loader = new THREE.Mesh( loaderGeometry, loaderMaterial );
	loader.position.y = 11;

	var firingPinGeometry = new THREE.CylinderGeometry( 0.1, 0.1, 1, 32 );
	var firingPinMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
	var firingPin = new THREE.Mesh( firingPinGeometry, firingPinMaterial );
	firingPin.position.y = 9;
	firingPin.position.z = 2.5;
	firingPin.rotation.x = Math.PI / 2;

	var muzzleGeometry = new THREE.CircleGeometry( 1.5, 32 );
	var muzzleMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
	var muzzle = new THREE.Mesh( muzzleGeometry, muzzleMaterial );
	muzzle.position.y = -10.1;
	muzzle.rotation.x = Math.PI / 2;

	var wheelTexture = THREE.ImageUtils.loadTexture('assets/cannon-wheel-rim.png');
	var wheelGeometry = new THREE.RingGeometry(4, 5, 32, 32, 0, Math.PI * 2);
	var wheelMaterial = new THREE.MeshLambertMaterial({map: wheelTexture});
	wheelMaterial.side = THREE.DoubleSide;
	var wheel1 = new THREE.Mesh( wheelGeometry, wheelMaterial );
	wheel1.position.x = 2;
	wheel1.position.y = 3;
	wheel1.rotation.y = Math.PI / 2;
	var wheel2 = new THREE.Mesh( wheelGeometry, wheelMaterial );
	wheel2.position.x = -2;
	wheel2.position.y = 3;
	wheel2.rotation.y = Math.PI / 2;
	var wheel3 = new THREE.Mesh( wheelGeometry, wheelMaterial );
	wheel3.position.x = 2.5;
	wheel3.position.y = 3;
	wheel3.rotation.y = Math.PI / 2;
	var wheel4 = new THREE.Mesh( wheelGeometry, wheelMaterial );
	wheel4.position.x = -2.5;
	wheel4.position.y = 3;
	wheel4.rotation.y = Math.PI / 2;

	var wheelCylinder1Geometry = new THREE.CylinderGeometry( 5, 5, 0.5, 32, 32, true );
	var wheelCylinder1 = new THREE.Mesh( wheelCylinder1Geometry, wheelMaterial );
	wheelCylinder1.position.x = 2.25;
	wheelCylinder1.position.y = 3;
	wheelCylinder1.rotation.z = Math.PI / 2;

	var wheelCylinder2 = new THREE.Mesh( wheelCylinder1Geometry, wheelMaterial );
	wheelCylinder2.position.x = -2.25;
	wheelCylinder2.position.y = 3;
	wheelCylinder2.rotation.z = Math.PI / 2;

	var wheelCylinder2Geometry = new THREE.CylinderGeometry( 4, 5, 0.5, 32, 32, true );
	var wheelCylinder1_2 = new THREE.Mesh( wheelCylinder2Geometry, wheelMaterial );
	wheelCylinder1_2.position.x = 2.25;
	wheelCylinder1_2.position.y = 3;
	wheelCylinder1_2.rotation.z = Math.PI / 2;

	var wheelCylinder2_2 = new THREE.Mesh( wheelCylinder2Geometry, wheelMaterial );
	wheelCylinder2_2.position.x = -2.25;
	wheelCylinder2_2.position.y = 3;
	wheelCylinder2_2.rotation.z = Math.PI / 2;

	var axelGeometry = new THREE.RingGeometry(0, 1, 32, 32, 0, Math.PI * 2);
	var axel1 = new THREE.Mesh( axelGeometry, wheelMaterial );
	axel1.position.x = 2;
	axel1.position.y = 3;
	axel1.rotation.y = Math.PI / 2;
	var axel2 = new THREE.Mesh( axelGeometry, wheelMaterial );
	axel2.position.x = -2;
	axel2.position.y = 3;
	axel2.rotation.y = Math.PI / 2;
	var axel3 = new THREE.Mesh( axelGeometry, wheelMaterial );
	axel3.position.x = 2.5;
	axel3.position.y = 3;
	axel3.rotation.y = Math.PI / 2;
	var axel4 = new THREE.Mesh( axelGeometry, wheelMaterial );
	axel4.position.x = -2.5;
	axel4.position.y = 3;
	axel4.rotation.y = Math.PI / 2;

	var axelCylinder1Geometry = new THREE.CylinderGeometry( 1, 1, 0.5, 32, 32, true );
	var axelCylinder1 = new THREE.Mesh( axelCylinder1Geometry, wheelMaterial );
	axelCylinder1.position.x = 2.25;
	axelCylinder1.position.y = 3;
	axelCylinder1.rotation.z = Math.PI / 2;

	var axelCylinder2 = new THREE.Mesh( axelCylinder1Geometry, wheelMaterial );
	axelCylinder2.position.x = -2.25;
	axelCylinder2.position.y = 3;
	axelCylinder2.rotation.z = Math.PI / 2;

	var axelCylinder2Geometry = new THREE.CylinderGeometry( 0, 1, 0.5, 32, 32, true );
	var axelCylinder1_2 = new THREE.Mesh( axelCylinder2Geometry, wheelMaterial );
	axelCylinder1_2.position.x = 2.25;
	axelCylinder1_2.position.y = 3;
	axelCylinder1_2.rotation.z = Math.PI / 2;

	var axelCylinder2_2 = new THREE.Mesh( axelCylinder2Geometry, wheelMaterial );
	axelCylinder2_2.position.x = -2.25;
	axelCylinder2_2.position.y = 3;
	axelCylinder2_2.rotation.z = Math.PI / 2;

	var spokeGeometry = new THREE.CylinderGeometry( 0.25, 0.25, 9.5, 32, 32, false );
	var spoke1 = new THREE.Mesh( spokeGeometry, wheelMaterial );
	spoke1.position.x = -2.25;
	spoke1.position.y = 3;

	var spoke2 = new THREE.Mesh( spokeGeometry, wheelMaterial );
	spoke2.position.x = -2.25;
	spoke2.position.y = 3;
	spoke2.rotation.x = Math.PI / 3;

	var spoke3 = new THREE.Mesh( spokeGeometry, wheelMaterial );
	spoke3.position.x = -2.25;
	spoke3.position.y = 3;
	spoke3.rotation.x = Math.PI / -3;

	var spoke4 = new THREE.Mesh( spokeGeometry, wheelMaterial );
	spoke4.position.x = 2.25;
	spoke4.position.y = 3;

	var spoke5 = new THREE.Mesh( spokeGeometry, wheelMaterial );
	spoke5.position.x = 2.25;
	spoke5.position.y = 3;
	spoke5.rotation.x = Math.PI / 3;

	var spoke6 = new THREE.Mesh( spokeGeometry, wheelMaterial );
	spoke6.position.x = 2.25;
	spoke6.position.y = 3;
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
	return cannon;
}

function GenerateCannonBall(caliber)
{
	var ballTexture;
	var ballGeometry;
	var ballMaterial;

	if( caliber == 0 )
	{
		ballTexture = THREE.ImageUtils.loadTexture('assets/cannonball-1.jpg');
		ballGeometry = new THREE.SphereGeometry( 3, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2 );
		ballMaterial = Physijs.createMaterial( new THREE.MeshLambertMaterial({map: ballTexture}), .95, .95 );
	}
	else if( caliber == 1 )
	{
		ballTexture = THREE.ImageUtils.loadTexture('assets/cannonball-2.jpg');
		ballGeometry = new THREE.SphereGeometry( 3, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2 );
		ballMaterial = Physijs.createMaterial( new THREE.MeshLambertMaterial({map: ballTexture}), .95, .95 );
	}
	else
	{
		ballTexture = THREE.ImageUtils.loadTexture('assets/cannonball-3.jpg');
		ballGeometry = new THREE.SphereGeometry( 3, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2 );
		ballMaterial = Physijs.createMaterial( new THREE.MeshLambertMaterial({map: ballTexture}), .95, .95 );
	}
	
	ball = new Physijs.SphereMesh( ballGeometry, ballMaterial );
	
	ball.position.x = cannon.position.x + 20;
	ball.position.y = cannon.position.y;
	ball.position.z = cannon.position.z + 2;

	return ball;
}