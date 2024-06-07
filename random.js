const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const stringReverse = str => str.split("").reverse().join("");