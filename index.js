var recipes = {banana_pudding: ['1 banana', 'pudding']}

var updateObjectWithKeyAndValue = function (object, key, value) {
  var newObj = Object.assign({}, object, {[key]: value})
  return newObj;
}

var destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object.key
  return object
}
