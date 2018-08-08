var recipes = {banana_pudding: ['1 banana', 'pudding']}

var updateObjectWithKeyAndValue = function (object, key, value) {
  console.log(Object.assign({}, object, {key: value}))
}
