//your JS code here. If required.
const student = {
    name: "John"
};

const myObj = {
	name: "Jhon",
	age: 30,
	city: "New York"
}

function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys(myObj));
console.log(getKeys(student));
