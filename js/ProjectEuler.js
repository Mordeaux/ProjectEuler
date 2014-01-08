/*Project Euler Class File */
/*Contains methods for project euler problems */

function ProjectEuler() {
    var self = this;
}

//instantiate problem 1 as a method
//arg1 is the ceiling. In other words the number you want to look up to.
//arg2 is the first multiple you want to look for
//arg3 is the second multiple you want to look for
//this method will return the sum of all the multiples
ProjectEuler.prototype = {

    problem1: function (arg1, arg2, arg3) {
        var sum = 0;
        var i = 0;
        //loop through all integers up to arg1 which is the ceiling
        for (i; i < arg1; i++) {
            //check if it is a multiple of arg2 OR arg3
            if (i % arg2 === 0 || i % arg3 === 0) {
                //if it is add it to the sum
                sum += i;
            }
        }

        return sum;
    },

    //arg2: param
    problem2: function (arg1, arg2) {
        var sum = 0;
        if (arg2 === "even") {
            sum += 2;
        }
        else if (arg2 === "odd") {
            sum += 1;
        }
        //if no second paramater is supplied then set to all
        else if (typeof arg2 !== "undefined" || arg2 === "all") {
            sum += 0
        }
        else {
            return false;
        }

        this.fibonacci = function fibonacci(x, y) {
            var third = x + y;
            if (third < arg1) {
                fibonacci(y, third);
                //check if number is even then add to sum if it is
                if (third % 2 === 0 && arg2 == "even") {
                    sum += third;
                }
                else if (third % 2 !== 0 && arg2 == "odd") {

                    sum += third;
                }
                else if (arg2 == "all") {
                    sum += third;
                }

            }

        }

        this.fibonacci(1, 2)
        return sum;
    },


    isPrime: function (arg1) {
        //return true if arg1 is prime
        var i = 5;
        var w = 2;
        //if arg1 is 2 or 3 then it is prime
        if (arg1 === 2 || arg1 === 3) {
            return true;
        }
        //if arg1 is divisible by 2 or 3 the it is not prime
        if (arg1 % 2 === 0 || arg1 % 3 === 0) {
            return false
        }

        //while i^2 is less then or equal to arg1
        while (i * i <= arg1) {

            //if arg1 is divisible by i then it is not prime
            if (arg1 % i === 0) {
                return false
            }

            i += w;
            w = 6 - w;
        }


        return true;

    },


    //find the largest prime factor of a number
    problem3: function (arg1) {
        var max;
        if (Math.sqrt(arg1) <= 6) {
            max = arg1;
        }
        else {
            max = Math.sqrt(arg1);
        };
        var i = 1;
        var oldresult = 0;
        var result;
        for (i; i < max; i++) {
            if (arg1 % i === 0) {
                if (this.isPrime(i) === true) {
                    result = this.getLargestInt(i, oldresult);
                }
                oldresult = result;
            }
        }
        if (result === 1) {
            return "The integer you entered is prime and has no divisors";
        }
        return result
    },
    //find the largest palindrome product of two n-digit numbers
    //arg1 can not be larger then 6.
    problem4: function (arg1) {
        //if not an integer <= 6
        if (!(arg1 <= 6)) {
            return "Please enter an integer less then 7";
        }
        else {
            //find the largest number and go down. ie:99,999,9999
            var max = Math.pow(10, arg1) - 1;
            var i = max;
            var dig1 = max;
            var dig2 = max;
            var prod = 0;
            //loop down from first digit
            for (dig1; dig1 > 0; dig1--) {
                //loop down from second digit in a nested loop
                for (dig2; dig2 > 0; dig2--) {
                    //check if product of dig1*dig2 is a palindrome
                    if (this.isPalindrome(dig1 * dig2)) {
                        //return palindrome and the the two numbers
                        return dig1 * dig2 + " = " + dig1 + " * " + dig2
                    }
                }
            }
        }
        //something went wrong if it made it here
        return false
    },

    //compares two digits and returns the highest
    getLargestInt: function (arg1, arg2) {
        var largestint = arg2;
        if (arg1 > arg2) {
            largestint = arg1;
        }

        return largestint;
    },

    isPalindrome: function (arg1) {
        var reverse = 0;
        var num = arg1;
        var removelastdig = num;

        while (num > 0) {
            reverse = reverse * 10 + (num % 10);
            removelastdig = Math.floor(num / 10);
            num = removelastdig;
        }

        if (reverse === arg1) {
            return true;
        }
        else {
            return false;
        }

    },
    problem5: function (arg1) {

    },
    problem6: function () {
        var sumofsquares = 0;
        var squareofsums = 0;
        var i = 0;
        for (i; i <= 10; i++) {
            sumofsquares += Math.pow(i, 2);
            squareofsums += i;
        }
        squareofsums = squareofsums * squareofsums

        return squareofsums - sumofsquares;
    }

};
