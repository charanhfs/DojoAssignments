var person = {
	name: 'Charan Singh',
	distance_traveled: 0,
	say_name: function () {
		return person.name;
	},
	say_something: function(param){
		me = this.name;
		return me + " says " + param;
	},
	walk: function(){
		console.log(this.name + " is walking ");
		this.distance_traveled += 3;
		return person;
	},
	run: function(){
		console.log(this.name + " is running ");
		this.distance_traveled += 10;
		return person;
	},
	crawl: function(){
		console.log(this.name + " is crawling ");
		this.distance_traveled += 1;
		return person;
	}
}

console.log(person.crawl());
