
function iterativeLog(array){
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback){
  colors = ['green', 'blue', 'pink', 'yellow']
  colors.forEach(callback);
  return colors
}

function doToArray(array, callback){
  array.forEach(callback)
}
