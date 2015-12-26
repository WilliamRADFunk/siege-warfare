function render()
{
	updateCounter++;
	lastFired--;
	timer--;
	var minutes = Math.floor(timer / 3600);
	var seconds = Math.floor( (timer - (minutes * 3600)) / 60 );

	if( enemyList.length <= 0 )
	{
		document.getElementById( 'minutes' ).innerHTML = "YOU";
		document.getElementById( 'seconds' ).innerHTML = "WIN";
		theme_beach_01.pause();
		theme_rainforest_01.pause();
		for(var i = 0; i < 4; i++)
		{
			theme_thunder[i].pause();
		}
		for(var j = 0; j < 3; j++)
		{
			background_gunfire[j].pause();
		}
		victory.play();
	}
	else if( minutes > 0 || seconds > 0 )
	{
		// Keeps the counter from getting too large.
		if(updateCounter > 6000)
		{
			updateCounter = 0;
		}

		if(lastFired > 0)
		{
			var progressBarWidth = (lastFired / 125) * 100;
			document.getElementById( 'fire-bar' ).style.width = progressBarWidth + "%";
		}

		// Listens for a keyboard key press.
		KeyPressed();

		// Keeps track of the time.
		if(updateCounter % 59 == 0)
		{
			document.getElementById( 'minutes' ).innerHTML = minutes;
			document.getElementById( 'seconds' ).innerHTML = seconds;
			if(lastFired <= 0)
			{
				document.getElementById( 'msg' ).innerHTML = "Ready To Fire!";
			}
		}

		// Removes bricks and cannonballs that are out of bounds.
		if(updateCounter % 119 == 0)
		{
			for( var i = 0; i < castle.length; i++ )
			{
				if( castle[i].position.z < 0 || castle[i].position.x > 200 ||
					castle[i].position.y > 200 || castle[i].position.y < -200 )
				{
					console.log("Removing brick# ", castle[i].id);
					scene.remove(castle[i]);
					castle.splice(i, 1);
				}
			}

			for( var j = 0; j < ballList.length; j++ )
			{
				if( ballList[j].position.z < 0 || ballList[j].position.x > 200 ||
					ballList[j].position.y > 200 || ballList[j].position.y < -200 )
				{
					console.log("Removing cannonball# ", ballList[j].id);
					scene.remove(ballList[j]);
					ballList.splice(j, 1);
				}
			}

			for( var k = 0; k < enemyList.length; k++ )
			{
				if( enemyList[k].position.z < 0 || enemyList[k].position.x > 200 ||
					enemyList[k].position.y > 200 || enemyList[k].position.y < -200 )
				{
					console.log("Removing enemy# ", enemyList[k].id);
					scene.remove(enemyList[k]);
					enemyList.splice(k, 1);
					document.getElementById( 'enemy-targets-count' ).innerHTML = enemyList.length;
					enemy_killed_01.play();
				}
			}
		}

		// Plays background sounds for theme #3
		if(updateCounter % 499 == 0)
		{
			if(theme == 2)
			{
				theme_thunder[Math.floor((Math.random() * 5))].play();
			}
		}

		// Plays background sounds for war
		if(updateCounter % 599 == 0)
		{
			background_gunfire[Math.floor((Math.random() * 2))].play();
		}

		// Removes cannonballs after a reasonable amount of time.
		if( (updateCounter % 1199 == 0 && ballList.length > 1) || (ballList.length >= 30) )
		{
			console.log("Removing cannonball# ", ballList[0].id);
			scene.remove(ballList[0]);
			ballList.splice(0, 1);
		}

		requestAnimationFrame( render );
		renderer.render( scene, camera );
	}
	else
	{
		document.getElementById( 'minutes' ).innerHTML = "YOU";
		document.getElementById( 'seconds' ).innerHTML = "LOSE";
		theme_beach_01.pause();
		theme_rainforest_01.pause();
		for(var i = 0; i < 4; i++)
		{
			theme_thunder[i].pause();
		}
		for(var j = 0; j < 3; j++)
		{
			background_gunfire[j].pause();
		}
		defeat.play();
	}
}