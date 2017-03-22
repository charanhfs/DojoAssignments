
for(var daysUntilMyBirthday = 60; daysUntilMyBirthday >= 0; daysUntilMyBirthday--){
	if (daysUntilMyBirthday >= 30) {
		console.log("Gosh why is your birthday soooo LONG!!! I mean it\'s like",daysUntilMyBirthday, "days...");
	}else if (daysUntilMyBirthday < 30 && daysUntilMyBirthday > 5) {
		console.log("birthday is coming close ",daysUntilMyBirthday, " days remaining");
	}else if (daysUntilMyBirthday <= 5 && daysUntilMyBirthday !== 0 ) {
		console.log("",daysUntilMyBirthday, "MORE DAYS, IT IS SOOO CLOSE!");
	}else {
		console.log("HAPPY BIRTHDAY TO YOU!!!");
	}
}
