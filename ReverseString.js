let string="rebl";
function Reverse(string){
    let arr=string.split('');
    let reversedString='';
    arr.forEach(element => {
        reversedString=element+reversedString;
    });
    return reversedString;

}
console.log(Reverse(string))