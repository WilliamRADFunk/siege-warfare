function GenerateTerrain()
{
	var terrain = [];

	var groundTexture = THREE.ImageUtils.loadTexture('assets/groundterrain2.png');
	var groundMaterial = new Physijs.createMaterial(new THREE.MeshLambertMaterial({map:groundTexture}), .4, .8 );
	var groundGeometry = new THREE.PlaneGeometry( 400, 400, 6 );
	ground = new Physijs.BoxMesh( groundGeometry, groundMaterial, 0 );

	var undergroundTexture = THREE.ImageUtils.loadTexture('assets/undrgrd.png');
	var undergroundMaterial = new THREE.MeshLambertMaterial({map: undergroundTexture});
	var undergroundGeometry = new THREE.BoxGeometry(400, 400, 100);
	var underground = new THREE.Mesh(undergroundGeometry, undergroundMaterial);
	underground.position.z -= 51;

	terrain.push(ground);
	terrain.push(underground);
	return terrain;
}