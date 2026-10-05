import Lucidcrypt from "../lucid.js";

const message = "This message will be encrypted. You can edit the keywords mapping in dictionary.js"
const hidden = "4c#1$#*@b-1a-&77$-%@ag-@6$-a1584%"

const encrypt = Lucidcrypt.encrypt(message); // b*1a-5%aa@&%-e144-!%-%6#0g8b%$-g7c-#@6-%$1b-b*%-3%ge70$a-5@8816&-16-$1#b176@0g2a
const decrypt = Lucidcrypt.decrypt(hidden); // b*1a-5%aa@&%-e144-!%-%6#0g8b%$-g7c-#@6-%$1b-b*%-3%ge70$a-5@8816&-16-$1#b176@0g2a

console.log(encrypt)
console.log(decrypt)