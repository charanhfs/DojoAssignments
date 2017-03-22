function slotmachine(quarters) {
	 for (; quarters > 0;) {
		 var rad =	Math.floor(Math.random() * 100)+1;
 		 if (rad == 1) {
			 var coins = Math.floor(Math.random() * 50)+51;
			 console.log('You have won ' + coins + ' tokens!');
			 quarters--;
       quarters = quarters + coins;
       console.log('You have ' + quarters + ' left.');

  	}else {
			quarters--;
      console.log('You did not win. Please try again.');
      console.log('You have ' + quarters + ' left.');
	  }
  } console.log("Thanks for playing please play again!");
}

slotmachine(20);
