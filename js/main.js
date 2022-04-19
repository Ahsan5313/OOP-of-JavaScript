

// Sum all prime numbers up to and including the provided number

function primeSum(num){

    let totalPrime = 0;

    for(let i = 2; i < num; i++){

        for(let j = 2; j < num ; j++){

             if(i === j){

                totalPrime += i
             }

             if(i % j === 0){
                break

             }
        }

    }

    return totalPrime;
}

console.log(primeSum(10));
console.log(primeSum(101));
console.log(primeSum(1010));
console.log(primeSum(10101));