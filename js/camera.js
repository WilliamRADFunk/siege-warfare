function GenerateCameras()
{
	camera1 = new THREE.PerspectiveCamera( 75, WIDTH / HEIGHT, 0.1, 1000 );
	camera1.position.x = 0;
	camera1.position.y = -50;
	camera1.position.z = 100;
	camera1.lookAt( scene.position );

	camera2 = new THREE.PerspectiveCamera( 45, WIDTH / HEIGHT, 0.1, 1000 );

	camera3 = new THREE.PerspectiveCamera( 45, WIDTH / HEIGHT, 0.1, 1000 );
	camera3.position.x = 0;
	camera3.position.y = 0;
	camera3.position.z = 450;
	camera3.lookAt( scene.position );

	camera4 = new THREE.PerspectiveCamera( 55, WIDTH / HEIGHT, 0.1, 1000 );
	camera4.position.x = -50;
	camera4.position.y = 170;
	camera4.position.z = 80;
	camera4.lookAt( scene.position );
	camera4.rotation.z = -Math.PI;
}