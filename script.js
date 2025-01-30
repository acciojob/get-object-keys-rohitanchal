// Creating the student object
const student = {
  name: "Alice"
};

// Function to get all the keys of an object
function getKeys(obj) {
  return Object.keys(obj); // Using Object.keys to return the keys as an array
}

// Testing the function by passing the student object
const keys = getKeys(student);
console.log(keys); // Output: ["name"]
