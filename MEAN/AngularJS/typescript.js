// 1
var myNum = 5;
// 2
var myString = "Hello Universe";
// 3
var myArr = [1, 2, 3, 4];
// 4 
var myObj = { name: 'Bill' };
// 5
var anythingVariable = "Hey";
var anythingVariable = 25;
// 6
var arrayOne = [true, false, true, true];
// 7
var arrayTwo = [1, 'abc', true, 2];
// 8
var myObj = { x: 5, y: 10 };
// 9
var MyNode = (function () {
    function MyNode(valP) {
        this.val = 0;
        this.val = valP;
    }
    MyNode.prototype.doSomething = function () {
        var _priv = 10;
    };
    ;
    return MyNode;
}());
;
var firstSLNode = new MyNode(1);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
    throw new Error();
}

myFunction();

