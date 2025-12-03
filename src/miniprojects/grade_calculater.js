// Basic Grade Calculator

function calculateGrade(marks) {
  let grade;

  if (marks >= 90) {
    grade = "A";
  } else if (marks >= 80) {
    grade = "B";
  } else if (marks >= 70) {
    grade = "C";
  } else if (marks >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  return grade;
}

// Change the marks here
let marks = 85;

console.log("Marks:", marks);
console.log("Grade:", calculateGrade(marks));