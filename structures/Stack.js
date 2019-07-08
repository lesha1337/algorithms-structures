class Stack {
    // LILO

    length = 0;
    storage = {};

    push = (value) => {
        this.storage[this.length] = value;
        this.length++;
    }

    pop = () => {
        if (this.length === 0){
            return undefined
        }

        const result = this.storage[this.length - 1];
        delete this.storage[this.length - 1];
        this.length--;

        return result;
    }

    peek = () => {
        return this.storage[this.length - 1];
    }

    size = () => {
        return this.length;
    }
}

const myStack = new Stack();

console.log(myStack.size());
myStack.push(1);
console.log(myStack.peek());
myStack.push(2);
myStack.push('three');
myStack.push(5);
console.log(myStack.size());
console.log(myStack.peek());
myStack.pop();
console.log(myStack.size());
console.log(myStack.peek());