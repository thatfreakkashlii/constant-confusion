const getRandomBoolean = () => Math.random() >= 0.5;
console.log(false == '0');
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;