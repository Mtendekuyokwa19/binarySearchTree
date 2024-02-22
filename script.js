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

delete(value,branch=this.root){

//  if(value==branch.r){
//   // this.nodeDelete(branch)
  
//   return branch ;
//  }

if (branch.left!=null&&branch.right===null) {

  if(branch.left.root===value){
       this.nodeDelete(value,branch)

       return
  }
  
}

else if (branch.left===null&&branch.right!=null){

  if(branch.right.root===value){
    this.nodeDelete(value,branch)
return    
  }



  
}
 
else if (branch.left!=null&&branch.right!=null){

  if (branch.left.root===value||branch.right.root===value) {
    
    this.twoChilderenNodeDelete(value,branch)

    return;
  }

}

  if (value>branch.root) {
    return this.delete(value,branch.right)
  } else(value<branch.root); {
    return this.delete(value,branch.left) 
  }

}


nodeDelete(value,branch){

  if (branch.left===null&&branch.right!==null) {
   
  
    branch.right=this.replacingChildrenNode(branch.right)

    console.log(branch.right)
return
  }

  else (branch.left!=null &&branch.right==null);{

    
   
    branch.left=this.replacingChildrenNode(branch.left)

    console.log(branch.left)

    return
  }


}


twoChilderenNodeDelete(value,branch){

if(branch.left.root===value){

  let nextNode=(branch.left.left!=null)?branch.left.left:null;
  branch.left=this.replacingChildrenNode(branch.left);



return
}

let nextNode=(branch.right.right!=null)?branch.right.right:null;
branch.right=this.replacingChildrenNode(branch.right);



}


replacingChildrenNode(branch){
if(branch.left!=null&&branch.right==null){

  return branch.left
}

else if(branch.left==null&&branch.right!=null){

  return branch.right
}

else(branch.left!=null&&branch.right!=null);{

  this.getSecondLargestNode(branch.ri)
}

return null;  


}

getSecondLargestNode(node){
  if(node.left==null){

    return node
  }

  return this.getSecondLargestNode(node)

  




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

 let trial=new Tree([1,23,45,67,2,2,6,9,17,5,5,2,4,67,8,9,53,223])


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

console.log(trial.delete(1))
trial.delete(17)
trial.delete(2)

trial.delete(4)


prettyPrint(trial.root)






