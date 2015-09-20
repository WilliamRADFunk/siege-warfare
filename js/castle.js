function GenerateBrick()
{
	var brickGeometry = new THREE.BoxGeometry(10, 10, 10);
	var brickMaterial = Physijs.createMaterial( new THREE.MeshBasicMaterial({map: brickTexture}), .95, .95 );
	var brick = new Physijs.BoxMesh( brickGeometry, brickMaterial );
	brick.mass *= 0.50;

	brick.collisions = 0;
	brick.addEventListener( 'collision', function( other_object, linear_velocity, angular_velocity )
	{
		if( other_object.name == 'Cannonball' && Math.abs(linear_velocity.x) >= 0.3 )
		{
			console.log("A ", this.name, " was hit by a ", other_object.name, " at ", linear_velocity.x, "meters per second.");
			collision_explosion[Math.floor((Math.random() * 3))].play();
		}
	});

	return brick;
}

function GenerateEnemy()
{
	var enemyGeometry = new THREE.BoxGeometry(10, 10, 10);
	var enemyMaterial = Physijs.createMaterial( new THREE.MeshBasicMaterial({color: 'red'}), .95, .95 );
	var enemy = new Physijs.BoxMesh( enemyGeometry, enemyMaterial );
	enemy.name = "Enemy";

	enemy.addEventListener( 'collision', function( other_object, linear_velocity, angular_velocity )
	{
		console.log("Removing ", this.name, " # ", this.id, "from the game.");
		enemyList.splice(enemyList.indexOf(this), 1);
		scene.remove(this);
		document.getElementById( 'enemy-targets-count' ).innerHTML = enemyList.length;
		enemy_killed_01.play();
	});
	return enemy;
}

function CreateCastle(buildString)
{
	if(buildString == null || buildString == "")
	{
		for(var i = 2.5, k = 0; i < 42.5; i+=10, k+=5)
		{
			for(var j = 0; j < (210 - i - 2.5); j+=10)
			{
				var brick = GenerateBrick();
				brick.position.x = 20;
				brick.position.y = j - 100 + k;
				brick.position.z = i + 2.5;
				brick.name = "Brick";
				castle.push(brick);
				scene.add(brick);
			}
		}

		for(var i = 2.5, k = 0; i < 42.5; i+=10, k+=5)
		{
			for(var j = 200; j > (-10 + i - 2.5); j-=10)
			{
				var brick = GenerateBrick();
				brick.position.x = 160;
				brick.position.y = j - 100 - k;
				brick.position.z = i + 2.5;
				brick.name = "Brick";
				castle.push(brick);
				scene.add(brick);
			}
		}

		for(var i = 2.5, k = 0; i < 42.5; i+=10, k+=5)
		{
			for(var j = 20; j < (170 - i - 2.5); j+=10)
			{
				var brick = GenerateBrick();
				brick.position.x = j + k;
				brick.position.y = -115;
				brick.position.z = i + 2.5;
				brick.name = "Brick";
				castle.push(brick);
				scene.add(brick);
			}
		}

		for(var i = 2.5, k = 0; i < 42.5; i+=10, k+=5)
		{
			for(var j = 20; j < (170 - i - 2.5); j+=10)
			{
				var brick = GenerateBrick();
				brick.position.x = j + k;
				brick.position.y = 115;
				brick.position.z = i + 2.5;
				brick.name = "Brick";
				castle.push(brick);
				scene.add(brick);
			}
		}
	}
	else
	{
		for( var i = 0; i < buildString[0].charAt(0); i++ )
		{
			for( var j = 1; j < buildString.length; j++ )
			{
				var brick = GenerateBrick();
				brick.position.x = buildString[j].charAt(1) * 10;
				brick.position.y = buildString[j].charAt(2) * 10;
				brick.position.z = buildString[j].charAt(3) * 10 + (brick._physijs.height / 2) + (brick._physijs.height * i);
				brick.name = "Brick";
				castle.push(brick);
				scene.add(brick);
			}
		}
		var enemy = GenerateEnemy();
		enemy.position.set(0, -50, 5);
		enemyList.push(enemy);
		scene.add(enemy);
	}

	return castle;
}