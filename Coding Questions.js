"use strict";
// [1] 

// let n ='123'
// console.log(Number(n) + 7)

/* ----------------------------------------------------------------------------------- */

//[2] 

// let value = 0    
// if(!value){
// console.log("Invalid")
// }

/* ----------------------------------------------------------------------------------- */

//[3]

// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0 ; i< arr.length ; i++){
//     if(arr[i]%2 === 0 ){
//         continue;
//     }
//     console.log(arr[i])
// }

/* ----------------------------------------------------------------------------------- */

//[4]

// let arr = [1,2,3,4,5]
// let new_arr = arr.filter((elm,i)=>{return elm % 2 === 0})
// console.log(new_arr)


/* ----------------------------------------------------------------------------------- */

//[5]

// let inp_one = [1, 2, 3]

// let inp_two = [4, 5, 6]

// let outp = [...inp_one,...inp_two]

// console.log(outp)


/* ----------------------------------------------------------------------------------- */

// [6]

// let day = 2

// switch(day){
//     case 1:
//         console.log("sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break;
//     case 3:
//         console.log("Tuesday")
//         break;
//     case 4:
//         console.log("Wednesday")
//         break;
//     case 5:
//         console.log("Thursday")
//         break;
//     case 6:
//         console.log("Friday")
//         break;
//     case 7:
//         console.log("Saturday")
//         break;
//     default:
//         console.log("wrong number")
// }

/* ----------------------------------------------------------------------------------- */

//[7]

// let arr= ["a", "ab", "abc"]

// let outpp = arr.map((elm)=>{return elm.length})

// console.log(outpp)

/* ----------------------------------------------------------------------------------- */

//[8]

// let inp = 15

// function divbb(n){
//      if(n % 3 ===0 && n %5 === 0){
//          console.log('Divisible by both')
//         }else{
//             console.log('not Divisible by both')
//         }
        
// }
// divbb(inp)



/* ----------------------------------------------------------------------------------- */

//[9]

// let square_of_n = (n)=> {
//     return n**2 
// }

// console.log(square_of_n(5))

/* ----------------------------------------------------------------------------------- */

//[10]

// let desfn = function () {
//     const person = {name: 'John', age: 25}
//     const{name,age}=person
//      return `${name} is ${age}  years old`
// }
// console.log(desfn()) 

/* ----------------------------------------------------------------------------------- */

//[11]

// function sum(...numbers){
// let total = 0
// numbers.map((elm)=>{return total+=elm})
// return total 
// }
// console.log(sum(1, 2, 3, 4, 5));

/* ----------------------------------------------------------------------------------- */

//[12]

// function outpp(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Success");
//         }, 3000)
//     })
// }
// outpp().then((message) => {
//     console.log(message);
// });

/* ----------------------------------------------------------------------------------- */

// [13]

// let largest_num = function(arr){

// return Math.max(...arr)
// } 

// console.log(largest_num([1, 3, 7, 2, 4]))

/* ----------------------------------------------------------------------------------- */

//[14]

// let obj_to_arr =(obj)=>{

// return Object.keys(obj)

// }

// console.log(obj_to_arr({name: "John", age: 30}))

/* ----------------------------------------------------------------------------------- */

// [15]


// let str_to_arr =(str)=>{
// return str.split(" ")
// }

// console.log(str_to_arr("The quick brown fox"))
