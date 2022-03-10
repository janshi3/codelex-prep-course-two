/**
 * Fizz Buzz
 *
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * Example:
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

function fizzBuzz(n: number): void {
    for (let i = 1; i <= n; i++) {

        // If multiple of 5 and 3, fizzbuzz
        if (i % 5 == 0 && i % 3 == 0){
            console.log(`fizzbuzz`);
            continue;
        }

        // If multiple of 5, buzz
        if(i % 5 == 0){
            console.log(`buzz`);
            continue;
        }

        // If multiple of 3, fizz
        if(i % 3 == 0){
            console.log(`fizz`);
            continue;
        }

        // If no fizzbuzz, just number
        console.log(i);   
    }
}

export { fizzBuzz };
