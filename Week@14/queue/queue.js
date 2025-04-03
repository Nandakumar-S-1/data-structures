    class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return "removed item is " + this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        if (!this.isEmpty()) {
        return "item in the head is " + this.items[0];
        }
        return null;
    }
    getSize() {
        return "the size is " + this.items.length;
    }
    print() {
        console.log(this.items.toString());
    }
    }

    let queue = new Queue();

    for (let i = 1; i <= 5; i++) {
    queue.enqueue(i);
    }
    console.log(queue.getSize());

    console.log(queue.isEmpty());

    console.log(queue.peek());

    queue.print();

    queue.dequeue();
    queue.print();

    console.log(queue.getSize());
