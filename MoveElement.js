const array=[1,2,33,88,45,5,25]
function MoveArrayElement(array,element,position) {
    const index=array.indexOf(element)
    console.log(index)
    array.splice(index,1)
    array.splice(position,0,element);
    return array
}
console.log(MoveArrayElement(array,33,0))