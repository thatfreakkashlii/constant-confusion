const repositoryRootPath = path.resolve(__dirname, '..');
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const arrayContains = (arr, element) => arr.includes(element);