const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const shuffledArray = array.sort(() => Math.random() - 0.5); 