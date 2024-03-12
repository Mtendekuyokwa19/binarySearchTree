class node{


    constructor(root,left=null,right=null){

       this.root=root;
       this.left=left;
       this.right=right

    }

}


class Tree{

    constructor(arraySet){

        this.array=this.removeDuplicates(arraySet)
    
        this.buildTree(this.removeDuplicates(arraySet))

    }


 root=new node();




  


buildTree(array,start=0,end=this.array.length-1){
 
 
  
  if(start>end){


    return null
  }

  let mid=parseInt((start+end)/2);

  let branch=new node(array[mid]);


  branch.left=this.buildTree(array,start,mid-1)
  branch.right=this.buildTree(array,mid+1,end)
  

 


  
  
this.root=branch;
return branch

}
    


removeDuplicates(array) {
  let sortedArray=mergeSort(array);
  let unduplicated=[]
  

  for (let i = 0; i < sortedArray.length; i++) {

  unduplicated.push(sortedArray[i]);
  
  if(unduplicated[unduplicated.length-1]==unduplicated[unduplicated.length-2]){

    unduplicated.pop()

  }
      
  }

  return unduplicated
}


insert(value,branch=this.root){

 if(branch==null){

  let leaf=new node(value)

  return leaf
 }


 if(value>branch.root){
  branch.right=this.insert(value,branch.right)
 }

 else if (value<branch.root) {
  branch.left=this.insert(value,branch.left)
 }
 
 return branch
}

delete(value, node = this.root) {
  if (!node) return null;

  if (value < node.root) {
    node.left = this.delete(value, node.left);
  } else if (value > node.root) {
    node.right = this.delete(value, node.right);
  } else {
    if (!node.left) return node.right;
    else if (!node.right) return node.left;

    node.root = this.findMinValue(node.right);
    node.right = this.delete(node.root, node.right);
  }

  return node;
}

findMinValue(node) {
  let minv = node.root;
  while (node.left) {
    minv = node.left.root;
    node = node.left;
  }
  return minv;
}

find(value, node = this.root) {
  if (!node) return null;

  if (value === node.value) return node;
  else if (value < node.value) return this.find(value, node.left);
  else return this.find(value, node.right);
}

levelOrder( runOperation,Node=this.root){

  if (Node===null) {

    return
  }

  let keepPositions=new Queue();
  keepPositions.enqueue(Node);


  while (!(keepPositions==null)) {
    let currentIndex=keepPositions.peek();
    if(currentIndex===undefined) return;
  runOperation(currentIndex.root)

   

    if(currentIndex.left !=null){
      keepPositions.enqueue(currentIndex.left)
    }
    if(currentIndex.right !=null){
keepPositions.enqueue(currentIndex.right);
    }
    keepPositions.dequeue()
    
  }


}

inorder(runOperation,Node=this.root){
  if(Node==null){

    return
  }

  this.inorder(runOperation,Node.left);
  runOperation(Node.root);
  this.inorder(runOperation,Node.right)


}

preorder(runOperation,Node=this.root){

  if(Node==null){
    return
  }
  runOperation(Node.root);
this.preorder(runOperation,Node.left);
this.preorder(runOperation,Node.right);

}

postOrder(runOperation,Node=this.root){

  if(Node==null){
    return
  }
  this.postOrder(runOperation,Node.left)
  this.postOrder(runOperation,Node.right)
  runOperation(Node.root)

}


height(Node=this.root,length=0,NumbersLength=[]){
  if (Node==null) 
  {
  
    
    NumbersLength[NumbersLength.length]=length
    NumbersLength.sort()

  return NumbersLength[NumbersLength.length-1]
  }

 length++;
  this.height(Node.left,length,NumbersLength);
  this.height(Node.right,length,NumbersLength)

  return NumbersLength[NumbersLength.length-1]-1;
  

}

depth(value,Node=this.root,length=0){
if(Node==null){
  return length
}
  if(Node.root===value){

   
    return length
  }
  length++;
if(Node.root>value){
  return this.depth(value,Node.left,length);
}
  else(Node.root<value);{
    return this.depth(value,Node.right,length)
  }
 
 
 


}

isBalannced(Node=this.root){

let left=this.height(Node.left);
let right=this.height(Node.right);

if(!(Math.abs(left-right)>1)){


return true

}

return false


}


rebalance(Node=this.root,array=[]){

  if(Node==null){

    this.array=array;
    this.buildTree(array);

    return
  }
  array.push(Node.root);
  this.rebalance(Node.left,array);
  this.rebalance(Node.right,array);

  return array

}


}


class Queue {
	constructor() {
		this.items = {}
		this.frontIndex = 0
		this.backIndex = 0
	}
	enqueue(item) {
		this.items[this.backIndex] = item
		this.backIndex++
		return item + ' inserted'
	}
	dequeue() {
		const item = this.items[this.frontIndex]
		delete this.items[this.frontIndex]
		this.frontIndex++
		return item
	}
	peek() {
		return this.items[this.frontIndex]
	}

isEmpty() {

	return this.items.length == 0;
}

	get printQueue() {
		return this.items;
	}
}







function mergeSort(array) {
    if (array.length === 1) {
      return array;
    }
  
    let length = Math.floor(array.length / 2);
  
    let leftArray = copy(array, 0, length);
    let rightArray = copy(array, length, array.length);
  
    let sortedLeftArray = mergeSort(leftArray);
    let sortedRightArray = mergeSort(rightArray);
  
    let mergedArray = merge(sortedLeftArray, sortedRightArray);
    return mergedArray;
  }
  
  function merge(firstArray, secondArray) {
    let newArray = [];
    while (!(firstArray[0] === undefined || secondArray[0] === undefined)) {
      if (firstArray[0] > secondArray[0]) {
        newArray[newArray.length] = secondArray[0];
        secondArray.splice(0, 1);
      } else if (firstArray[0] === secondArray[0]) {
        newArray[newArray.length] = secondArray[0];
        newArray[newArray.length] = firstArray[0];
        firstArray.splice(0, 1);
        secondArray.splice(0, 1);
      } else {
        newArray[newArray.length] = firstArray[0];
  
        firstArray.splice(0, 1);
      }
    }
  
    firstArray.forEach((element) => {
      newArray[newArray.length] = element;
    });
  
    secondArray.forEach((element) => {
      newArray[newArray.length] = element;
    });
  
    return newArray;
  }
  
  function copy(array, start, end) {
    let newArray = [];
  
    for (let i = start; i < end; i++) {
      newArray[newArray.length] = array[i];
    }
  
    return newArray;
  }




const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.root}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};



function createRandomNumbers(randomizeNum) {
  let arrayOfIntergers=new Array();

  for (let i = 0; i <randomizeNum ; i++) {

    let randomNumber=Math.floor(Math.random()*(5*i));

    if(randomNumber<100) arrayOfIntergers.push(randomNumber);
  
    
  }

  return arrayOfIntergers
}

function createRandomNumbersAbove100(randomizeNum) {
  let arrayOfIntergers=new Array();

  for (let i = 0; i <randomizeNum ; i++) {

    let randomNumber=Math.floor(Math.random()*(5*i));

    if(randomNumber>100) arrayOfIntergers.push(randomNumber);
  
    
  }

  return arrayOfIntergers
}

let treeOfIntergers=new Tree(createRandomNumbers(45));

function printElement(element) {

  console.log(element)
}
insertAbove100();
treeOfIntergers.levelOrder(printElement)
treeOfIntergers.postOrder(printElement)
treeOfIntergers.preorder(printElement)
treeOfIntergers.inorder(printElement)
treeOfIntergers.rebalance()
console.log(treeOfIntergers.isBalannced())
prettyPrint(treeOfIntergers.root)
function insertAbove100() 
{
let arrayAbove100=createRandomNumbers(100);

for (let i = 0; i < arrayAbove100.length; i++) {
 treeOfIntergers.insert(arrayAbove100[i])
  
}
}
treeOfIntergers.levelOrder(printElement)
treeOfIntergers.postOrder(printElement)
treeOfIntergers.preorder(printElement)
treeOfIntergers.inorder(printElement)
