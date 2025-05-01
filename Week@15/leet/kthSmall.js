class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

var kthSmall = function(root,k){
    let stack=[]
    let count=0
    let curr=root

    while(curr || stack.length){
        while(curr){
            stack.push(curr)
            curr=curr.left
        }
        curr=stack.pop()
        count++
        if(count==k){
            return curr.val
        }
        curr=curr.right
    }
    return -1
}

let root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.left.left.left = new TreeNode(1)

let k = 3
console.log(kthSmall(root, k))