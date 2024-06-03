// var car = new Vehicle("Honda", "white", "2010", "UK");
// console.log(car);

// function Vehicle(model, color, year, country) {
//   this.model = model;
//   this.color = color;
//   this.year = year;
//   this.country = country;
// }

// function foo() {
//    let x = (y = 0);
//    x++;
//    y++;
//    return x;
//  }
 
//  console.log(foo(), typeof x, typeof y);

// function main() {
//    console.log("A");
//    setTimeout(function print() {
//      console.log("B");
//    }, 0);
//    console.log("C");
//  }
//  main();
                  //  Check for Palindrome
// function isPalindrome(str) {
//    const reversed = str.split('').reverse().join('');
//    return str === reversed;
//  }
 
//  // Example usage
//  console.log(isPalindrome("abccba")); // true
//  console.log(isPalindrome("mansiisnam")); // fa

// function isPalindrome(str) {
//    return str.split('').every((char, index) => {
//      return char === str[str.length - index - 1];
//    });
//  }
 
//  // Example usage
//  console.log(isPalindrome("abccba")); // true
//  console.log(isPalindrome("mansiverma")); // false
 
// function reverseString(str) {
//    return str.split('').reverse().join('');
//  }
 
//  // Example usage
//  console.log(reverseString("mansi")); // "olleh"



// function arrayString(str) {
//    const substrings = [];
//    for (let i = 0; i < str.length; i++) {
//        for (let j = i + 1; j <= str.length; j++) {
//            substrings.push(str.substring(i, j));
//        }
//    }
//    return substrings;
// }

// // const data = "dog";
// const result = arrayString("dog");
// console.log(result);


// function fizzBuzz() {
//    for (let i = 1; i <= 100; i++) {
//      if (i % 5 === 0 && i % 10 === 0) {
//        console.log("FizzBuzz");
//      } else if (i % 5 === 0) {
//        console.log("Fizz");
//      } else if (i % 10 === 0) {
//        console.log("Buzz");
//      } else {
//        console.log(i);
//      }
//    }
//  }
 
//  // Example usage
//  fizzBuzz();

// function fizzbuzz(){
//    for(let i = 1 ; i <= 100 ; i++){
//       if(i % 2=== 0 && i % 4 === 0){
//          console.log("fizzbuzz")
//       }else if(i%2===0)
//          {
//             console.log("fizz")
//          }else if(i%4===0){
//             console.log("buzz")
//          }else{
//             console.log(i)
//          }
//    }
// }
// fizzbuzz()

// function findLargest(arr) {
//    return Math.max(...arr);
//  }
 
//  // Example usage
//  console.log(findLargest([111,22,5556,87,896765,445353,4346578,34243234,554778])); // 5

function fibonacci(n) {
   if (n <= 1) return n;
   return fibonacci(n - 1) + fibonacci(n - 2);
 }
 
 // Example usage
 console.log(fibonacci(6)); 
 

