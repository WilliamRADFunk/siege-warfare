function KeyPressed()
{
	if( keyboard.pressed("left") )
	{
		cannon.rotation.z += 0.02;
		if( cannon.rotation.z > (120 * (Math.PI / 180)) )
		{
			cannon.rotation.z = (119.999 * (Math.PI / 180));
		}
		if( camera == camera2)
		{
			camera.position.x = cannon.position.x;
			camera.position.y = cannon.position.y;
			camera.position.z = cannon.position.z + 4;

			camera.rotation.x = cannon.rotation.x;
			camera.rotation.z = -cannon.rotation.z;
			console.log("x pos: ", camera.position.x, "y rot: ", camera.position.y, "z pos: ", camera.position.z);
			console.log("x rot: ", camera.rotation.x, "y rot: ", camera.rotation.y, "z rot: ", camera.rotation.z);
		}
	}
	else if( keyboard.pressed("right") )
	{
		cannon.rotation.z -= 0.02;
		if( cannon.rotation.z < (60 * (Math.PI / 180)) )
		{
			cannon.rotation.z = (60.001 * (Math.PI / 180));
		}
		if( camera == camera2)
		{
			camera.position.x = cannon.position.x;
			camera.position.y = cannon.position.y;
			camera.position.z = cannon.position.z + 4;

			camera.rotation.x = cannon.rotation.x;
			camera.rotation.z = -cannon.rotation.z;
			console.log("x pos: ", camera.position.x, "y rot: ", camera.position.y, "z pos: ", camera.position.z);
			console.log("x rot: ", camera.rotation.x, "y rot: ", camera.rotation.y, "z rot: ", camera.rotation.z);
		}
	}
	else if( keyboard.pressed("up") )
	{
		cannon.rotation.y -= 0.02;
		if( cannon.rotation.y < -(30 * (Math.PI / 180)) )
		{
			cannon.rotation.y = -(29.999 * (Math.PI / 180));
		}
		if( camera == camera2)
		{
			camera.position.x = cannon.position.x;
			camera.position.y = cannon.position.y;
			camera.position.z = cannon.position.z + 4;

			camera.rotation.y -= 0.02;
			if( camera.rotation.y < -(120 * (Math.PI / 180)) )
			{
				camera.rotation.y = -(119.999 * (Math.PI / 180))
			}
		}
	}	
	else if( keyboard.pressed("down") )
	{
		cannon.rotation.y += 0.02;
		if( cannon.rotation.y > 0 )
		{
			cannon.rotation.y = 0.001;
		}
		if( camera == camera2)
		{
			camera.position.x = cannon.position.x;
			camera.position.y = cannon.position.y;
			camera.position.z = cannon.position.z + 4;

			camera.rotation.y += 0.02;
			if( camera.rotation.y > -(90 * (Math.PI / 180)) )
			{
				camera.rotation.y = -(90.001 * (Math.PI / 180))
			}

		}
	}
	else if( keyboard.pressed("camera-one") )
	{
		camera = camera1
	}
	else if( keyboard.pressed("camera-two") )
	{
		camera = camera2

		camera.position.x = cannon.position.x;
		camera.position.y = cannon.position.y;
		camera.position.z = cannon.position.z + 4;
		camera.lookAt( new THREE.Vector3( 0, 0, 1 ) );
		camera.rotation.z = -cannon.rotation.z;
	}
	else if( keyboard.pressed("camera-three") )
	{
		camera = camera3;
	}
	else if( keyboard.pressed("ball-change") )
	{
		if(ballChanged == false)
		{
			caliber = (caliber + 1) % 3;
			console.log("Ammo Type: ", caliber);
			ballChanged = true;
		}
	}
	else if( keyboard.pressed("space") )
	{
		if( lastFired <= 0 )
		{
			// Generate cannon ball
			ball = GenerateCannonBall(caliber);
			scene.add( ball );
			ball.applyCentralImpulse( new THREE.Vector3( 200 * ball.mass, -( Math.PI / 2 - cannon.rotation.z ) * (200 * ball.mass), -cannon.rotation.y * 10000 ) );
			lastFired = 120;
		}
	}
}