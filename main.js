//1 задание
for(let line = '*'; line.length <= 7; line += '*'){
    console.log(line);
}

//2 задание
for(let num = 1; num <= 100; num ++){
    if(num % 3 === 0 && num % 5 ){
        console.log('FizzBuzz');
    } 
    else if(num % 3 === 0){
        console.log('Fizz');
    }
    else if(num % 5 === 0){
        console.log('Buzz');
    } 
    else console.log(num);
}

//3 задание 
const size = 8; 
let board = ''; 

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      board += ' '; 
    } else {
      board += '#';
    }
  }
  board += '\n';
}
console.log(board);
    


//Доп задания
const array = ['Алекс', 'Анна', 'Олег', 1, 2, 3];
const arrayString = JSON.stringify(array);

console.log(arrayString);

//2

let numb = 1;
for (let i = 1; i <= 7; i++) {
  numb *= i;
}
console.log(numb);


