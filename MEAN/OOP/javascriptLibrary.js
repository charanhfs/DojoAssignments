var _ = {
   map: function(array,callback) {
		 for(var i = 0; i < array.length; i++){
			 array[i] = callback(array[i]);
		 }
		 console.log("the mapped array which is multiplied by 3 is:");
		 return array;
   },
	 reduce: function(array, callback, memo){
				var index = 0;
				if (!memo){
					memo = array[0];
					index = 1;
				}
				for (var i = index; i < array.length; i++) {
					memo = callback(array[i], memo);
					// console.log(memo);
				}
				return memo;

		},
   find: function(array,callback) {
     for(var i = 0; i < array.length; i++){
			 if(callback(array[i])){
				 console.log("we found the first odd value at index",i,"of the array, the value is:");
				 break;
			 }
		 }
		 return array[i];
   },
   filter: function(array, callback){
    var tempArray =[];
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])){
        tempArray.push(array[i]);
      }
   }
    return tempArray;
 },
   reject: function(array,func) {
		 var temp =[];
     for (var i = 0; i < array.length; i++) {
       if(!(func(array[i]))){
         temp.push(array[i]);
       }
    }
     return temp;
   }
 }
var array1 = [2,3,4,5];
var array = [2,3,4,5];
// you just created a library with 5 methods!
// var mapped = _.map(array1,function multiplyBy3(val){return val * 3; });
// console.log(mapped,"original array is");
// var evens = _.filter([1, 2, 3, 4, 5, 6],function(num){return num % 2 == 0; });
// if things are working right, this will return [2,4,6].

// console.log("I reduced the array to:",_.reduce(array, function callback(x, memo){return x * memo;},2));

var evens = _.find(array,function(num){return num % 2 != 0;});
console.log(evens);

// console.log(_.reject([1,2,3,4,5,6,7],function(number){return number % 2 == 0;}));
