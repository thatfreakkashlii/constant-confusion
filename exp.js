const scriptRootPath = path.join(repositoryRootPath, 'script');
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const stringReverse = str => str.split("").reverse().join("");
const fullName = name || 'buddy';