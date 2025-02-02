// Creating the student object
const student = {
  name: "Alice"
};

// Function to get all the keys of an object
function getKeys(obj) {
  if (Object.keys(obj).length === 0) {
    return "No keys found"; // Handle empty objects
  }
  return Object.keys(obj);
}

// Testing the function with different objects
console.log(getKeys(student)); // Output: ["name"]
console.log(getKeys({ age: 25, city: "New York" })); // Output: ["age", "city"]
console.log(getKeys({})); // Output: "No keys found"
