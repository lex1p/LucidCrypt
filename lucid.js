import { dictionary } from "./dictionary.js"

const msg = 'How are you doing';




class Lucid{
    reverse = Object.fromEntries(
        Object.entries(dictionary).map(([k, v]) => [v, k])
    );

    constructor(){
        
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
                build.push(dictionary[letters]);
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


