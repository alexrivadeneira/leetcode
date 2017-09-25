var treeNode = {
	val: 1,
	left: 2,
	right:
		{ val: 3, 
		left: 6,
		right: 10}
};

console.log(treeNode);

function TreeNode(val){
	this.val = val;
	this.left = this.right = null;
}

function mergeTrees(t1, t2){
	console.log(t1);
	console.log(t2);
}

var t1 = TreeNode {
  val: 1,
  right: TreeNode { val: 2, right: null, left: null },
  left: 
   TreeNode {
     val: 3,
     right: null,
     left: TreeNode { val: 5, right: null, left: null } } };

var t2 = TreeNode {
  val: 2,
  right: 
   TreeNode {
     val: 3,
     right: TreeNode { val: 7, right: null, left: null },
     left: null },
  left: 
   TreeNode {
     val: 1,
     right: TreeNode { val: 4, right: null, left: null },
     left: null } };

console.log(mergeTrees(t1, t2));
