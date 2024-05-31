console.log(+"1" +  "1" + "2");
const isWeekday = (date) => date.getDay() % 6 !== 0;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;