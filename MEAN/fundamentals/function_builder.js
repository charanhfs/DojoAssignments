// 1
function runLogger() {
	console.log('I am running');
}

// 2
function multiplyByTen(num) {
	sum = num*10;
	console.log(sum);
}

// multiplyByTen(5);

// 3

function stringReturnOne() {
	console.log("I am one");
}

function stringReturnTwo() {
	console.log("I am two");
}

// 4
function caller(parm) {
	if(typeof(parm) == "function"){
		parm();
	}
}

// caller(select2);

// 5

function s1() {
	return 'Hello'
}
function s2() {
	return 'World'
}

function myDoubleConsoleLog(p1,p2) {
	if(typeof(p1) == "function" && typeof(p2) == "function"){
		console.log(p1(), p2());
	}
}


function caller2(param){
	console.log('starting....');
	setTimeout(function(){
	 if (typeof(param)=='function'){
		// notice the passed parameters...
		param(s1, s2);
		console.log('ending?');
		}
	 }, 2000);

	return 'interesting...'
}

caller2(myDoubleConsoleLog);
