function KeyPressed()
{
	if( keyboard.pressed("left1") || keyboard.pressed("left2"))
	{
		turningLeft();
	}
	else if( keyboard.pressed("right1") || keyboard.pressed("right2"))
	{
		turningRight();
	}
	else if( keyboard.pressed("up1") || keyboard.pressed("up2"))
	{
		turningUp();
	}	
	else if( keyboard.pressed("down1") || keyboard.pressed("down2"))
	{
		turningDown();
	}
	else if( cameraSelected != 1 && keyboard.pressed("camera-one") )
	{
		cam1Startup();
	}
	else if( cameraSelected != 2 && keyboard.pressed("camera-two") )
	{
		cam2Startup();
	}
	else if( cameraSelected != 3 && keyboard.pressed("camera-three") )
	{
		cam3Startup();
	}
	else if( cameraSelected != 4 && keyboard.pressed("camera-four") )
	{
		cam4Startup();
	}
	else if( cameraSelected != 5 && keyboard.pressed("camera-five") )
	{
		cam5Startup();
	}
	else if( keyboard.pressed("ammo1") )
	{
		ammoSelection1();
	}
	else if( keyboard.pressed("ammo2") )
	{
		ammoSelection2();
	}
	else if( keyboard.pressed("ammo3") )
	{
		ammoSelection3();
	}
	else if( keyboard.pressed("fast-forward") )
	{
		timer -= 10;
	}
	else if( keyboard.pressed("space") )
	{
		fire();
	}
}
function selectAmmoType(type)
{
	if(type == 0)
	{
		ammoSelection1();
	}
	else if(type == 1)
	{
		ammoSelection2();
	}
	else
	{
		ammoSelection3();
	}
}
function changeCamView(camView)
{
	if(camView == 1)
	{
		cam1Startup();
	}
	else if(camView == 2)
	{
		cam2Startup();
	}
	else if(camView == 3)
	{
		cam3Startup();
	}
	else if(camView == 4)
	{
		cam4Startup();
	}
	else if(camView == 5)
	{
		cam5Startup();
	}
}
function cam1Startup()
{
	camera = camera1
	cameraSelected = 1;
	document.getElementById( 'cam1' ).style.border = "1px solid #FFFFFF";
	document.getElementById( 'cam2' ).style.border = "none";
	document.getElementById( 'cam3' ).style.border = "none";
	document.getElementById( 'cam4' ).style.border = "none";
	document.getElementById( 'cam5' ).style.border = "none";
}
function cam2Startup()
{
	camera = camera2
	cameraSelected = 2;

	document.getElementById( 'cam1' ).style.border = "none";
	document.getElementById( 'cam2' ).style.border = "1px solid #FFFFFF";
	document.getElementById( 'cam3' ).style.border = "none";
	document.getElementById( 'cam4' ).style.border = "none";
	document.getElementById( 'cam5' ).style.border = "none";

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
function cam3Startup()
{
	camera = camera3;
	cameraSelected = 3;

	document.getElementById( 'cam1' ).style.border = "none";
	document.getElementById( 'cam2' ).style.border = "none";
	document.getElementById( 'cam3' ).style.border = "1px solid #FFFFFF";
	document.getElementById( 'cam4' ).style.border = "none";
	document.getElementById( 'cam5' ).style.border = "none";
}
function cam4Startup()
{
	camera = camera4;
	cameraSelected = 4;

	document.getElementById( 'cam1' ).style.border = "none";
	document.getElementById( 'cam2' ).style.border = "none";
	document.getElementById( 'cam3' ).style.border = "none";
	document.getElementById( 'cam4' ).style.border = "1px solid #FFFFFF";
	document.getElementById( 'cam5' ).style.border = "none";
}
function cam5Startup()
{
	camera = camera5;
	cameraSelected = 5;

	document.getElementById( 'cam1' ).style.border = "none";
	document.getElementById( 'cam2' ).style.border = "none";
	document.getElementById( 'cam3' ).style.border = "none";
	document.getElementById( 'cam4' ).style.border = "none";
	document.getElementById( 'cam5' ).style.border = "1px solid #FFFFFF";
}
function ammoSelection1()
{
	cannon_ammochange_01.play();
	document.getElementById( 'slug' ).style.border = "1px solid #FFFFFF";
	document.getElementById( 'explosive' ).style.border = "none";
	document.getElementById( 'shrapnel' ).style.border = "none";
	caliber = 0;
	console.log("Ammo Type: ", caliber);
}
function ammoSelection2()
{
	cannon_ammochange_01.play();
	document.getElementById( 'slug' ).style.border = "none";
	document.getElementById( 'explosive' ).style.border = "1px solid #FFFFFF";
	document.getElementById( 'shrapnel' ).style.border = "none";
	caliber = 1;
	console.log("Ammo Type: ", caliber);
}
function ammoSelection3()
{
	cannon_ammochange_01.play();
	document.getElementById( 'slug' ).style.border = "none";
	document.getElementById( 'explosive' ).style.border = "none";
	document.getElementById( 'shrapnel' ).style.border = "1px solid #FFFFFF";
	caliber = 2;
	console.log("Ammo Type: ", caliber);
}
function turningLeft()
{
	cannon.rotation.z += 0.01;
	if( cannon.rotation.z > (140 * (Math.PI / 180)) )
	{
		cannon.rotation.z = (139.999 * (Math.PI / 180));
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
function turningRight()
{
	cannon.rotation.z -= 0.01;
	if( cannon.rotation.z < (40 * (Math.PI / 180)) )
	{
		cannon.rotation.z = (40.001 * (Math.PI / 180));
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
function turningDown()
{
	cannon.rotation.y += 0.01;
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
function turningUp()
{
	cannon.rotation.y -= 0.01;
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
function fire()
{
	if( lastFired <= 0 )
	{
		if( caliber == 0 && ammoType1Count > 0 )
		{
			fireCannonball(caliber, 1);
			ammoType1Count--;
			document.getElementById( 'slugAmount' ).innerHTML = ammoType1Count;
		}
		else if( caliber == 1 && ammoType2Count > 0 )
		{
			fireCannonball(caliber, 1);
			ammoType2Count--;
			document.getElementById( 'explosiveAmount' ).innerHTML = ammoType2Count;
		}
		else if( caliber == 2 && ammoType3Count > 0 )
		{
			for( var i = 0; i < 20; i++ )
			{
				fireCannonball(caliber, Math.random() * 5 + 1);
			}
			ammoType3Count--;
			document.getElementById( 'shrapnelAmount' ).innerHTML = ammoType3Count;
		}
		else
		{
			cannon_ammochange_01.play();
		}
		lastFired = 125;
		document.getElementById( 'msg' ).innerHTML = "Reloading";
	}
}
function clickNotFire(clickX, clickY)
{
	var slug = document.getElementById( 'slug' );
	var explosive = document.getElementById( 'explosive' );
	var shrapnel = document.getElementById( 'shrapnel' );
	var HUDLegend = document.getElementById( 'HUD-legend' );
	var legendContainer = document.getElementById( 'legend-container' );
	var cam1 = document.getElementById( 'cam1' );
	var cam2 = document.getElementById( 'cam2' );
	var cam3 = document.getElementById( 'cam3' );
	var cam4 = document.getElementById( 'cam4' );
	var cam5 = document.getElementById( 'cam5' );

	if(	clickX >= (slug.offsetLeft + 35) && clickX <= (slug.offsetLeft + slug.offsetWidth + 35) &&
		clickY >= (slug.offsetTop + 10) && clickY <= (slug.offsetTop + slug.offsetHeight + 10) )
	{
		ammoSelection1();
	}
	else if(clickX >= (explosive.offsetLeft + 35) && clickX <= (explosive.offsetLeft + explosive.offsetWidth + 35) &&
			clickY >= (explosive.offsetTop + 10) && clickY <= (explosive.offsetTop + explosive.offsetHeight + 10) )
	{
		ammoSelection2();
	}
	else if(clickX >= (shrapnel.offsetLeft + 35) && clickX <= (shrapnel.offsetLeft + shrapnel.offsetWidth + 35) &&
			clickY >= (shrapnel.offsetTop + 10) && clickY <= (shrapnel.offsetTop + shrapnel.offsetHeight + 10) )
	{
		ammoSelection3();
	}
	else if(clickX >= (cam1.offsetLeft + 35) && clickX <= (cam1.offsetLeft + cam1.offsetWidth + 35) &&
			clickY >= (cam1.offsetTop + HUDLegend.offsetTop + legendContainer.offsetTop) && clickY <= (cam1.offsetTop + HUDLegend.offsetTop + legendContainer.offsetTop + cam1.offsetHeight) )
	{
		cam1Startup();
	}
	else if(clickX >= (cam2.offsetLeft + 35) && clickX <= (cam2.offsetLeft + cam2.offsetWidth + 35) &&
			clickY >= (cam2.offsetTop + HUDLegend.offsetTop + legendContainer.offsetTop) && clickY <= (cam2.offsetTop + HUDLegend.offsetTop + legendContainer.offsetTop + cam2.offsetHeight) )
	{
		cam2Startup();
	}
	else if(clickX >= (cam3.offsetLeft + 35) && clickX <= (cam3.offsetLeft + cam3.offsetWidth + 35) &&
			clickY >= (cam3.offsetTop + HUDLegend.offsetTop + legendContainer.offsetTop) && clickY <= (cam3.offsetTop + HUDLegend.offsetTop + legendContainer.offsetTop + cam3.offsetHeight) )
	{
		cam3Startup();
	}
	else if(clickX >= (cam4.offsetLeft + 35) && clickX <= (cam4.offsetLeft + cam4.offsetWidth + 35) &&
			clickY >= (cam4.offsetTop + HUDLegend.offsetTop + legendContainer.offsetTop) && clickY <= (cam4.offsetTop + HUDLegend.offsetTop + legendContainer.offsetTop + cam4.offsetHeight) )
	{
		cam4Startup();
	}
	else if(clickX >= (cam5.offsetLeft + 35) && clickX <= (cam5.offsetLeft + cam5.offsetWidth + 35) &&
			clickY >= (cam5.offsetTop + HUDLegend.offsetTop + legendContainer.offsetTop) && clickY <= (cam5.offsetTop + HUDLegend.offsetTop + legendContainer.offsetTop + cam5.offsetHeight) )
	{
		cam5Startup();
	}
	else
	{
		timeStampStart = Date.now();
	}
}