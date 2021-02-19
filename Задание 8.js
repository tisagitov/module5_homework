/* Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки. */

let countriesAndCapitals = new Map([
    ['Russia', 'Moscow'],
    ['United Kingdom', 'London'],
    ['China', 'Beijing'],
    ['Panem', 'The Capitol']
]);

for (let items of countriesAndCapitals) {
    console.log(`Ключ — ${items[0]}, значение — ${items[1]}`);
}