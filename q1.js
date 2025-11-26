let bonus = 5000;
let isPermanent = false;

function calculateSalary() {
  let salary = 40000;
  let isPermanent = true;
  let totalSalary = salary;
  if (isPermanent) {
    totalSalary += bonus;
  }
  console.log(`Inside function - isPermanent: ${isPermanent}, Total Salary: ${totalSalary}`);
}

console.log(`Global isPermanent before: ${isPermanent}`);
calculateSalary();
console.log(`Global isPermanent after: ${isPermanent}`);
