/*Project Euler Class File */
/*Contains methods for project euler problems */

function ProjectEuler() {
    //instantiate problem 1 as a method
    //arg1 is the ceiling. In other words the number you want to look up to.
    //arg2 is the first multiple you want to look for
    //arg3 is the second multiple you want to look for
    //this method will return the sum of all the multiples
    this.problem1 = function problem1(arg1,arg2,arg3) {
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
    }
    //arg2: param
    this.problem2 = function problem2(arg1, arg2) {
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
    }



 
}



