const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach((item) => {
    if (item.profession === "developer") {
      console.log(item.name);
    }
  });
}

// 2. Add Data
function addData() {
  // getting data from user using prompt
  const name = prompt("Name:");
  const age = parseInt(prompt("Age:"));
  const profession = prompt("Profession:");

  // Add new data to data array
  data.push({ name, age, profession });
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  // filter out admins
  const filteredData = data.filter((item) => item.profession !== "admin");
  console.log(filteredData);
}

// 4. Concatenate Array
function concatenateArray() {
  const newData = [
    { name: "jane", age: 27, profession: "admin" },
    { name: "doe", age: 30, profession: "tester" },
  ];

  // concatenate data and newData
  const concatedData = [...data, ...newData];
  console.log(concatedData);
}

// 5. Average Age
function averageAge() {
  // get total age
  const totalAge = data.reduce((acc, item) => acc + item.age, 0);
  // get average age
  const average = totalAge / data.length;
  console.log(average);
}

// 6. Age Check
function checkAgeAbove25() {
  // filter out data with age above 25
  const filteredData = data.filter((item) => item.age > 25);
  console.log(filteredData);
}

// 7. Unique Professions
function uniqueProfessions() {
  // get all professions
  const professions = data.map((item) => item.profession);
  // get unique professions
  const uniqueProfessions = [...new Set(professions)];
  console.log(uniqueProfessions);
}

// 8. Sort by Age
function sortByAge() {
  // sort data by age
  const sortedData = data.sort((a, b) => a.age - b.age);
  console.log(sortedData);
}

// 9. Update Profession
function updateJohnsProfession() {
  // find john's data
  const john = data.find((item) => item.name === "john");
  // update john's profession
  john.profession = "manager";
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  // get all professions
  const professions = data.map((item) => item.profession);
  // get unique professions
  const uniqueProfessions = [...new Set(professions)];
  // get total professions
  const totalProfessions = uniqueProfessions.length;
  console.log(totalProfessions);
}
