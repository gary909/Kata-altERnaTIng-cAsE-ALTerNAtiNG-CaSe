function assertEquals (str) {
    let newString = "";
    for(let i = 0; i < str.length; i++){
        if (str[i] == str[i].toUpperCase()){
            newString = newString + str[i].toLowerCase();
        } else if (str[i] == str[i].toLowerCase()){
            newString = newString + str[i].toUpperCase();
        }
    }
    return newString;
}

//To pass the codewars kata you must change to 'this':
// String.prototype.toAlternatingCase = function () {
//     let newString = "";
//       for(let i = 0; i < this.length; i++){
//           if (this[i] == this[i].toUpperCase()){
//               newString = newString + this[i].toLowerCase();
//           } else if (this[i] == this[i].toLowerCase()){
//               newString = newString + this[i].toUpperCase();
//           }
//       }
//       return newString;
//   }
  
console.log(assertEquals("hello world")); // Return "HELLO WORLD"
console.log(assertEquals("HELLO WORLD")); // Return "hello world"
console.log(assertEquals("hello WORLD")); // Return "HELLO world"
console.log(assertEquals("12345")); // Return "12345"
console.log(assertEquals("1a2b3c4d5e")); // Return "1A2B3C4D5E"
console.log(assertEquals("String.prototype.toAlternatingCase")); // Return "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
console.log(assertEquals("hello world")); // Return "HELLO WORLD"
