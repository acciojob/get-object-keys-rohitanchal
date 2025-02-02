// Creating the student object
const student = {
  name: "Alice"
};

// Function to get all the keys of an object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Expected Output: ["name"]

// Additional Test Case
const myObj = { name: "John", age: 30, city: "New York" };
console.log(getKeys(myObj)); // Expected Output: ["name", "age", "city"]
