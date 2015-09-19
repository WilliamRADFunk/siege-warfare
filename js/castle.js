function GenerateBrick()
{
	var brickGeometry = new THREE.BoxGeometry(10, 10, 10);
	var brickMaterial = Physijs.createMaterial( new THREE.MeshBasicMaterial({map: brickTexture}), .95, .95 );
	var brick = new Physijs.BoxMesh( brickGeometry, brickMaterial );
	brick.mass *= 0.35;

	return brick;
}

function CreateCastle(filename)
{
	if(filename == null || filename == "")
	{
		for(var i = 2.5, k = 0; i < 52.5; i+=10, k+=5)
		{
			for(var j = 0; j < (200 - i - 2.5); j+=10)
			{
				var brick = GenerateBrick();
				brick.position.x = 20;
				brick.position.y = j - 100 + k;
				brick.position.z = i + 2.5;
				castle.push(brick);
				scene.add(brick);
			}
		}

		for(var i = 2.5, k = 0; i < 52.5; i+=10, k+=5)
		{
			for(var j = 200; j > (0 + i - 2.5); j-=10)
			{
				var brick = GenerateBrick();
				brick.position.x = 160;
				brick.position.y = j - 100 - k;
				brick.position.z = i + 2.5;
				castle.push(brick);
				scene.add(brick);
			}
		}

		for(var i = 2.5, k = 0; i < 52.5; i+=10, k+=5)
		{
			for(var j = 20; j < (170 - i - 2.5); j+=10)
			{
				var brick = GenerateBrick();
				brick.position.x = j + k;
				brick.position.y = -115;
				brick.position.z = i + 2.5;
				castle.push(brick);
				scene.add(brick);
			}
		}
	}
	else
	{
		
	}

	return castle;
}