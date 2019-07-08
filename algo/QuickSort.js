const QuickSort = (arr) => {
    if (!arr.length) {
        return []
    }

    const [head, ...tail] = arr;
    const left = tail.filter(elem => elem < head);
    const right = tail.filter(elem => elem >= head);

    return QuickSort(left).concat(head, QuickSort(right))
}

const randArr = (n=1000) => {
    let arr = []; 
    for (let i = 0; i < n; i++) arr.push(randInt()); 
    return arr;
}

const randInt = (n=1000) => (Math.floor(Math.random()*n));

let unsortedArray = randArr();
let sorted = QuickSort(unsortedArray);
console.log(JSON.stringify(sorted));