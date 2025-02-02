// Creating the student object
const student = {
  name: "Alice"
};

// Function to get all the keys of an object
function getKeys(obj) {
  return Object.keys(obj);
}

// Export the function so Cypress can access it
if (typeof window !== "undefined") {
  window.getKeys = getKeys;
}

// Testing the function
console.log(getKeys(student)); // Expected Output: ["name"]

// Additional test case
const myObj = { name: "John", age: 30, city: "New York" };
console.log(getKeys(myObj)); // Expected Output: ["name", "age", "city"]
