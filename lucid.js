import { dictionary } from "./dictionary.js"

const msg = 'How are you doing';


/**
 * Creates a Lucid cipher utility for encrypting and decrypting text.
 *
 * @function Lucid
 * @returns {Object} An object containing `encrypt` and `decrypt` methods.
 * @returns {Function} returns.encrypt - Encrypts a string using the dictionary mapping.
 * @returns {Function} returns.decrypt - Decrypts a string using the reverse dictionary mapping.
 *
 * @example
 * const cipher = Lucid();
 * const encrypted = cipher.encrypt("hello");
 * const decrypted = cipher.decrypt(encrypted);
 */
export default function Lucid (){
const reverse = Object.fromEntries(
    Object.entries(dictionary).map(([k, v]) => [v, k])
);
    

    return {
         /**
         * Encrypts the given text by mapping each character through the dictionary.
         *
         * @param {string} [text=''] - The text to encrypt.
         * @returns {string|undefined} The encrypted string, or undefined if validation fails.
         */
        encrypt: (text = '')=> {
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
        },

        /**
         * Decrypts the given text by mapping each character through the reverse dictionary.
         * Characters not found in the reverse map are left unchanged.
         *
         * @param {string} [text=''] - The text to decrypt.
         * @returns {string|undefined} The decrypted string, or undefined if validation fails.
         */
        decrypt: (text = '') =>{
            if(!text){
                console.error("Value missing: @.decrypt(value)");
                return
            }

            if(typeof(text) !== 'string'){
                console.error("Invalid type: @.decrypt(string)");
                return
            }
            [...text.toLowerCase()]
                .map(ch => reverse[ch] ?? ch)
                .join('')
        }};
    

    
}

// console.log(Lucid().decrypt('!@!g-1-47d%-g7c'))
