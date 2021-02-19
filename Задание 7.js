/* Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. */

let arr = ['super', 12, 0, 9, 43, 44, 35, null, 'proper', 96, 72, 14];

let countEven = 0;
let countOdd = 0;
let countZero = 0;

for (let i = 0; i < arr.length; i++) {
    if (!(isNaN(arr[i])) && typeof arr[i] == 'number') {
        if (arr[i] % 2 === 0) {
            if (arr[i] === 0) {
                countZero++;
            } else {
                countEven++;
            }
        } else {
            countOdd++;
        }
    }
}

console.log(`Четных элементов в массиве: ${countEven}`);
console.log(`Нечетных элементов в массиве: ${countOdd}`);
console.log(`Нулей в массиве: ${countZero}`);
