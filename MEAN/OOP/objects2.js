function VehicleConstructor(name, wheels, passengerNumber, speed){
/*
  private variables
*/
  var distance_traveled = 0;
   var self = this;
  /*
    private methods
  */
    var updateDistanceTraveled = function() {
      distance_traveled += self.speed;
      console.log(distance_traveled);
    }
/*
  Properties
*/
  this.name = name || "unicycle";
  this.wheels = wheels || 1;
  this.passengerNumber = passengerNumber || 0;
  this.speed = speed || 0;
  /*
    methods
  */
  this.makeNoise = function(noise){
    var noise = noise || "Honk Honk";
    console.log(noise);
  }
  self.move = function(){
    updateDistanceTraveled();
    this.makeNoise();
  }
  this.checkMiles = function(){
   console.log(distanceTraveled);
 }
}

var bike = new VehicleConstructor("bike",2,1,100);
bike.makeNoise = function(){
	console.log("ring ring");
};

var sedan = new VehicleConstructor("Mazda 323",4,4);

var bus = new VehicleConstructor("Big one",8);
bus.passengerCount = function(newPassenger) {
	bus.passengerNumber += newPassenger;
	return bus.passengerNumber;
}
console.log(bike.move());
console.log("passenger count for bus: "+bus.passengerCount(12));
