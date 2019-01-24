var data;
function setup(){
  sort(data.countrydata);
  console.log(data.countrydata);
}
function preload(){
  data = loadJSON("population.json");
}



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
