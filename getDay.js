console.log( "A" - "B" + "2");
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const reversedString = str => str.split('').reverse().join('');