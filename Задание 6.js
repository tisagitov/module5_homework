/* Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые. */

let falseArr = [9, 9, 24, 59, 59];
let trueArr = ['bulochka', 'bulochka', 'bulochka', 'bulochka', 'bulochka'];

function checkingArray(arr) {
    let checkCounter;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            checkCounter = false;
            break;
        } else {
            checkCounter = true;
        }
    }
    return checkCounter;
}

console.log(checkingArray(trueArr));
console.log(checkingArray(falseArr));