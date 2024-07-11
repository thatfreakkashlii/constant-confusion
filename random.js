const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;