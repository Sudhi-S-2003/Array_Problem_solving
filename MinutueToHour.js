const min=1223
function MinitueToHour(min) {
    let h = Math.floor(min / 60);
    let m = min % 60;
    return `${h} hour and ${m} minutues`
}
console.log(MinitueToHour(min))