class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root == null;
    }

    insert(value, parent = null) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else if (parent) {
            parent.children.push(node);
        }
        return node;
    }

    preorder(root) {
        if (root) {
            console.log(root.value);
            for (let child of root.children) {
                this.preorder(child);
            }
        }
    }

    postOrder(root) {
        if (root) {
            for (let child of root.children) {
                this.postOrder(child);
            }
            console.log(root.value);
        }
    }

    BFS() {
        const queue = [this.root];
        while (queue.length) {
            const curr = queue.shift();
            console.log(curr.value);
            for (let child of curr.children) {
                queue.push(child);
            }
        }
    }

    search(root, value) {
        if (!root) return false;
        if (root.value === value) return true;
        for (let child of root.children) {
            if (this.search(child, value)) return true;
        }
        return false;
    }
}
