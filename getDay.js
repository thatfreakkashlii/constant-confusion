const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};