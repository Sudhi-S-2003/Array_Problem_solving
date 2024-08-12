
function GeneratePassword(limit) {
    let password = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   
    for (let i = 0; i< limit; i++) {
        let index= Math.floor(Math.random() * characters.length) + 1;
        password+=characters[index]
    }
    return password

    // console.log(index)
};

console.log(GeneratePassword(5))