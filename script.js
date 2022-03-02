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

salariesInput.firstElementChild.innerHTML =   `<div className="p-3">
  <input type="number" id="number-1" placeholder="salary 1" className="form-control" value="0">
  </div>
  <div className="p-3">
  <input type="number" id="number-2" placeholder="salary 2" className="form-control" value="0"></div>
  <div className="p-3">
  <input type="number" id="number-3" placeholder="salary 3" className="form-control" value="0"></div>
  <div className="p-3">
  <input type="number" id="number-4" placeholder="salary 4" className="form-control" value="0"></div>
  <div className="p-3">
  <input type="number" id="number-5" placeholder="salary 5" className="form-control" value="0"></div>
  <div className="p-3">
  <button id="compute-number-sum" className="btn btn-primary" onclick="sumSalaries()">
    Sum salaries
   </button>
  </div>
            <div class="p-3" id="number-sum"></div>
        </div>`;

console.log(salariesInput.firstElementChild.children[5].children[0]);

function sumSalaries() {
  let sum = 0;
  console.log(sum);
  for (let i = 0; i < 5; i++) {
    let salary = parseInt(salariesInput.firstElementChild.children[i].children[0].value);
    sum = sum + salary;
  }
  salariesInput.firstElementChild.children[6].innerHTML = sum;
}


