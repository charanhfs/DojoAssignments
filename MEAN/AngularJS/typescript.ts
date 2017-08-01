// 1
var myNum: number = 5;

// 2
var myString: string = "Hello Universe";

// 3
var myArr: number[] = [1,2,3,4];

// 4 
var myObj: object = { name:'Bill'};

// 5
var anythingVariable: any = "Hey";
var anythingVariable: any = 25; 

// 6
var arrayOne: boolean[] = [true, false, true, true];

// 7
var arrayTwo: any[] = [1, 'abc', true, 2];

// 8
var myObj: object = { x: 5, y: 10 };

// 9

class MyNode {
    val: number = 0;
     constructor(valP: number) {
        this.val = valP;
    }
    doSomething () {
        var _priv = 10;
    };
};

let firstSLNode = new MyNode(1);

function myFunction(): void {
    console.log("Hello World");
    return;
}
function sendingErrors(): never {
    throw new Error();
}

