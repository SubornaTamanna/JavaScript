// let number = [10,12, 16,8,9];
// let minimun =Math.min(...number);
// let maximun =Math.max(...number);
// let reversenumber = number.reverse();
// console.log(`${minimun}minimum number ${maximun}maximum number ${reversenumber} revers number`);


// let number =[ 1,2,3,4,5,6,7];
// let text =[];
// for(let i=0; i< number.length; i++){
//     text +=number[i]
//     console.log(text);
// }






// let array =[10,12,16,18,20];
// let maxValue =array [0];
// let minValue =array [0];
// let i =1;
// while(i< array.length){
//     if(array[i] >maxValue){
//         minValue =array[i]
//     }
//     if(array[i] < minValue){
//         minValue =array[i]
//     }
//     i++
// }
// console.log(`${maxValue}maxValue ${minValue} minValue`)


const number =[1,2,3,4,5,6,7,8];
let reversenumber = [];
for(let i = number.length-1;i>=0; i--){
    reversenumber.push(number[i])
}
console.log(reversenumber);