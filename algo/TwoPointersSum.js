const QuickSort = require ('./QuickSort');

const TwoPointers = (array, expectedSum) => {
    let arr = QuickSort(array);
    let [left, right] = [0, arr.length-1];

    while (left <= right){

        if (arr[left] + arr[right] === expectedSum){
            console.log(`${arr[left]} + ${arr[right]} = ${expectedSum}`);
            return [left, right];
        }

        if (arr[left] + arr[right] > expectedSum) {
            right--;
        }
        
        if (arr[left] + arr[right] < expectedSum) {
            left++;
        }
    }
    return -1;
}


const TestArr = [ 633,  80, 330, 816, 638, 233, 178,  64, 103, 297, 503,  68, 460,  53,  65, 647, 861, 271, 137, 458 ];

TwoPointers(TestArr, 567);