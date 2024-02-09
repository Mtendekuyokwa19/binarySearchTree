class node{


    constructor(root,left=null,right=null){

       this.root=root;
       this.left=left;
       this.right=right

    }

}


class Tree{

    constructor(array){

        this.array=this.removeDuplicates(array)

    }





get root(){


  return this.buildTree(this.array,0,this.array.length-1)
}

buildTree(array,start=0,end=this.array.length-1){
 
 
  
  if(start>end){


    return null
  }

  let mid=parseInt((start+end)/2);

  let branch=new node(array[mid]);


  branch.left=this.buildTree(array,start,mid-1)
  branch.right=this.buildTree(array,mid+1,end)
  

 


  
  

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

delete(value,branch=this.root){
 
 
if(value===branch.right.root){
  if(branch.right.right===null&&branch.right.left==null){

    branch.right=null
  }

  else if(branch.right.right!=null&&branch.right.left===null){

    branch.right=branch.right.right;
  }

  else if(branch.right.right!=null&&branch.right.left!=null){
    
    let replaceValue=this.getTheSecondLargestNode(branch.right)
    console.log(replaceValue,"freak")
    branch.right.root=replaceValue.right.root;
    replaceValue.right=replaceValue.right.right
  

  }

}

else if (value===branch.left.root){

  if (branch.left.left===null&&branch.left.right===null) {
    branch.left=null
  
    
  }


  else if(branch.left.left!=null&&branch.left.right===null){

      branch.left=branch.left.left
     

  }

  else if(branch.right.right!=null&&branch.right.left!=null){

    let replaceValue=this.getTheSecondLargestNode(branch.left)



branch.left.root=replaceValue.right.root;
    // branch.root=;
    replaceValue.right=replaceValue.right.right


  }

  

}
else if(value>branch.root){

  this.delete(value,branch.right)
}

else if(value<branch.root){
  this.delete(value,branch.left)


}

else if(branch.root===value){
let oldNode=branch;


let replaceValue=this.getTheSecondLargestNode(branch.right)
oldNode.root=replaceValue.left.root
replaceValue.left=null


}


return branch
}

getTheSecondLargestNode(node,secondSmallest=undefined){

  if(node.left.left===null){

    secondSmallest=node

return secondSmallest


  }






  return this.getTheSecondLargestNode(node.right,secondSmallest)






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

 let trial=new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])


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


prettyPrint(trial.root)



