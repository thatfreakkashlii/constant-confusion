var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const arrayContains = (arr, element) => arr.includes(element);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');