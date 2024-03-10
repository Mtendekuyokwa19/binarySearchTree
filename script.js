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

delete(value,node=this.root){

  if (!node) return null;

  if (value < node.value) {
    node.left = this.delete(value, node.left);
  } else if (value > node.value) {
    node.right = this.delete(value, node.right);
  } else {
    if (!node.left) return node.right;
    else if (!node.right) return node.left;

    node.value = this.findMinValue(node.right);
    node.right = this.delete(node.value, node.right);
  }

  return node
}

findMinValue(node) {
  let minv = node.value;
  while (node.left) {
    minv = node.left.value;
    node = node.left;
  }
  return minv;
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

 let trial=new Tree([1,23,45,67,2,2,6,9,17,5,5,2,4,67,8,9,53,223,10,20,30,50,50])


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


// trial.delete(10)

// trial.delete(23)
trial.levelOrder(printOutValues)
function printOutValues(params) {
  console.log(params+"=>")
}

// prettyPrint(trial.root)






