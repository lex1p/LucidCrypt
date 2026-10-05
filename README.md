# LUCIDCRYPT
_A very simple to use text encryption tool_

# Installation
`npm install lucidcrypt`

# Usage
_First import Lucid_

```javascript
import Lucidcrypt from "lucid.js"
```

_Lucid is a fuction that returns an object of properties._

_1. Encrypt_
_To encrypt a text you need to call the function chained by the property i.e ".encrypt"_

```javascript
const encrypted = lucycrypt.encrypt("hello"); // !@!g-1-47d%-g7c
```

_The encrypt property accepts a parameter type of string(The text you want to encrypt)_

_2. Decrypt_
_To decrypt an encrypted text you need to call the function chained by the property i.e ".decrypt"_

```javascript
const cipher = Lucid();
const encrypted = cipher..decrypt("!@!g-1-47d%-g7c") // baby i love you 
```

_The decrypt property accepts a parameter type of string(The encrypted text you want to decrypt)_

# Modification
_You can modify the dictionary to your preference. It is recommended to tweak it your own way which is very unique. To avoid future errors in your application or with your customers, It is reasonable to change it once which is before production_



