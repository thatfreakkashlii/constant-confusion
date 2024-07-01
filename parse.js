const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;