function sumxy(x, y) {
  var sum = 0;
  for (var i = x; i < y + 1; i++) {
      sum += i;
  }
  return sum;
}

// console.log(sumxy(2,10));

var array = [1, 5, 90, 25, -3, 0];
function arrayCounter(arr) {
	var min = arr[0];
	for(var i = 0; i < arr.length; i++){
		if( arr[i] < min){
			min = arr[i]
		}
	}
  return min
}

// console.log(arrayCounter(array));

function arrayAvg(array) {
	var total = 0;
	for(var i = 0; i < array.length; i++){
		total += array[i]
		avg = total/array.length
	}
	return avg
}

// console.log(arrayAvg(array));

var functionObject = {
 sumxy: function(x,y) {
   var sum = 0;
   for (var i = x; i < y + 1; i++) {
       sum += i;
   }
   return sum;
 },
 min: function(arr) {
 	var min = arr[0];
 	for(var i = 0; i < arr.length; i++){
 		if( arr[i] < min){
 			min = arr[i];
 		}
 	}
   return min
 },
 avg: function(array) {
 	var total = 0;
 	for(var i = 0; i < array.length; i++){
 		total += array[i]
 		avg = total/array.length
 	}
 	return avg
 },
}


	console.log(functionObject.sumxy(10,20));
