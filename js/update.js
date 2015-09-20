function render()
{
	updateCounter++;
	lastFired--;
	timer--;
	var minutes = Math.floor(timer / 3600);
	var seconds = Math.floor( (timer - (minutes * 3600)) / 60 );

	if(minutes > 0 || seconds > 0)
	{
		// Keeps the counter from getting too large.
		if(updateCounter > 6000)
		{
			updateCounter = 0;
		}

		// Listens for a keyboard key press.
		KeyPressed();

		// Removes bricks and cannonballs that are out of bounds.
		if(updateCounter % 59 == 0)
		{
			console.log(minutes, " ", seconds);
			document.getElementById( 'minutes' ).innerHTML = minutes;
			document.getElementById( 'seconds' ).innerHTML = seconds;

			for( var i = 0; i < castle.length; i++ )
			{
				if(castle[i].position.z < 0 || castle[i].position.x > 180)
				{
					console.log("Removing brick# ", castle[i].id);
					scene.remove(castle[i]);
					castle.splice(i, 1);
				}
			}

			for( var j = 0; j < ballList.length; j++ )
			{
				if(ballList[j].position.z < 0 || ballList[j].position.x > 180)
				{
					console.log("Removing cannonball# ", ballList[j].id);
					scene.remove(ballList[j]);
					ballList.splice(j, 1);
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
	}
}