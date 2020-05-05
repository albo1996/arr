/* Задание 1 */
let arr1 = [];
let i = 1;
while (i<=100) {
    arr1.push(i);
    i++;
}
function s(arr) {
    let j, temp;
    let i = arr.length - 1;
	while(i > 0){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
        arr[i] = temp;
        i--;
	}
	return arr;
}
s(arr1);
console.log(arr1);

/*Задание 2 */
let arr2 = arr1.map(function(n) {
    return n;
}
)
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
arr3.forEach(function(n) {
    sum += n;
}
)
let am = sum / arr3.length; //Среднее арифметическое.
console.log(am);