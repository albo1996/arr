/* Задание 1 */
let arr1 = Array.from({length: 100}, (v, k) => k+1);
arr1.sort(() => Math.random() - 0.5);
console.log(arr1);

/*Задание 2 */
let arr2 = arr1.map(function(n) {
    return n;
})
arr2.reverse();
console.log(arr2);

/*Задание 3 */
let arr3 = arr1.map(function(n, index) {
    let c = n - arr2[index];
    if (c > 0) {return n - arr2[index];}
    else {return arr2[index] - n;} //Если разность отрицательная, меняем местами слогаемые.
});
console.log(arr3);

/*Задание 4 */
let sum = 0;
arr3.forEach((n, y) => sum += n);
let am = sum / arr3.length; //Среднее арифметическое.
console.log(am);
