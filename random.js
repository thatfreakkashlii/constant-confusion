const timeFromDate = date => date.toTimeString().slice(0, 8);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};