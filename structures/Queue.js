class Queue {
    // FILO

    collection = [];
    
    print = () => { console.log(this.collection) };

    //adds first item into the queue
    enqueue = (elem) => this.collection.push(elem);

    //removes last item from the queue
    dequeue = () => this.collection.shift();

    //current first out
    front = () => this.collection[0];

    size = () => this.collection.length;

    isEmpty = () => (this.collection.length === 0);
}

const myQueue = new Queue();

myQueue.enqueue('apple');
myQueue.enqueue('banana');
myQueue.enqueue('lemon');
myQueue.enqueue('orange');

myQueue.print();
myQueue.dequeue();
myQueue.print();

myQueue.dequeue();
console.log(myQueue.front());
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.isEmpty());
