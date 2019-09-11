## 状态模式
## 定义

> 允许一个对象在其内部状态改变时改变他的行为，对象看起来似乎修改了他的类

## 模型
![state.png](https://upload-images.jianshu.io/upload_images/2973087-3ca08eeeb36267a3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 优点
1. 状态模式定义了状态与行为的关系，将他们封装在一个类里。（很容易增加新的状态和转换）
2. 避免了context的无限膨胀，去掉过多的分支条件。
3. 用对象代替字符串来记录当前状态，使得状态切换更一目了然
4. context中的请求动作和状态类中封装的行为可以独立变化而不相互影响

## 缺点
1. 会增加不少状态对象
2. 逻辑分散在状态类中，无法在一个地方看出整个状态机的逻辑


## 简单实现
```javascript
var FSM = {
  on: {
    change () {
      this.state = FSM.strong
      return 'strong'
    }
  },
  strong: {
    change () {
      this.state = FSM.off
      return 'off'
    }
  },
  off: {
    change () {
      this.state = FSM.on
      return 'on'
    }
  }
}

var Light = function () {
  this.state = FSM.off
}

Light.prototype.change = function () {
  return this.state.change.call(this)
}

module.exports = Light
```
## 参考

- 《JavaScript设计模式与开发实践》