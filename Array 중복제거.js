const nums = [1, 2, 3, 6, 6, 5, 7, 2, 2, 8, 9];
//중복을 제거하고 배열 나열하기
//Set()활용
// const uniqueNums = [...new Set(nums)];

// console.log(uniqueNums);
//IndexOf사용 시
// const uniqueNums = nums.filter((item, position) => {
//     return nums.indexOf(item) === position;
// })

// console.log(uniqueNums);
function uniqueNums(arr) {
    const uniqueElements = {};
    const result = [];
    for (let element of arr){
        if (!uniqueElements[element]){
        result.push(element);
        }
    uniqueElements[element] = element;
}
    return result;
}
console.log(uniqueNums(nums));