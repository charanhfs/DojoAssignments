function Vehicle(name, wheels, passengerNumber, speed){
  if (!(this instanceof Vehicle)){
    return new Vehicle(name,wheels,passengerNumber, speed);
  }

  this.distance_traveled = 0;
  this.name = name || "unicycle";
  this.wheels = wheels || 1;
  this.passengerNumber = passengerNumber || 0;
  this.speed = speed || 0;

  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
  this.vin = createVin();

  function createVin(){
    var vin = '';
    for (var i = 0; i < 17; i+=1 ){
      // Use Math.floor and Math.random to generate random index to access character from char string
      vin += chars[Math.floor(Math.random()*35)];
    }
    return vin;
  }

}

// var rad =	Math.floor(Math.random() * 100)+1;

Vehicle.prototype.updateDistanceTraveled = function() {
  this.distance_traveled += this.speed;
  console.log("Updated distance traveled "+ this.distance_traveled);
  return this;
}

Vehicle.prototype.makeNoise = function(noise){
  var noise = noise || "Honk Honk";
  console.log(noise);
  return this;
}

Vehicle.prototype.move = function(){
  this.updateDistanceTraveled();
  this.makeNoise();
  return this;
}

Vehicle.prototype.checkMiles = function(){
 console.log(this.distanceTraveled);
 return this;
}



var bike = new Vehicle("bike",2,1,100);
bike.makeNoise = function(){
	console.log("ring ring");
};

var sedan = new Vehicle("Mazda 323",4,4);

var bus = new Vehicle("Big one",8);
bus.passengerCount = function(newPassenger) {
	bus.passengerNumber += newPassenger;
	return bus.passengerNumber;
}
console.log(bike.move());
// console.log("passenger count for bus: "+bus.passengerCount(12));
