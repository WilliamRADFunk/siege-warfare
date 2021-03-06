function GenerateTerrain(terrainTemplate)
{
	var terrain = [];

	if(terrainTemplate == 0)
	{
		var groundTexture = THREE.ImageUtils.loadTexture('assets/textures/ground/groundterrain-5.jpg');
		groundTexture.wrapS = THREE.RepeatWrapping;
		groundTexture.wrapT = THREE.RepeatWrapping;
		groundTexture.repeat.set( 4, 4 );
	}
	else if(terrainTemplate == 1)
	{
		var groundTexture = THREE.ImageUtils.loadTexture('assets/textures/ground/groundterrain-8.jpg');
		groundTexture.wrapS = THREE.RepeatWrapping;
		groundTexture.wrapT = THREE.RepeatWrapping;
		groundTexture.repeat.set( 4, 4 );
	}
	else
	{
		var groundTexture = THREE.ImageUtils.loadTexture('assets/textures/ground/groundterrain-7.jpg');
		groundTexture.wrapS = THREE.RepeatWrapping;
		groundTexture.wrapT = THREE.RepeatWrapping;
		groundTexture.repeat.set( 1, 1 );
	}
	var groundMaterial = new Physijs.createMaterial(new THREE.MeshLambertMaterial({map:groundTexture}), .4, .8 );
	var groundGeometry = new THREE.PlaneGeometry( 400, 400, 6 );
	ground = new Physijs.BoxMesh( groundGeometry, groundMaterial, 0 );
	ground.name = "Ground";

	if(terrainTemplate == 0)
	{
		var wallTexture = THREE.ImageUtils.loadTexture('assets/textures/landscapes/horizon-5.jpg');
		wallTexture.wrapS = THREE.RepeatWrapping;
		wallTexture.wrapT = THREE.RepeatWrapping;
		var wallMaterial = new THREE.MeshBasicMaterial({map: wallTexture});

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
	}
	else if(terrainTemplate == 1)
	{
		var wallTexture = THREE.ImageUtils.loadTexture('assets/textures/landscapes/horizon-1.jpg');
		wallTexture.wrapS = THREE.RepeatWrapping;
		wallTexture.wrapT = THREE.RepeatWrapping;
		var wallMaterial = new THREE.MeshBasicMaterial({map: wallTexture});

		wall1 = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), wallMaterial );
		wall1.position.set(0, 200, 200);
		wall1.rotation.x = Math.PI / 2;

		wall2 = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), wallMaterial );
		wall2.position.set(0, -200, 200);
		wall2.rotation.x = 3 * (Math.PI / 2);
		wall2.rotation.z = Math.PI;

		var wall2Material = new THREE.MeshBasicMaterial({map: wallTexture, side: THREE.BackSide});
		wall3 = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), wall2Material );
		wall3.position.set(200, 0, 200);
		wall3.rotation.x = Math.PI / 2;
		wall3.rotation.y = Math.PI / 2;

		wall4 = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), wall2Material );
		wall4.position.set(-200, 0, 200);
		wall4.rotation.x = Math.PI / 2;
		wall4.rotation.y = 3 * (Math.PI / 2);
	}
	else
	{
		var wallTexture = THREE.ImageUtils.loadTexture('assets/textures/landscapes/horizon-6.png');
		wallTexture.wrapS = THREE.RepeatWrapping;
		wallTexture.wrapT = THREE.RepeatWrapping;
		var wallMaterial = new THREE.MeshBasicMaterial({map: wallTexture});

		wall1 = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), wallMaterial );
		wall1.position.set(0, 200, 200);
		wall1.rotation.x = Math.PI / 2;

		wall2 = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), wallMaterial );
		wall2.position.set(0, -200, 200);
		wall2.rotation.x = 3 * (Math.PI / 2);
		wall2.rotation.z = Math.PI;

		var wall2Material = new THREE.MeshBasicMaterial({map: wallTexture, side: THREE.BackSide});
		wall3 = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), wall2Material );
		wall3.position.set(200, 0, 200);
		wall3.rotation.x = Math.PI / 2;
		wall3.rotation.y = Math.PI / 2;

		wall4 = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), wall2Material );
		wall4.position.set(-200, 0, 200);
		wall4.rotation.x = Math.PI / 2;
		wall4.rotation.y = 3 * (Math.PI / 2);
	}

	if(terrainTemplate == 0)
	{
		var skyMaterial = new THREE.MeshBasicMaterial({color: 0x00234B, side: THREE.BackSide});
		sky = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), skyMaterial );
		sky.position.set(0, 0, 250);
	}
	else if(terrainTemplate == 1)
	{
		var skyMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.BackSide});
		sky = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), skyMaterial );
		sky.position.set(0, 0, 400);
	}
	else
	{
		var wallTexture = THREE.ImageUtils.loadTexture('assets/textures/landscapes/sky-2.jpg');
		var skyMaterial = new THREE.MeshBasicMaterial({map: wallTexture, side: THREE.BackSide});
		sky = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), skyMaterial );
		sky.position.set(0, 0, 400);
	}
	
	terrain.push(ground);
	terrain.push(wall1);
	terrain.push(wall2);
	terrain.push(wall3);
	terrain.push(wall4);
	terrain.push(sky);
	return terrain;
}