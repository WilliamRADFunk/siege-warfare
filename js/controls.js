function KeyPressed()
{
	if( keyboard.pressed("left1") || keyboard.pressed("left2"))
	{
		cannon.rotation.z += 0.02;
		if( cannon.rotation.z > (120 * (Math.PI / 180)) )
		{
			cannon.rotation.z = (119.999 * (Math.PI / 180));
		}
		if( camera == camera2)
		{
			cannon_turning_01.play();

			camera.position.x = cannon.position.x;
			camera.position.y = cannon.position.y;
			camera.position.z = cannon.position.z + 4;

			camera.lookAt( new THREE.Vector3( cannon.position.x + 17, (cannon.rotation.z - (Math.PI / 2)) * 17, cannon.position.z + (17 * Math.tan(Math.abs(cannon.rotation.y))) + 3 ) );
			camera.up = new THREE.Vector3(0, 0, 1);
		}
	}
	else if( keyboard.pressed("right1") || keyboard.pressed("right2"))
	{
		cannon.rotation.z -= 0.02;
		if( cannon.rotation.z < (60 * (Math.PI / 180)) )
		{
			cannon.rotation.z = (60.001 * (Math.PI / 180));
		}
		if( camera == camera2)
		{
			cannon_turning_01.play();

			camera.position.x = cannon.position.x;
			camera.position.y = cannon.position.y;
			camera.position.z = cannon.position.z + 4;

			camera.lookAt( new THREE.Vector3( cannon.position.x + 17, (cannon.rotation.z - (Math.PI / 2)) * 17, cannon.position.z + (17 * Math.tan(Math.abs(cannon.rotation.y))) + 3 ) );
			camera.up = new THREE.Vector3(0, 0, 1);
		}
	}
	else if( keyboard.pressed("up1") || keyboard.pressed("up2"))
	{
		cannon.rotation.y -= 0.02;
		if( cannon.rotation.y < -(30 * (Math.PI / 180)) )
		{
			cannon.rotation.y = -(29.999 * (Math.PI / 180));
		}
		if( camera == camera2)
		{
			cannon_turning_01.play();

			camera.position.x = cannon.position.x;
			camera.position.y = cannon.position.y;
			camera.position.z = cannon.position.z + 4;

			camera.lookAt( new THREE.Vector3( cannon.position.x + 17, (cannon.rotation.z - (Math.PI / 2)) * 17, cannon.position.z + (17 * Math.tan(Math.abs(cannon.rotation.y))) + 3 ) );
			camera.up = new THREE.Vector3(0, 0, 1);
		}
	}	
	else if( keyboard.pressed("down1") || keyboard.pressed("down2"))
	{
		cannon.rotation.y += 0.02;
		if( cannon.rotation.y > 0 )
		{
			cannon.rotation.y = 0.001;
		}
		if( camera == camera2)
		{
			cannon_turning_01.play();

			camera.position.x = cannon.position.x;
			camera.position.y = cannon.position.y;
			camera.position.z = cannon.position.z + 4;

			camera.lookAt( new THREE.Vector3( cannon.position.x + 17, (cannon.rotation.z - (Math.PI / 2)) * 17, cannon.position.z + (17 * Math.tan(Math.abs(cannon.rotation.y))) + 3 ) );
			camera.up = new THREE.Vector3(0, 0, 1);
		}
	}
	else if( cameraSelected != 1 && keyboard.pressed("camera-one") )
	{
		camera = camera1
		cameraSelected = 1;
	}
	else if( cameraSelected != 2 && keyboard.pressed("camera-two") )
	{
		camera = camera2
		cameraSelected = 2;

		cannon.rotation.z = Math.PI / 2;
		cannon.rotation.y = 0;

		camera.position.x = cannon.position.x;
		camera.position.y = cannon.position.y;
		camera.position.z = cannon.position.z + 4;

		camera.lookAt( new THREE.Vector3( cannon.position.x + 17, (cannon.rotation.z - (Math.PI / 2)) * 17, cannon.position.z + (17 * Math.tan(Math.abs(cannon.rotation.y))) + 3 ) );
		if(camera2FirstUse == true)
		{
			camera.rotation.x += Math.PI / 2;
			camera2FirstUse = false;
		}
		else
		{
			camera.up = new THREE.Vector3(0, 0, 1);
		}
	}
	else if( cameraSelected != 3 && keyboard.pressed("camera-three") )
	{
		camera = camera3;
		cameraSelected = 3;
	}
	else if( cameraSelected != 4 && keyboard.pressed("camera-four") )
	{
		camera = camera4;
		cameraSelected = 4;
	}
	else if( cameraSelected != 5 && keyboard.pressed("camera-five") )
	{
		camera = camera5;
		cameraSelected = 5;
	}
	else if( keyboard.pressed("ball-change") )
	{
		if(ballChanged == false)
		{
			cannon_ammochange_01.play();
			caliber = (caliber + 1) % 3;
			console.log("Ammo Type: ", caliber);
			ballChanged = true;
		}
	}
	else if( keyboard.pressed("space") )
	{
		if( lastFired <= 0 )
		{
			cannon_fire[Math.floor((Math.random() * 3))].play()
			// Generate cannon ball
			ball = GenerateCannonBall(caliber);
			scene.add( ball );
			ball.applyCentralImpulse( new THREE.Vector3( 200 * ball.mass, -( Math.PI / 2 - cannon.rotation.z ) * (200 * ball.mass), -cannon.rotation.y * 10000 ) );
			lastFired = 125;
		}
	}
}