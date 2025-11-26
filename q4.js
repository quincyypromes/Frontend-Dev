let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

let passedStudents = scores.filter(score => score >= 50).length;

let statusList = scores.map(score => (score >= 50 ? "Pass" : "Fail"));

let summary = `
Scores: ${scores.join(", ")}
Status: ${statusList.join(", ")}
Highest: ${highest}
Lowest: ${lowest}
Average: ${average.toFixed(2)}
Students Passed (>= 50): ${passedStudents}
`;

console.log(summary);
