const merge = [...new Set(a.concat(b))];
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const updated = numbers.filter(element => element > 6);