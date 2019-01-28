// Make a game about trees in the forest
// To 
// define a trees
function trees(leaves, leavesColor, barkType) {
  this.leaves = leaves,
  this.leavesColor = leavesColor,
  this.barkType = barkType,
  this.pictureIt = function(){
    return `The tree has ${this.leaves} of ${leavesColor} and a bark of ${barkType}`
  }
  
}
// draw a random number of trees in random places to the DOM? Totally Possible. Learn make new tags in html



// define the forest   object1.content1 = object2
let forest = {
  areaSquared: null
  //numberOfTrees: function(){
  // something like return document.get.NumberofTrees
    
  }
  




// what do the trees do when you scroll over them?





// how about what does the forest say when you chop down a tree?




var tree1 = new trees()
console.log(tree1.pictureIt())
