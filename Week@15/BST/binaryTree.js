class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root == null;
    }

    insertLevelOrder(values) {
        if (!values.length) return;
        this.root = new BinaryTreeNode(values[0]);
        let queue = [this.root];
        let i = 1;

        while (i < values.length) {
            let curr = queue.shift();
            if (values[i] != null) {
                curr.left = new BinaryTreeNode(values[i]);
                queue.push(curr.left);
            }
            i++;
            if (i < values.length && values[i] != null) {
                curr.right = new BinaryTreeNode(values[i]);
                queue.push(curr.right);
            }
            i++;
        }
    }

    preorder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }

    inorder(root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    BFS() {
        const queue = [this.root];
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }

    search(root, value) {
        if (!root) return false;
        if (root.value === value) return true;
        return this.search(root.left, value) || this.search(root.right, value);
    }

    min(root) {
        if (!root) return Infinity;
        return Math.min(root.value, this.min(root.left), this.min(root.right));
    }

    max(root) {
        if (!root) return -Infinity;
        return Math.max(root.value, this.max(root.left), this.max(root.right));
    }
}
