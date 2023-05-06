// Given an array of strings, use a function to reverse 
// all the elements in the string in ascending order and 
// // the specific elements in descending order
function elenment(arr,num){
arr.sort();
for (let i = 0; i < num.length; i++) {
   let number = num[i];
    if (number < arr.length) {
      arr[number] = arr[number].split("").reverse().join("");
    }
  }

  return arr;
}
let arr = ["berry", "banana", "mangoes", "sweetpotetoes"];
let num = [0, 3];
let reversedArr =elenment(arr, num);
console.log(reversedArr);




// Given an array of objects, each object representing a person with 
// a name and age property, write a function 
// that returns the sum of all people who
//  are less than 18 years.
// const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ];
function arrayObjects(people) {
    let sum = 0;
    for (let i = 0; i < people.length; i++) {
      if (people[i].age < 18) {
        sum += people[i].age;
      }
    }
    return sum;
  }
  const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
  
  let ages = arrayObjects(people);
  console.log(ages);

// // Using JS functions and an array of numbers, 
// return positive if an element within the array is positive,\
//  negative if an element is negative, else zero
function arryNumber(number){
    Positive=true;
    Negative=false;
    for (let i = 0; i < number.length; i++) {
        if (number[i] > 0) {
          Positive = true;
        } else if (number[i] < 0) {
          Negative = true;
        }
      }
    
      if (Positive && !Negative) {
        return 'positive';
      } else if (!Positive && Negative) {
        return 'negative';
      } else {
        return 'zero';
      }
    }





// // Given an array of objects,
//  where each object represents an employee 
//  with an id, name, and salary property, write a 
//  function that returns a new array of employee objects 
// sorted by their salary in ascending order
let  employees = [
    { name: 'Ann', salary: 40469721,   id:17 },
    { name: 'Anyamgo', salary: 125600,id:16 },
    { name: 'Christine', salary: 786500,  id:12 },
    { name: 'joy', salary: 867540,  id:12 },
  ];
  function employeeSalary(employees) {
    return employees.sort((a, b) => a.salary - b.salary);
  }
  let  sortedEmployees = employeeSalary(employees);
  console.log(sortedEmployees);
 
