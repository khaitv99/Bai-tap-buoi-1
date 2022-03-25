var arr = [0, 5, 4, 2, 8];
const sum = (array) => {
    let s = 0;
    for (const item of array) {
        s += item;

    }
 return s;
};
const result = sum (arr);
console.log(`ket qua = ${result}`);

const person = [
    {name: 'John', age: 24},
    {name: 'Pete', age: 25},
    {name: 'Mary', age: 28}
];
console.log(person.map(item => item.name) );


 var arr1 = ['John','Pete','Mary'];
 var arr2 = ['Mary','Henry','Harry'];
for(var i= 0; i<arr2.length; i++){
    if(!arr1.includes(arr2[i])){
        arr1.push(arr2[i])

    }
}
console.log(arr1);
