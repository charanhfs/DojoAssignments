x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];

x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);

for(var i = 0; i < x.length; i++){
	console.log(x[i])
}

var sum = 0;
for( var x = 1; x<501; x++){
	sum += x
}
console.log(sum);

var array = [1, 5, 90, 25, -3, 0];
var min = array[0];
for(var i = 0; i < array.length; i++){
	if( array[i] < min){
		min = array[i]
	}
}
console.log(min);

var total = 0;
for(var i = 0; i < array.length; i++){
	total += array[i]

}
console.log(total/array.length);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var key in newNinja){
	console.log(key,":",newNinja[key]);
}
