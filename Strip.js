const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const merge = (a, b) => a.concat(b);
const repositoryRootPath = path.resolve(__dirname, '..');