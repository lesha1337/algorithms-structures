class Set {
    collection = [];

    values = () => this.collection;

    has = (elem) => (
        this.collection.indexOf(elem) !== -1
    );

    add = (elem) => {
        if (!this.has(elem)) {
            this.collection.push(elem);
            return true;
        }
        return false;
    }

    remove = (elem) => {
        if (this.has(elem)) {
            let index = this.collection.indexOf(elem);
            this.collection.splice(index, 1);
            return true;
        }

        return false;
    }

    size = () => this.collection.length;

    union = (otherSet) => {
        let unionSet = new Set();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(elem => {unionSet.add(elem)});
        secondSet.forEach(elem => {unionSet.add(elem)});

        return unionSet;
    }

    intersection = (otherSet) => {
        let intersectionSet = new Set();
        let firstSet = this.values();
        
        firstSet.forEach(elem => {
            if (otherSet.has(elem)){
                intersectionSet.add(elem);
            }
        });

        return intersectionSet;
    }

    difference = (otherSet) => {
        let differenceSet = new Set();
        let firstSet = this.values();
        firstSet.forEach(elem => {
            if (!otherSet.has(elem)) {
                differenceSet.add(elem);
            }
        });

        return differenceSet;
    }

    subset = (otherSet) => {
        let firstSet = this.values();
        return firstSet.every(value => (otherSet.has(value)));
    }
}

const mySet1 = new Set();
const mySet2 = new Set();

mySet1.add(1);
console.log(mySet1.values());
mySet1.add(1);
mySet1.remove(1);
console.log(mySet1.values());

mySet1.add(1);
mySet1.add(2);
mySet1.add(5);
mySet1.add(7);

mySet2.add(5)
mySet2.add(8)

console.log(`Set1: ${mySet1.values()}`)
console.log(`Set2: ${mySet2.values()}`)

console.log(mySet1.union(mySet2).values());
console.log(mySet2.union(mySet1).values());

console.log(mySet1.intersection(mySet2).values());

console.log(mySet1.difference(mySet2).values());
console.log(mySet2.difference(mySet1).values());

console.log(mySet2.subset(mySet1));
mySet2.remove(8)
console.log(mySet2.subset(mySet1));