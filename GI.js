function min(x, y) {
  return x - y;
}

console.log(min(10, 5));

/////////////////////////////// EASY  ///////////////////////
let students = [
  { lastName: "Rice", firstName: "Nicholas", age: 23 },
  { lastName: "King", firstName: "Jordan", age: 15 },
  { lastName: "Gates", firstName: "Jasmine", age: 37 },
];

console.log(
  `Hello, my name is ${students[1].firstName} ${students[1].lastName} and I'm ${students[1].age} years old.`
);

////////////////////////////////  MEDIUM  ////////////////////
function monthOutput(x) {
  if (x <= 12 && x > 0) {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    console.log(months[x - 1]);
  } else {
    alert("Invalid number");
  }
}

monthOutput(1);

/////////////////////////  HARD  //////////////////////////////
let tomHeight = 9;
let tomMass = 8;
let jerryHeight = 10;
let jerryMass = 45;

let tomBMI = tomMass / (tomHeight * tomHeight);
let jerryBMI = jerryMass / (jerryHeight * jerryHeight);

if (tomBMI > jerryBMI) {
  isHigher = true;
} else {
  isHigher = false;
}

console.log("Is tom's BMI higher than Jerry's?", isHigher);
