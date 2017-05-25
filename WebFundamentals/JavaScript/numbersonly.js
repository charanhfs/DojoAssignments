function numbers(array) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (typeof array[i] === "number") {
			newArray.push(array[i]);
		}
	}
console.log(newArray);
}

numbers([1,11,12,"dscohdc","dvijd",1,"cohc"]);
