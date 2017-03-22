var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if(MINUTE > 30 && PERIOD == "AM"){
	MINUTE = "almost";
	PERIOD = "in the morning";
	HOUR++;
	console.log("It\'s", MINUTE, HOUR, PERIOD);
}

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if(MINUTE < 30 && PERIOD == "PM"){
	MINUTE = "just after";
	PERIOD = "in the evening";
	console.log("It\'s", MINUTE, HOUR, PERIOD);
}
