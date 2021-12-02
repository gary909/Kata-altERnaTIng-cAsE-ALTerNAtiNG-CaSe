function assertEquals (strng) {
    return strng;
}

console.log(assertEquals("hello world")); // Return "HELLO WORLD"
console.log(assertEquals("HELLO WORLD")); // Return "hello world"
console.log(assertEquals("hello WORLD")); // Return "HELLO world"
console.log(assertEquals("12345")); // Return "12345"
console.log(assertEquals("1a2b3c4d5e")); // Return "1A2B3C4D5E"
console.log(assertEquals("String.prototype.toAlternatingCase")); // Return "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
console.log(assertEquals("hello world")); // Return "HELLO WORLD"
