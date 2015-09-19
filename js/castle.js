function GenerateBrick(brickType)
{
	if(brickType == 0)
	{
		var brickGeometry = new THREE.BoxGeometry(10, 10, 10);
		var brickMaterial = Physijs.createMaterial( new THREE.MeshBasicMaterial({map: brickTexture}), .95, .95 );
		var brick = new Physijs.BoxMesh( brickGeometry, brickMaterial );
		brick.mass *= 0.50;
	}
	if(brickType == 1)
	{
		var brickGeometry = new THREE.BoxGeometry(10, 20, 10);
		var brickMaterial = Physijs.createMaterial( new THREE.MeshBasicMaterial({map: brickTexture}), .95, .95 );
		var brick = new Physijs.BoxMesh( brickGeometry, brickMaterial );
		brick.mass *= 0.50;
	}
	if(brickType == 2)
	{
		var brickGeometry = new THREE.BoxGeometry(20, 10, 10);
		var brickMaterial = Physijs.createMaterial( new THREE.MeshBasicMaterial({map: brickTexture}), .95, .95 );
		var brick = new Physijs.BoxMesh( brickGeometry, brickMaterial );
		brick.mass *= 0.50;
	}

	return brick;
}

function CreateCastle(buildString)
{
	if(buildString == null || buildString == "")
	{
		for(var i = 2.5, k = 0; i < 42.5; i+=10, k+=5)
		{
			for(var j = 0; j < (210 - i - 2.5); j+=10)
			{
				var brick = GenerateBrick(0);
				brick.position.x = 20;
				brick.position.y = j - 100 + k;
				brick.position.z = i + 2.5;
				castle.push(brick);
				scene.add(brick);
			}
		}

		for(var i = 2.5, k = 0; i < 42.5; i+=10, k+=5)
		{
			for(var j = 200; j > (-10 + i - 2.5); j-=10)
			{
				var brick = GenerateBrick(0);
				brick.position.x = 160;
				brick.position.y = j - 100 - k;
				brick.position.z = i + 2.5;
				castle.push(brick);
				scene.add(brick);
			}
		}

		for(var i = 2.5, k = 0; i < 42.5; i+=10, k+=5)
		{
			for(var j = 20; j < (170 - i - 2.5); j+=10)
			{
				var brick = GenerateBrick(0);
				brick.position.x = j + k;
				brick.position.y = -115;
				brick.position.z = i + 2.5;
				castle.push(brick);
				scene.add(brick);
			}
		}

		for(var i = 2.5, k = 0; i < 42.5; i+=10, k+=5)
		{
			for(var j = 20; j < (170 - i - 2.5); j+=10)
			{
				var brick = GenerateBrick(0);
				brick.position.x = j + k;
				brick.position.y = 115;
				brick.position.z = i + 2.5;
				castle.push(brick);
				scene.add(brick);
			}
		}
	}
	else
	{
		for( var i = 0; i < buildString.length; i++ )
		{
			var brick = GenerateBrick(0);
			brick.position.x = buildString[i].charAt(0) * 10;
			brick.position.y = buildString[i].charAt(1) * 10;
			brick.position.z = buildString[i].charAt(2) * 10 + (brick._physijs.height / 2);
			//console.log(brick.position.x, "  ", brick.position.y, "  ", brick.position.z);
			castle.push(brick);
			scene.add(brick);
		}
	}

	return castle;
}