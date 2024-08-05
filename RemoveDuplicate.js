const items=["apple","orange","Apple","banana"]
function RemoveDuplicate(items) {
    const newarray=[]
    items.map((itm)=>{
        if(newarray.includes(itm.toLowerCase())){
            return
        }else{
            newarray.push(itm)
        }

    })
    return newarray
    
}
console.log(RemoveDuplicate(items))
// let uniqueItems = [...new Set(items)]
// console.log(uniqueItems) 