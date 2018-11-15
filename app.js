const bcrypt = require("bcrypt");
const saltRounds = 10;

const plainPassword1 = "HelloWorld";

const plainPassword2 = "helloworld";

const salt = bcrypt.genSaltSync(saltRounds);
//saltRounds can be 10
const hash1 = bcrypt.hashSync(plainPassword1, salt);
const hash2 = bcrypt.hashSync(plainPassword2, salt);
console.log('-------------------------');
// the bcrypt.hashSync() function receives 2 parameters
//password we're going to encrypt
//and a variable called saltRounds.
// saltRounds specifies the cost of execution to the algorithm. can make the algorithm slower, prevent brute force attacks.
// also says how many times to execute the internal hash function.
//random hash return broken down.
//B-ID B-Salt 128-bit-salt      184-bit-hash

//this is synchronous way to set up the salt and hash.
// also:  asynchronous way and promises

console.log("Hash 1 -", hash1);
console.log("Hash 2 -", hash2);
console.log('---------d00000000000000---------');
// CLASS NOTES
// bcrypt 1) first create a single salt.
// const salt = 
// when you log in later, system uses salt to create a random phrase.
//
// more salt saltRounds, more complex it'll be.
// salt is how long it takes a computer to match what is entered in a hash.
