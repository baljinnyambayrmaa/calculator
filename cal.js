// const input1 = document.getElementById("input1");
// const inputOperator = document.getElementById("inputOperator");
// const input2 = document.getElementById("input2");
// const response = document.getElementById("response");
// let first;
// let second;
// let operator;
// let result;

// const isNumberCheck = (number) => {
//   let temp = parseInt(number);
//   if (typeof temp === "number") {
//     return true;
//   }
//   return false;
// };
// const isArithmeticOp = (char) => {
//   if (char.length !== 1) {
//     return false;
//   }
//   const operatorArray = ["+", "-", "*", "/", "%"];
//   const isRightOperator = operatorArray.includes(char);
//   return isRightOperator;
// };
// input1.addEventListener("change", (event) => {
//   const result = isNumberCheck(event.target.value);
//   if (result) {
//     first = parseInt(event.target.value);
//   } else {
//     alert(`${event.target.value} is not number`);
//   }
// });
// input2.addEventListener("change", (event) => {
//   const result = isNumberCheck(event.target.value);
//   if (result) {
//     second = parseInt(event.target.value);
//   } else {
//     alert(`${event.target.value} is not number`);
//   }
// });
// inputOperator.addEventListener("change", (event) => {
//   const result = isArithmeticOp(event.target.value);
//   if (result) {
//     operator = event.target.value;
//   } else {
//     alert(` ${event.target.value} is not arithmetic operator`);
//   }
// });
// const execute = () => {
//   switch (operator) {
//     case "*":
//       result = first * second;
//       break;
//     case "+":
//       result = first + second;
//       break;
//     case "-":
//       result = first - second;
//       break;
//     case "/":
//       result = first / second;
//       break;
//     default:
//       result = first % second;
//   }
//   response.innerHTML = result;
// };

const input = document.getElementById("button_value");
const button_ac = document.getElementById("button_ac");
const button_pm = document.getElementById("button_pm");
const button_percent = document.getElementById("button_percent");
const button_division = document.getElementById("button_division");
const button_7 = document.getElementById("button_7");
const button_8 = document.getElementById("button_8");
const button_9 = document.getElementById("button_9");
const button_multi = document.getElementById("button_multi");
const button_4 = document.getElementById("button_4");
const button_5 = document.getElementById("button_5");
const button_6 = document.getElementById("button_6");
const button_sub = document.getElementById("button_sub");
const button_1 = document.getElementById("btn1");
const button_2 = document.getElementById("button_2");
const button_3 = document.getElementById("button_3");
const button_add = document.getElementById("button_add");
const button_0 = document.getElementById("button_0");
const button_decimal = document.getElementById("button_decimal");
const button_equal = document.getElementById("button_equal");

let first = "";
let operator;
let result;
let inpit1 = true
let operatorAdded = 0;
let back;

input.addEventListener("change", (event) => {
    input.value = parseFloat(event.target.value);
})

button_1.addEventListener("click", () => {
  input.value += "1";
});
button_2.addEventListener("click", () => {
  input.value += "2";
});
button_3.addEventListener("click", () => {
  input.value += "3";
});
button_4.addEventListener("click", () => {
  input.value += "4";
});
button_5.addEventListener("click", () => {
  if(first != "") {
    input.value = "5";
    first = ""
  }else {
    input.value += "5"
    first = ""
  }
});
button_6.addEventListener("click", () => {
  input.value += "6";
});
button_7.addEventListener("click", () => {
  input.value += "7";
});
button_8.addEventListener("click", (event) => {
  input.value += "8";
});
button_9.addEventListener("click", () => {
  input.value += "9";
});
button_0.addEventListener("click", () => {
  if (operatorAdded === 1) {
    input.value = 0;
  } else {
    input.value += "0";
  }
});
 
button_add.addEventListener ("click", () => {
    input.value += "+";
    // result=input.value
})

button_ac.addEventListener("click", () => {
  input.value = "";
});
button_pm.addEventListener("click", () => {
    operatorAdded = 1
    input.value += "";
});
button_percent.addEventListener("click", () => {
    input.value += "";
    result=input.value/input.value
    result=input.value
});
button_division.addEventListener("click", () => {
    // input.value =input.value *  
});

button_multi.addEventListener ("click", () => {

  if(operatorAdded > 1){
    giveResult()
  }

    operator = "*";
    result = parseFloat(input.value)
    first = "*"
    input.value = result 
    operatorAdded++;
})

button_sub.addEventListener ("click", () => {
    input.value = ""
})

button_add.addEventListener ("click", () => {
    input.value = ""
})

button_decimal.addEventListener ("click", () => {
    input.value = "."
})

button_equal.addEventListener ("click", () => {
  giveResult()
})

const giveResult = () => {
  switch(operator){
    case "*": result = result * parseFloat(input.value)
    break;
    
}

  input.value = result;
}