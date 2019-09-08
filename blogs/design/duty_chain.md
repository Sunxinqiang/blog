## 定义

> 使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系


## 模型
![chain.jpg](https://upload-images.jianshu.io/upload_images/2973087-3b12197744f581d4.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 优点
1. 解耦发送者和N个接受者之间的关系
2. 链中节点可以灵活拆分重组（新增和删除节点都很容易）

## 缺点
1. 不能保证链中一定有能处理的节点，需要加保底处理函数
2. 过长的职责链有性能问题


## 简单实现

#### 业务需求
> 商品可以在预售期 付定金有优惠，500定金送100优惠券，300送10优惠券，需求计算实际购买支付金额
- orderTYpe 1：500定金，2：300定金，3：普通购买
- pay: true：定金已支付，false：定金未支付
- stock: 库存

#### 对象形式
```javascript
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


chain500.process(1, true, 10) // 定金500已付
chain500.process(1, false, 0) // 库存不足
```

#### aop形式

```js


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

chain500(1, true, 10) // '定金500已付'
```

## 参考

- <<JavaScript涉及模式与开发实践>>