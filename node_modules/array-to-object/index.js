
module.exports = arrToObj

function arrToObj (array, values) {
  if (!Array.isArray(array) || !Array.isArray(values)) {
    return
  }

  var res = {}

  array.forEach(function (ele) {
    if (!values.length) {
      return
    }
    res[ele] = values.shift()
  })

  return res
}
