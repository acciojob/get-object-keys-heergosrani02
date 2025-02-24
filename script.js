//your JS code here. If required.
const myObj = {
  name: "John",
  age: 30,
  city: "New York"
};

function getKeys(myObj) {
  return Object.keys(myObj);
}

console.log(getKeys(myObj));