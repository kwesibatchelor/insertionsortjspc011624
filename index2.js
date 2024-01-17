function insertionSort(array) {
    const arr = array.slice();
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                arr[j], arr[j-1] = [arr[j-1], arr[j]];
            } else {
                break;
            }
        }
    }
    
    return arr;
}

console.log(insertionSort([2, 3, 1, 543, 321, 34, 23, 3465, 63, 123, 34, 3, 55, 1, 432, 99]))