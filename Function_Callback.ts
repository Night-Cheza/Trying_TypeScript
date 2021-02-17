function add(n1: number, n2: number){
   return n1 + n2;   
}

function printResult(num:number): void {
    console.log ("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb:(n3: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(7,10));

let combineValues: (x: number, y: number) => number;

combineValues = add;
console.log(combineValues(30, 15));

addAndHandle(17, 25, (result)=> {
    console.log(result);
});