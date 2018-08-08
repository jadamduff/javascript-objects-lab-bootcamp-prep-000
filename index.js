var recipes = {banana_pudding: ['1 banana', 'pudding']}

var updateObjectWithKeyAndValue = function (object, key, value) {
  var newObj = Object.assign({}, object, {key: value})
  console.log(object)
}
