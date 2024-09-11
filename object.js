const obj = {
  name: "appu",
  age: 22,
};

const newobj = Object.keys(obj).map((key) => {
  return `${key} is ${obj[key]}`;
});

console.log(newobj);
Object.entries(obj).map(([key, value]) => {
  return `${key} is ${value}`;
});
