 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }
    let queue=[root]
    let res=[]

    while(queue.length){
        let levSize=queue.length
        let level=[]

        for(let i=0;i<levSize;i++){
            let node=queue.shift()
            level.push(node.val)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        res.push(level)
    }
    return res
};


const root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
root.right = new TreeNode(3, null, new TreeNode(6));
console.log(levelOrder(root));