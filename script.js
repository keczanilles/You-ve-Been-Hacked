// restore the html button in the variable "numberInput" to have the placeholder
// "possible number"
console.dir(numberInput);
numberInput.placeholder = "possible number";



// restore the html element in the variable "calculateHighestSalaries" to have the button text
// "Calculate highest salary"
console.dir(calculateHighestSalaries);
calculateHighestSalaries.lastElementChild.previousElementSibling.children[0].innerHTML = "Calculate highest salary";



// change the salaries which have the value "-999999" to "12823" by accessing the html element
// in the variable "salaryList"
console.dir(salaryList);
for (let i = 0; i < salaryList.children.length; i++){
  if (salaryList.children[i].children[1].innerHTML == "-999999" ){
    salaryList.children[i].children[1].innerHTML = "12823";
  }
}


// restore the html element in the variable "employeeList" to have the button with the text
// "Find all matching inputs" and "btn-primary" bootstrap design.
console.dir(employeeList);
employeeList.lastElementChild.previousElementSibling.children[0].innerHTML = "Find all matching inputs";
employeeList.lastElementChild.previousElementSibling.children[0].style.background = '';
employeeList.lastElementChild.previousElementSibling.children[0].style.color = '';




// restore the html element in the variable "employeeList" to contain employee names from
// originalEmployeeData.
console.dir(employeeList);
let originalEmployeeData = [
  "John Smith",
  "Phyllis Duncan",
  "Alexandra Cummings",
  "Ruth Martin",
  "Charissa Kinney",
  "Jared Noel",
  "Mark Osborne",
  "Andrew Johnson",
  "Macy Massey",
  "David Mcdonald",
];

for (let i = 0; i < employeeList.firstElementChild.children.length; i++){
  employeeList.firstElementChild.children[i].innerHTML = originalEmployeeData[i];
}



// restore the html element in the variable "salariesInput" to have the original html code
// contained in the div with the id "employeeList" from "index.html".
// After restoring the button with the text "Sum salaries" restore it's click functionality
// to execute the function "sumSalaries".
console.dir(salariesInput);
function sumSalaries() {
  let sum = 0;

  for (let i = 1; i <= 5; i++) {
    let salary = document.ElementById("number-" + i).value;

    sum = sum + parseInt(salary);
  }

  document.ElementById("number-sum").innerText = sum;
}
