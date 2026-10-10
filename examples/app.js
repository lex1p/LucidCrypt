import Lucidcrypt from "../lucid.js";

const message = "This message will be encrypted. You can edit the keywords mapping in dictionary.js"
const hidden = "b*1a-5%aa@&%-e144-!%-%6#0g8b%$/-g7c-#@6-%$1b-b*%-3%ge70$a-5@8816&-16-$1#b176@0g/2a"



// Encrypt
const encrypt = Lucidcrypt.encrypt(message); // b*1a-5%aa@&%-e144-!%-%6#0g8b%$-g7c-#@6-%$1b-b*%-3%ge70$a-5@8816&-16-$1#b176@0g2a

// Decrypt
const decrypt = Lucidcrypt.decrypt(hidden); // lucidchat is good easy and simple

//Add new pairs to the dictionary
Lucidcrypt.compose({
    '.': "/",
    "/": ">"
});

Lucidcrypt.clear();


//Get all dictionary
const getDictionary = Lucidcrypt.dictionary();

console.log(encrypt);
console.log(decrypt);
console.log(getDictionary);