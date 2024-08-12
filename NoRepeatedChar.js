const string="gfgjnmnmhni"
function NoReapeatedCharater(string) {
    for (let index = 0; index < string.length; index++) {
        let bool=false;
        for (let index2 = index+1; index2 < string.length; index2++) {
            if (string[index] === string[index2]) {
                bool=true;
     }   
      
    }
    if(bol==false){
        return string[index]
     }   

}
}

console.log(NoReapeatedCharater(string))