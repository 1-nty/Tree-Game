// Make a game about trees in the forest
// To 
// define a trees
let leaves = [3400, 7200, 10000];
let leavesColor = ['red','gold','green','brown','yellow'];
let barkType = ['crusty', 'smooth', 'barky'];
randSelect = (li) => Math.floor(Math.random() * li.length);

function trees() {
  this.leaves = leaves[randSelect(leaves)],
  this.leavesColor = leavesColor[randSelect(leavesColor)],
  this.barkType = barkType[randSelect(barkType)],
  this.pictureIt = function(){
    return `The tree has ${this.leaves} of ${this.leavesColor} and a bark of ${this.barkType}`
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
