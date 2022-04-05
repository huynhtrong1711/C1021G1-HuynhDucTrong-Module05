var sum = 0;
var count = 0;
for (var i = 1; count < 10; i++) {
    sum += fibonacci(i);
    count++;
}
// @ts-ignore
function fibonacci(num) {
    if (num <= 1)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
fibonacci(10);
console.log("Tổng của " + count + " số đầu tiên trong dãy fibonacci này là : " + sum);
