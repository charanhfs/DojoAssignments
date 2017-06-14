function VehicleConstructor(name, wheels, passengerNumber){
  var vehicle = {};
/*
  Properties
*/
  vehicle.name = name || "unicycle";
  vehicle.wheels = wheels || 1;
  vehicle.passengerNumber = passengerNumber || 0;
  /*
    methods
  */
  vehicle.makeNoise = function(noise){
    var noise = noise || "Honk Honk";
    console.log(noise)
  }
	/*
		return
	*/
	return vehicle;
}

var bike = VehicleConstructor("bike",2,1);
bike.makeNoise = function(){
	console.log("ring ring");
};

var sedan = VehicleConstructor("Mazda 323",4,4);

var bus = VehicleConstructor("Big one",8,20);
bus.passengerCount = function(newPassenger) {
	bus.passengerNumber += newPassenger;
	return bus.passengerNumber;
}
console.log(bus);
console.log(bus.passengerCount(0));
