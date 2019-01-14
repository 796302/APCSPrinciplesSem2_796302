var array = [];
var Smallsub;
var comparisons;
var swaps;
var time;
function setup(){
   for(var i = 0; i < 20000; i++){
     array[i] = random(10);

   }

   sort(array);
   console.log(array);
}
//-------Bubble Sort-----------
/*
function sort(array){
  for (var i = array.length-1; i > 0; i--){
    for(var j = 1; i <= i; i++){
    if([j-1] > [j]){
      var temp = array[j]
      array[j] = array[j-1]
      array[j-1] = temp

  }
  }
}
}
*/
//-------Selection Sort----------
/*
function sort(array){
  for (var i = 0; i < array.length-1; i++){
    var Smallsub = i;
    for(var j = i + 1; j < array.length-1; i++){
      if(array[j] < array[Smallsub]){
        Smallsub = j

      }
    }
    var temp = array[i]
    array [i] = array[Smallsub]
    temp = array[Smallsub]
  }
}
*/
//-------Insertion Sort-----------
/*
function sort(array){
  for(var i = 1; i < array.length; i++){
    for(var j = i; j > 0; i--){
      if(array[i] < array[i-1]){
        var temp = array[i]
        array[i] = array[i-1]
        temp = array[i-1]
      }
    }
  }
}
*/
