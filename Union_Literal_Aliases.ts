//Union type

function combine(input1:number | string, input2:number | string) {
  let result;
   if(typeof input1 === "number" && typeof input2 === "number") {
       result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
     return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combineNames = combine("Stephen", "Gwen");
console.log(combineNames);
//________________________________________________________________

//Literal type

function combine(
    input1:number | string, 
    input2:number | string,
    resultConversion: "as-number" | "as-text"
) {
    let result;
    if(typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number"){
        result = +input1 + +input2;
    } else {
       result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges1 = combine(30, 26, "as-number");
console.log(combineAges);

const combineNames1 = combine("Stephen", "Gwen", "as-text");
console.log(combineNames);

const combineStringAges1 = combine("30", "26", "as-number");
console.log(combineStringAges1);
//________________________________________________________________

//Aliases type

type Combination = number | string;
type ConversionDescription = "as-number" | "as-text"

function combine(
    input1:Combination, 
    input2:Combination,
    resultConversion: ConversionDescription
) 
{
    let result;
    if(typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number"){
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}