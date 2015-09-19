function GenerateTerrain()
{
	var terrain = [];

	var groundTexture = THREE.ImageUtils.loadTexture('assets/groundterrain5.jpg');
	groundTexture.wrapS = THREE.RepeatWrapping;
	groundTexture.wrapT = THREE.RepeatWrapping;
	groundTexture.repeat.set( 4, 4 );
	var groundMaterial = new Physijs.createMaterial(new THREE.MeshLambertMaterial({map:groundTexture}), .4, .8 );
	var groundGeometry = new THREE.PlaneGeometry( 400, 400, 6 );
	ground = new Physijs.BoxMesh( groundGeometry, groundMaterial, 0 );
	ground.addEventListener( 'collision', function( other_object, linear_velocity, angular_velocity )
	{
		if(linear_velocity.z >= 20)
		{
			console.log(other_object.id, " hit the ground at ", linear_velocity, "meters per second.");
		}
	});

	terrain.push(ground);
	return terrain;
}