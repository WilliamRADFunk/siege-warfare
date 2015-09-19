function GenerateCameras()
{
	camera1 = new THREE.PerspectiveCamera( 75, WIDTH / HEIGHT, 0.1, 1000 );
	camera1.position.x = 0;
	camera1.position.y = -200;
	camera1.position.z = 100;
	camera1.lookAt( scene.position );

	camera2 = new THREE.PerspectiveCamera( 45, WIDTH / HEIGHT, 0.1, 1000 );
	camera2.position.x = -154;
	camera2.position.y = 0;
	camera2.position.z = 10;
	camera2.lookAt( scene.position );

	camera3 = new THREE.PerspectiveCamera( 45, WIDTH / HEIGHT, 0.1, 1000 );
	camera3.position.x = 0;
	camera3.position.y = 0;
	camera3.position.z = 450;
	camera3.rotation.x = Math.PI / 180;
	camera3.lookAt( scene.position );
}