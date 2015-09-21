function GenerateBrick()
{
	var brickGeometry = new THREE.BoxGeometry(10, 10, 10);
	var brickMaterial = Physijs.createMaterial( new THREE.MeshBasicMaterial({map: brickTexture}), .95, .95 );
	var brick = new Physijs.BoxMesh( brickGeometry, brickMaterial );
	brick.mass *= 0.50;

	brick.collisions = 0;
	brick.addEventListener( 'collision', function( other_object, linear_velocity, angular_velocity )
	{
		if( other_object.name == 'Cannonball' && Math.abs(linear_velocity.x) >= 2.5 )
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
		if( (Math.abs(linear_velocity.x) >= 2) || (Math.abs(linear_velocity.y) >= 2) || (Math.abs(linear_velocity.z) >= 2) )
		{
			console.log("Collision by ", other_object.name, ": Removing ", this.name, " # ", this.id, "from the game.");
			enemyList.splice(enemyList.indexOf(this), 1);
			scene.remove(this);
			document.getElementById( 'enemy-targets-count' ).innerHTML = enemyList.length;
			enemy_killed_01.play();
		}
	});
	return enemy;
}

function CreateStructure(x, y)
{
	blockTexture.wrapS = THREE.RepeatWrapping;
	blockTexture.wrapT = THREE.RepeatWrapping;
	blockTexture.repeat.set( 10, 10 );
	var blockGeometry = new THREE.BoxGeometry(10, 10, 50);
	var block2Geometry = new THREE.BoxGeometry(10, 60, 10);
	var block3Geometry = new THREE.BoxGeometry(60, 10, 10);
	var blockMaterial = Physijs.createMaterial( new THREE.MeshBasicMaterial({map: blockTexture}), .95, .95 );
	var block1 = new Physijs.BoxMesh( blockGeometry, blockMaterial, 0 );
	block1.position.set(0 + (x * 90), 0 + (y * 90), 25);
	var block2 = new Physijs.BoxMesh( blockGeometry, blockMaterial, 0 );
	block2.position.set(0 + (x * 90), 60 + (y * 90), 25);
	var block3 = new Physijs.BoxMesh( blockGeometry, blockMaterial, 0 );
	block3.position.set(60 + (x * 90), 60 + (y * 90), 25);
	var block4 = new Physijs.BoxMesh( blockGeometry, blockMaterial, 0 );
	block4.position.set(60 + (x * 90), 0 + (y * 90), 25);
	var block5 = new Physijs.BoxMesh( block2Geometry, blockMaterial, 0 );
	block5.position.set(0 + (x * 90), 25 + (y * 90), 5);
	var block6 = new Physijs.BoxMesh( block2Geometry, blockMaterial, 0 );
	block6.position.set(60 + (x * 90), 25 + (y * 90), 5);
	var block7 = new Physijs.BoxMesh( block2Geometry, blockMaterial, 0 );
	block7.position.set(60 + (x * 90), 25 + (y * 90), 55);
	var block8 = new Physijs.BoxMesh( block3Geometry, blockMaterial, 0 );
	block8.position.set(25 + (x * 90), 60 + (y * 90), 35);
	var block9 = new Physijs.BoxMesh( block2Geometry, blockMaterial, 0 );
	block9.position.set(0 + (x * 90), 35 + (y * 90), 55);
	var block10 = new Physijs.BoxMesh( block3Geometry, blockMaterial, 0 );
	block10.position.set(25 + (x * 90), 0 + (y * 90), 15);

	scene.add(block1);
	scene.add(block2);
	scene.add(block3);
	scene.add(block4);
	scene.add(block5);
	scene.add(block6);
	scene.add(block7);
	scene.add(block8);
	scene.add(block9);
	scene.add(block10);

	for( var i = 1; i < 5; i++ )
	{
		for( var j = 0; j < 5; j++ )
		{
			var brick = GenerateBrick();
			brick.position.x = 0 + (x * 90);
			brick.position.y = (j * 10) + 10 + (y * 90);
			brick.position.z = (i * 10) + 5;
			brick.name = "Brick";
			castle.push(brick);
			scene.add(brick);
		}

		for( var j = 0; j < 5; j++ )
		{
			var brick = GenerateBrick();
			brick.position.x = 60 + (x * 90);
			brick.position.y = (j * 10) + 10 + (y * 90);
			brick.position.z = (i * 10) + 5;
			brick.name = "Brick";
			castle.push(brick);
			scene.add(brick);
		}
	}

	for( var i = 0; i < 6; i++ )
	{
		if(i != 3)
		{
			for( var j = 0; j < 5; j++ )
			{
				var brick = GenerateBrick();
				brick.position.x = (j * 10) + 10 + (x * 90);
				brick.position.y = 60 + (y * 90);
				brick.position.z = (i * 10) + 5;
				brick.name = "Brick";
				castle.push(brick);
				scene.add(brick);
			}
		}

		if(i != 1)
		{
			for( var j = 0; j < 5; j++ )
			{
				var brick = GenerateBrick();
				brick.position.x = (j * 10) + 10 + (x * 90);
				brick.position.y = 0 + (y * 90);
				brick.position.z = (i * 10) + 5;
				brick.name = "Brick";
				castle.push(brick);
				scene.add(brick);
			}
		}
	}

	var brick = GenerateBrick();
	brick.position.x = 0 + (x * 90);
	brick.position.y = 0 + (y * 90);
	brick.position.z = 55;
	brick.name = "Brick";
	castle.push(brick);
	scene.add(brick);
}
function CreateCastle(x, y)
{
	CreateStructure(x, y);

	var enemy = GenerateEnemy();
	enemy.position.set(70 + (x * 90), 0 + (y * 90), 5);
	enemyList.push(enemy);
	scene.add(enemy);

	var enemy2 = GenerateEnemy();
	enemy2.position.set(60 + (x * 90), 60 + (y * 90), 55);
	enemyList.push(enemy2);
	scene.add(enemy2);

	var enemy3 = GenerateEnemy();
	enemy3.position.set(30 + (x * 90), 30 + (y * 90), 5);
	enemyList.push(enemy3);
	scene.add(enemy3);

	return castle;
}