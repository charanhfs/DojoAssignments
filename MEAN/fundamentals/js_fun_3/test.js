var person = {
	name: 'Charan Singh',
	distance_traveled: 0,
	say_name: function () {
		return person.name;
	},
	say_something: function(param){
		me = this.name;
		return `${person.name} says: ${param}`;

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

// console.log(person.say_something('Bruh bruh bruh'));


function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if (ninja.beltLevel < 2){
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    return ninja
  }
  ninja.belt = belts[ninja.beltLevel];
  return ninja;
}

console.log(ninjaConstructor('Charan', 'MEAN').levelUp().levelUp());
