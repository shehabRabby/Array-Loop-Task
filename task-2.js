const numbers = [12, 98, 5, 41, 23, 78, 46];
let even = [];
for(let i of numbers){
    if(i % 2 === 0){
      even.push(i);
    }
}
console.log(even);