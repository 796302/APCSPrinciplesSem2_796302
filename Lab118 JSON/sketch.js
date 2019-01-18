var data;
function setup(){
  loadJSON("data.json", gotData)
}
function gotData(jData){
  data = jData;
}
function draw() {
  if(data) {

  }
}
