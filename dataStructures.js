// level {1/2/3}
// Answer level 2

//1
const inputArray = [1, 3, 4, 6, 7, 8];

const RemoveEven = (arr) => {
    return arr.filter(item => item % 2 !== 0);
};

console.log(RemoveEven([1, 3, 4, 6, 7, 8]));

//2
const ovels = ['a','e','i','o','u','A','E','I','O','U'];
let inputString = 'Elie';
let outputArray = inputString.split('').map(item=>{
    return ovels.includes(item) ? (item.toUpperCase()) : item;
})
console.log(outputArray.toString().replace(/,/g, ''));

//3
const arr =  [1, 3, 4, 6, 7, 8, 2, 5];
console.log(Math.max(...arr))