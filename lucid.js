import { dictionary } from "./dictionary.js"

const msg = 'How are you doing';



export function Lucid (){
const reverse = Object.fromEntries(
    Object.entries(dictionary).map(([k, v]) => [v, k])
);
    

    return {
        encrypt: (text = '')=> {
            // Split out the text
            const lower = text?.toLowerCase();
            let build = [];
            for (let i=0; i< lower?.length; i++){
                const letters = lower[i];
                build.push(dictionary[letters]);
            }

            return build.join('')
        },

        decrypt: (text = '') =>
            [...text.toLowerCase()]
                .map(ch => reverse[ch] ?? ch)
                .join('')
    };
    

    
}

console.log(Lucid().decrypt('!@!g-1-47d%-g7c'))
