var array = [];
var Smallsub;

function setup(){
   for(var i = 0; i < 10; i ++){
     array[i] = random(10);

   }

   selectionSort(array);
   console.log(array);
}
function selectionSort(array){
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

/*function insertionSort(array){
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
