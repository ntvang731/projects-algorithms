const unsortedArray = [5,3,58,14,44]

function insertSort(arr) {
    for(i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i -1;
        while ((j > -1) && (temp < arr[j])){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr
}

console.log(unsortedArray);
console.log(insertSort(unsortedArray));