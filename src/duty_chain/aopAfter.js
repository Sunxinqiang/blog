Function.prototype.after = function (nextFn) {
  let self = this
  return function () {
    let res = self.apply(this, arguments)
    if (res === 'next') {
      return nextFn.apply(this, arguments)
    }
    return res
  }
}

function deposit500 (orderTYpe, pay, stock) {
  if (orderTYpe === 1 && pay) {
    return '定金500已付'
  } else {
    return 'next'
  }
}

function deposit300 (orderTYpe, pay, stock) {
  if (orderTYpe === 2 && pay) {
    return '定金300已付'
  } else {
    return 'next'
  }
}

function normal (orderTYpe, pay, stock) {
  if (stock > 0) {
    return '普通购买'
  } else {
    return '库存不足'
  }
}

let chain500 = deposit500.after(deposit300).after(normal)
module.exports = chain500