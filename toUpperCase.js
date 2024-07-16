const merge = [...new Set(a.concat(b))];
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const appName = getAppName(channel);