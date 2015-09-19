function GenerateTerrain()
{
	var terrain = [];

	if(terrainTemplate == 0)
	{
		var groundTexture = THREE.ImageUtils.loadTexture('assets/groundterrain5.jpg');
		groundTexture.wrapS = THREE.RepeatWrapping;
		groundTexture.wrapT = THREE.RepeatWrapping;
		groundTexture.repeat.set( 4, 4 );
	}
	else if(terrainTemplate == 1)
	{
		var groundTexture = THREE.ImageUtils.loadTexture('assets/groundterrain2.jpg');
		groundTexture.wrapS = THREE.RepeatWrapping;
		groundTexture.wrapT = THREE.RepeatWrapping;
		groundTexture.repeat.set( 10, 10 );
	}
	var groundMaterial = new Physijs.createMaterial(new THREE.MeshLambertMaterial({map:groundTexture}), .4, .8 );
	var groundGeometry = new THREE.PlaneGeometry( 400, 400, 6 );
	ground = new Physijs.BoxMesh( groundGeometry, groundMaterial, 0 );
	ground.name = "Ground";
	ground.addEventListener( 'collision', function( other_object, linear_velocity, angular_velocity )
	{
		if(linear_velocity.z >= 20)
		{
			console.log(other_object.id, " hit the ground at ", linear_velocity, "meters per second.");
		}
	});

	if(terrainTemplate == 0)
	{
		var wallTexture = THREE.ImageUtils.loadTexture('assets/horizon-5.jpg');
		wallTexture.wrapS = THREE.RepeatWrapping;
		wallTexture.wrapT = THREE.RepeatWrapping;
		var wallMaterial = new THREE.MeshBasicMaterial({map: wallTexture});
	}
	else if(terrainTemplate == 1)
	{
		var wallTexture = THREE.ImageUtils.loadTexture('assets/horizon-1.jpg');
		wallTexture.wrapS = THREE.RepeatWrapping;
		wallTexture.wrapT = THREE.RepeatWrapping;
		var wallMaterial = new THREE.MeshBasicMaterial({map: wallTexture});
	}


	wall1 = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), wallMaterial );
	wall1.position.set(0, 200, 50);
	wall1.rotation.x = Math.PI / 2;

	wall2 = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), wallMaterial );
	wall2.position.set(0, -200, 50);
	wall2.rotation.x = 3 * (Math.PI / 2);
	wall2.rotation.z = Math.PI;

	var wall2Material = new THREE.MeshBasicMaterial({map: wallTexture, side: THREE.BackSide});
	wall3 = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), wall2Material );
	wall3.position.set(200, 0, 50);
	wall3.rotation.x = Math.PI / 2;
	wall3.rotation.y = Math.PI / 2;

	wall4 = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), wall2Material );
	wall4.position.set(-200, 0, 50);
	wall4.rotation.x = Math.PI / 2;
	wall4.rotation.y = 3 * (Math.PI / 2);

	var skyMaterial = new THREE.MeshBasicMaterial({color: 0x00234B, side: THREE.BackSide});
	sky = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), skyMaterial );
	sky.position.set(0, 0, 250);


	terrain.push(ground);
	terrain.push(wall1);
	terrain.push(wall2);
	terrain.push(wall3);
	terrain.push(wall4);
	terrain.push(sky);
	return terrain;
}