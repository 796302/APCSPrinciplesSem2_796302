var data;
function setup(){
  loadJSON("data.json", gotData)
}
function gotData(jData){
  data = jData;
}

sort(data.countrydata)
console.log(data.countrydata);

function sort(data.countrydata){
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
