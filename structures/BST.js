class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data){
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = (node) => {
                if (data < node.data) {
                    if (node.left === null){
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    remove(data) {
        const removeNode = (node, data) => {
          if (node === null) {
            return null;
          }
          if (data == node.data) {
            // node has no children 
            if (node.left === null && node.right === null) {
              return null;
            }
            // node has no left child 
            if (node.left === null) {
              return node.right;
            }
            // node has no right child 
            if (node.right === null) {
              return node.left;
            }
            // node has two children 
            var tempNode = node.right;
            while (tempNode.left !== null) {
              tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
          } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
          } else {
            node.right = removeNode(node.right, data);
            return node;
          }
        }
        this.root = removeNode(this.root, data);
      }

    has = (data) => {
        let current = this.root;
        while (current) { //current not null
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        
        return false;
    }

    preOrder() {
        if (this.root == null) {
          return null;
        } else {
            var result = new Array();
            const traversePreOrder = (node) => {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            };
            traversePreOrder(this.root);
            return result;
        };
    }
    
    findMin = () => {
        let current = this.root;
        while  (current.left !== null) {
            current = current.left;
        }
        return  current.data;
    }

    findMax = () => {
        let current = this.root;
        while  (current.right !== null) {
            current = current.right;
        }
        return  current.data;
    }

    find  = (data) => {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
    }
}


const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(`'dfs:' ${JSON.stringify(bst.preOrder())}`);

console.log(bst.has(9))

bst.remove(9)

console.log(`'dfs:' ${JSON.stringify(bst.preOrder())}`);

// console.log(bst.has(9))

// console.log(bst.findMin())

bst.remove(3)

console.log(bst.findMin())