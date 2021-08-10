module.exports = function reverse (n) {
    let plusN = Math.abs(n);
let result = plusN.toString().split('').reverse().join('');
return result;
};