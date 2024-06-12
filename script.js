let attempts = 3;
let secretNumber = Math.floor(Math.random() * 10) +1;
console.log(secretNumber);

let number = Number(prompt("Я загадал число от 1 до 10. Попробуй угадать. У тебя " + attempts +" попытки"));

while (attempts > 1) {
    if (number < secretNumber) {
        attempts = attempts - 1;
        number = Number(prompt("Неа, я загадал больше. Осталось " + attempts));
    } else if (number === secretNumber) {
        alert("Ты угадал!")
        break;
    }
    else {
        attempts = attempts - 1;
        number = Number(prompt("Неа, я загадал меньше. Осталось " + attempts));
    }
}