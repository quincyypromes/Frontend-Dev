let userName2 = "Ayush";
let age = 21;
let isActive = true;
let hobbies = ["coding", "music", "gaming"];
let profile = { city: "Mathura", college: "GLA" };
let emptyValue = null;
let notAssigned;

let dataSummary = [
  { label: "userName", value: userName2, type: typeof userName2 },
  { label: "age", value: age, type: typeof age },
  { label: "isActive", value: isActive, type: typeof isActive },
  { label: "hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { label: "profile", value: profile, type: typeof profile },
  { label: "emptyValue", value: emptyValue, type: emptyValue === null ? "null" : typeof emptyValue },
  { label: "notAssigned", value: notAssigned, type: typeof notAssigned }
];

console.table(dataSummary);
