// alert("its just alert msg");
// console.log("after alert");

// // confirm return boolean value so we can use it after
// let merried = confirm("are you married?");
// if (merried) {
//   console.log("grattis");
// } else console.log("omg");

// // input field in popup msg and it returns the value in field
// let promt = prompt("your name:", "write here...");
// console.log(`welcome ${promt}`);

// setTimeout(function(), ms , paramter if fuction needs)
// without parameter


let x = setTimeout(function () {
    console.log("from setTimeout function");
}, 0);

// will excuted before setTimeout function
console.log("im first");
console.log("im second");
console.log("im third");
console.log("im fourth");
// let div = document.getElementsByTagName("div")[0];
// div.onclick = function () {
//   console.log("I have stoped the setTimeout function");
//   clearTimeout(x); // to stop the setTimeout fuction action
// };

// // with parameter
// let div2 = document.getElementsByTagName("div")[1];

// let y = setTimeout(f1()
// , 4000 ,"anas");

// div2.onclick = function f1(name) {
//     div2.innerHTML = name;
// //   console.log("I have stoped the setTimeout function2");
// //   clearTimeout(y); 
//   // to stop the setTimeout fuction action
// };

