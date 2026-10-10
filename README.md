# LUCIDCRYPT
_A very simple to use text encryption tool_

# Installation
`npm install lucidcrypt`

# Usage
_First import Lucid_

```javascript
import Lucidcrypt from "lucidcrypt.js"
```

_Lucid is a fuction that returns an object of properties._

_1. Encrypt_
_To encrypt a text you need to call the function chained by the property i.e ".encrypt"_

```javascript
const encrypted = Lucycrypt.encrypt("hello"); // !@!g-1-47d%-g7c
```

_The encrypt property/method accepts a parameter type of string(The text you want to encrypt)_

_2. Decrypt_
_To decrypt an encrypted text you need to call the function chained by the property i.e ".decrypt"_

```javascript
const encrypted = Lucidcrypt.decrypt("4c#1$#*@b-1a-&77$-%@ag-@6$-a1584%") // lucidchat is good easy and simple
```

_The decrypt property/method accepts a parameter type of string(The encrypted text you want to decrypt)_

# Modification
_You can modify the dictionary to your preference. It is recommended to tweak it your own way which is very unique. To avoid future errors in your application or with your customers, It is reasonable to change it once which is before production_

_4. Compose_
_Add new unique keys to the dictionary_

```javascript
 Lucidcrypt.compose({
    '.': "/",
    "/": ">"
});
```

_NOTE: Keys and Values must be unique else throws an error. You can add multiple at once_


_4. Clear_
_Wipe out the dictionary. This is when you want to clear the dictionary and set a new one._

```javascript
 Lucidcrypt.clear();
```

_NOTE: In other to create a new set of dictionary, you must clear the existing or default and use_ ```Lucidcrypt.compose({..})``` _to create a new set_

