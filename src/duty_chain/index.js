function Chain (fn) {
  this.fn = fn
  this.nextChain = null
}

Chain.prototype.process = function () {
  let res = this.fn.apply(this, arguments)
  if (res === 'next' && this.nextChain) {
    return this.nextChain.process.apply(this.nextChain, arguments)
  }
  return res
}

Chain.prototype.setNext = function (fn) {
  this.nextChain = fn
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

var chain500 = new Chain(deposit500)
var chain300 = new Chain(deposit300)
var chainNormal = new Chain(normal)

chain500.setNext(chain300)
chain300.setNext(chainNormal)

module.exports = chain500