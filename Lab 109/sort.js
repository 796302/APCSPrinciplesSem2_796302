var array = [];
var Smallsub;

function setup(){
   for(var i = 0; i < 10; i ++){
     array[i] = random(10);

   }
   sort(array);
   console.log(array);
}
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
