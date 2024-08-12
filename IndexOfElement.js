const array=[33,30,7,'gjh',55]
const element=30;
function IndexOfElementInArray(array,element) {
    for (let index = 0; index < array.length; index++) {
        if(array[index]==element){
            return index;
        }
    };
    return  -1;
}
console.log(IndexOfElementInArray(array,element))