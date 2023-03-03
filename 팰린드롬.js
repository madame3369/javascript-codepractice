// 앞으로 & 뒤로 읽었을 때 같은 문자열
// ex) level, eye
// function checkPalindrome(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i>=0; i--) {
//         reversed += str[i];
//     }
//     return reversed === str;
// }

// console.log(checkPalindrome("abba"));

function checkPalindrome(str) {
    const len = str.length
    const middle = Math.floor(len/2)
    for(let i = 0; i < middle; i++){
        if(str.charAt(i)!==str.charAt(len -1 - i)){
            return false;
        }
        return true;
    }
}