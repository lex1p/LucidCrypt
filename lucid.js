import { dictionary } from "./dictionary.js"

const msg = 'How are you doing';




class Lucid{
     
    constructor(){
        this.keywords = dictionary;
        this.reverse = Object.fromEntries(
            Object.entries(this.keywords).map(([k, v]) => [v, k])
        );
    }


    /**
 * Registers new character-to-symbol mappings into the dictionary.
 *
 * Each entry in `obj` is validated against the existing `keywords` array
 * before being added. If any incoming `value` already exists in the
 * dictionary, the operation is aborted and nothing is added (all-or-nothing).
 *
 * @param {Object.<string, string>} [obj={}] - A flat object of `{ char: symbol }`
 *   pairs to add to the dictionary. Keys are the plaintext characters,
 *   values are their encoded symbols.
 *
 * @returns {void} Nothing is returned. Conflicts and type errors are
 *   reported via `console.error`.
 *
 * @throws {TypeError} Does not throw — invalid input is caught internally
 *   and logged instead.
 *
 * @example
 * // Add a single mapping
 * Lucidcrypt.compose({ a: 'x7' });
 *
 * @example
 * // Add several mappings at once
 * Lucidcrypt.compose({ b: 'y2', c: 'z9' });
 *
 * @example
 * // Conflict — 'x7' is already registered to another character
 * Lucidcrypt.compose({ d: 'x7' });
 * // → console.error: "{d: x7} Already exist"
 *
 * @example
 * // Invalid input — arrays and null are rejected
 * Lucidcrypt.compose(['a', 'x7']);   // → "type mismatch. Required type: [OBJECT]"
 * Lucidcrypt.compose(null);          // → "type mismatch. Required type: [OBJECT]"
 */
    compose(obj = new Object()){
        if(obj === null || typeof obj !== 'object' || Array.isArray(obj)){
            console.error("type mismatch. Required type: [OBJECT]");
            return
        };
        //Scan the existing dictionary to check if entries already exist
        //required {char: 'symbol'}

        const existingValues = Object.values(this.keywords);

        for (const [key, value] of Object.entries(obj)) {
            if (existingValues.includes(value)) {
                console.error(`A Key with the value: " ${value} " already exist`);
                return;
            }
            this.keywords[key] = value;
        }

    }



    // Returns the dictionary
    dictionary(){
        return this.keywords
    }

    // Clear all the default keywords
    clear(){
        return this.keywords = {}
    }





    /**
         * Encrypts the given text by mapping each character through the dictionary.
         *
         * @param {string} [text=''] - The text to encrypt.
         * @returns {string|undefined} The encrypted string, or undefined if validation fails.
         */


        encrypt (text = ''){
                // Split out the text
                if(!text){
                    console.error("Value missing: @.encrypt(value)");
                    return
                }

                if(typeof(text) !== 'string'){
                    console.error("Invalid type: @.encrypt(string)");
                    return
                }

                const lower = text?.toLowerCase();
                let build = [];
                for (let i=0; i< lower?.length; i++){
                    const letters = lower[i];
                    build.push(this.keywords[letters]);
                }

                return build.join('')
            }
    

    /**
         * Decrypts the given text by mapping each character through the reverse dictionary.
         * Characters not found in the reverse map are left unchanged.
         *
         * @param {string} [text=''] - The text to decrypt.
         * @returns {string|undefined} The decrypted string, or undefined if validation fails.
         */

        decrypt (text = ''){
                if(!text){
                    console.error("Value missing: @.decrypt(value)");
                    return
                }

                if(typeof(text) !== 'string'){
                    console.error("Invalid type: @.decrypt(string)");
                    return
                }
                return [...text.toLowerCase()]
                    .map(ch => this.reverse[ch] ?? ch)
                    .join('')
            }
        };


    const Lucidcrypt = new Lucid();
    
    export default Lucidcrypt


