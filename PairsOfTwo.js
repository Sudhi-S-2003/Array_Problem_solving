const array=[1,2,33,88,45,5,25,50,100,220,3,37,10,12]

function PairOfTwo(array,TargetNumber) {
    const Pairs=[]
    array.forEach(element1 => {
        array.forEach(element2 => {
            if(element1+element2==TargetNumber){
                Pairs.push([element1,element2])
            }
        });
    });
    return Pairs
}
console.log(PairOfTwo(array,55))