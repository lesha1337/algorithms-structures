class PQueue {
    //FILO

    colletion = [];

    print = () => { console.log(this.colletion) };

    enqueue = (elem) => {
        //priority
        if (this.isEmpty()){
            this.colletion.push(elem);
        } else {
            let added = false;
            for (let i = 0; i < this.colletion.length; i++) {
                //priority check:
                if (elem[1] < this.colletion[i][1]){ 
                    this.colletion.splice(i, 0, elem);
                    added = true;
                    break;
                }
            }
            if (!added){
                this.colletion.push(elem);
            }
        }
    };

    dequeue = () => {
        let value = this.colletion.shift();
        return value[0]
    };

    front = () => this.colletion[0];

    size = () => this.colletion.length;

    isEmpty = () => (this.colletion.length === 0);
}

const pq = new PQueue();
pq.enqueue(['Барак Обама', 1000])
pq.enqueue(['Дональд Трамп', 100])
pq.enqueue(['Владимир Путин', 1])
pq.enqueue(['Господь Бог', 1])

// pq.print();
console.log(pq.front());
pq.dequeue();