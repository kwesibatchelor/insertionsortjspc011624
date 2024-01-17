function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j] < array[j-1]) {
                const temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            } else {
                break;
            }
        }
    }
    
    return array;
}

console.log(insertionSort([2, 3, 1, 543, 321, 34, 23, 3465, 63, 123, 34, 3, 55, 1, 432, 99]))

