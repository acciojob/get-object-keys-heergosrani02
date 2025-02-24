//your JS code here. If required.
const myObj = {
  name: "John",
  age: 30,
  city: "New York"
};

function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys(myObj));