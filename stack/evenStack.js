class Stack {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    push(value) {
        this.items.push(value);
    }
    pop() {
        if (this.items.length == 0) {
        return "stack is empty";
        }
        return this.items.pop();
    }
    peek() {
        if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
        }
        return null;
    }
    print() {
        console.log(this.items.toString());
    }
}

function evenStack(stack) {
    let even = new Stack();
    while (!stack.isEmpty()) {
        let curr = stack.pop();
        if (curr % 2 == 0) {
        while (!even.isEmpty() && even.peek() > curr) {
            stack.push(even.pop());
        }
        even.push(curr);
        }
    }
    return even;
}

    let stack = new Stack();

    for (let i = 0; i < 5; i++) {
    stack.push(i * i + 1);
}
    stack.print();

    let evensNums = evenStack(stack)
    evensNums.print()

    stack.print();
