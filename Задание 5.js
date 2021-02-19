// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

let randomArr = [4, 98, null, 'chetyre', 55, undefined];
console.log(`Количество элементов в массиве: ${randomArr.length}`);
for (let i = 0; i < randomArr.length; i++) {
  console.log(randomArr[i])
}