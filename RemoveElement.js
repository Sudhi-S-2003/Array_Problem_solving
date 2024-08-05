const array=[22,33,55,66]

function removeElementBYIndex(index) {
   array.splice(index, 1);
   return array;
}
console.log(removeElementBYIndex(1))