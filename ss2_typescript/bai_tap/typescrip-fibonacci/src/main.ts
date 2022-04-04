let a = 1, b = 0, temp;

function fibonacci(num: number){

    while (num > 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

console.log(fibonacci(2))