const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const isWeekday = (date) => date.getDay() % 6 !== 0;
const arrayContains = (arr, element) => arr.includes(element);