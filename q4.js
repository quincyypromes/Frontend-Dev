let marks = [78, 85, 92, 88, 80];

let sumMarks = 0;
let isAnySubjectFail = false;

for (let i = 0; i < marks.length; i++) {
  sumMarks += marks[i];
  if (marks[i] < 35) {
    isAnySubjectFail = true;
  }
}

let averageMarks = sumMarks / marks.length;
let percentage = averageMarks;

console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

if (isAnySubjectFail) {
  console.log("Result: Detained (one or more subjects below 35)");
} else {
  if (percentage >= 85) {
    console.log("Result: Promoted with Distinction");
  } else if (percentage >= 50 && percentage <= 84) {
    console.log("Result: Promoted");
  } else {
    console.log("Result: Detained");
  }
}
