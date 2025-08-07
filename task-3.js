var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var str ='';
for(let i of numbers){
    str += i;
}
console.log(str);



// Another short way
var joinArray = numbers.join('');
// console.log(joinArray);