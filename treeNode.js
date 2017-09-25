 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }


function getHeight(node){
    
    var height = 0;
        
    if(node === null){
        return true;
    }
    
    if(node.left === null && node.right === null){
        return 0;
    } else {
        if(node.right){
            next = node.right;
            return 1 + getHeight(next);
        } else if (node.left){
            next = node.left;
            return 1 + getHeight(next);
        }
    }
}

myTree = Object.create(TreeNode);
,

console.log(myTree);