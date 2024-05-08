const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const removeDuplicates = (arr) => [...new Set(arr)];