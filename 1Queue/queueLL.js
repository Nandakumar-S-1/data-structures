    class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    }
    class Queue {
    constructor() {
        this.head = null;
        this.rear = null;
    }
    isEmpty() {
        return this.head == null;
    }
    enqueue(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
        this.head = node;
        this.rear = node;
        } else {
        this.rear.next = node;
        this.rear = node;
        }
    }
    dequeue() {
            if (!this.isEmpty()) {
            let temp = this.head;
            this.head = this.head.next;
            if (this.head == null) {
                this.rear = null;
            }
            return temp.value;
            } else {
            return "underflow";
            }
    }
    peek() {
        if (this.isEmpty()) {
        return null;
        }
        return this.head.value;
    }
    print() {
        let curr = this.head;
        while (curr !== null) {
        console.log(curr.value);
        curr = curr.next;
        }
    }
    }

    let queue = new Queue();
    let i = 0;
    while (i <= 5) {
    queue.enqueue(i);
    i++;
    }

    console.log("queue values are:");
    queue.print();