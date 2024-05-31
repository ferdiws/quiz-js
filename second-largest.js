function secondLargest(numArr) {
    if (numArr.length < 2) {
        return null;
    }

    let max = -Infinity, second = -Infinity;
    
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > max) {
            second = max;
            max = numArr[i];
        } else if (numArr[i] > second) {
            second = numArr[i];
        }
    }

    return second;
}

console.log(secondLargest([10,5,20,8]));
console.log(secondLargest([1,2,3,4,5]));