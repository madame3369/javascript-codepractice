//에너그램이란 두 단어의 글자 나열 순서는 다르지만 구성이 일치할 시 에너그램이라한다.
const stringA= "listen";
const stringB= "silent";

//"listen" -> split() 쪼개고 -> sort()정렬하고 -> join() 다시 합치고
//문자길이 확인 후 트루 동작하게

// function isAnagram(strA, strB) {
//     if (strA.length !== strB.length) {
//         return false ;
//     }
//     return strA.split("").sort().join()===strB.split("").sort().join();
// }
// console.log(isAnagram(stringA, stringB));
//#hashmap
function isAnagram(strA, strB) {
    if (strA.length !== strB.length){
        return false;
    }
    const hashMap= {}
    for (const char of strA) {
        hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
    }
    for(const char of strB) {
        if(!hashMap[char]) {
            return false;
        }
        hashMap[char]--;
    }
    return true;
}

console.log(isAnagram(stringA, stringB));