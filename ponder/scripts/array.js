
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}


// arrays
let names = ["Bob","Joe","Steve","Jake"];
console.log(names[2]);

let numbers = [1,2,3,4,5]
console.log(numbers);
console.log(numbers[1] + numbers[2]);

// objects

let student = {
    name:"Bob",
    class:["This","That"],
    grade:[70,85]
}

console.log(student.name);


// array methods
names.forEach((name) => {
    console.log(name)
});

let newNames = names.map((name) => {
    return name + " Jones"
});

console.log(newNames);

let filterNames = names.filter((name) => {
    return name[0] === "J";
});

console.log(filterNames)




// Do this:

// .reduce()
// The .reduce() method creates a new array filled with elements that pass a test provided by a function.

                            
// const numbers = [125, 20, 5];

// document.getElementById("output").innerHTML = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total - num;
// }
                        
                    
// .indexOf()
// The .indexOf() method returns the first index position of a specified value.

                            
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");