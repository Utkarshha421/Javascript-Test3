//Q1
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//Q2

//Q3
// let input1=[1,2,3,4];
// let input2=[2,4,6,8];
// let newarray=[];
// function commonElements(input1,input2){
//     for(let i=0;i<input1.length;i++){
//         for(let j=0;j<input2.length;j++){
//             if(input1[i]===input2[j]){
//                 var newarray1=input1[i];
//                 newarray.push(newarray1);
//             }
//         }
//     }
//     return newarray;
// }
// console.log(commonElements(input1,input2));

//Q4
// let number=13195;
// let i=2;
// function primeNumber(number){
// while(i<=number){
//     if(number%i==0){
//         number=number/i;
//     }else{
//         i++;
//     }
// }
// return i;
// }
// console.log(primeNumber(number));

//Q5
let array=[1,2,2,3,4,4,5];
let array1=[];
function Duplicate(array){
    if(!array1.includes(array)){
        array1.push(array);
    }
    return array1;
}
console.log(Duplicate(array));



//Q6
// let input1=[1,[2,[3,[4,5]]],6];
// let result=[];
// function FlattenArray(input1){
// for(let i=0;i<input1.length;i++){
//     if(Array.isArray(input1[i])){
//     result=result.concat(FlattenArray(input1[i]));
//     }else{
//         result.push(input1[i]);
//     }

// }
// return result;
// }
// console.log(FlattenArray(input1));

//Q7

// let array=[1,2,3,4,5,6];
// let target=4;
// function BinarySearch(array,target){

// }
// console.log(BinarySearch(array,target));