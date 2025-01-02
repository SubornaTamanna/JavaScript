// const addtocart =1000;

// if(addtocart >=500){
//     const discount = addtocart *10/100;
//     const pay = addtocart- discount;
//     console.log(pay)
// }else{
//     console.log(addtocart)
// }


const child =10;
const age = 75;
const isIdcard=true;
const cuponcard = 550;
const buy =550;


if(child <= 8){
    console.log("free food")

}else if(age>= 60 && isIdcard == true){
    const discount =buy  * 50/100
    const pay = buy -discount
    console .log(Pay);
}else if(cuponcard == true){
    const discount = buy * 25/100
    const pay =buy - discount
    console.log(pay);
}else{
    console.log('send money')
}
