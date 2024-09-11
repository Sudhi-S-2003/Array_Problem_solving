const arrayobj = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
  ];
  
  const result1 = arrayobj.map((obj) => {
    return Object.entries(obj).map(([key, value]) => {
      return `${key} is ${value}`;
    });
  });
    
  const result2 = arrayobj.flatMap((obj) => {
    return Object.entries(obj).map(([key, value]) => {
      return `${key} is ${value}`;
    });
  });
  // Get the table headers dynamically from the keys of the first object
  const headers = arrayobj.length > 0 ? Object.keys(arrayobj[0]) : [];

  
  console.log(headers);
  