const age = 90;
const isIdcard =true;
const iscupon =true;

let discount = 0;
if(age<=10){
    discount =100;
}else if(age>=60 && isIdcard && iscupon){
    discount = 75;
}else if(age>= 60 && isIdcard){
    discount  =50;

}else if(isIdcard){
    discount = 25;
}else{
    discount =0;
}

console.log("discount", discount+"%")

