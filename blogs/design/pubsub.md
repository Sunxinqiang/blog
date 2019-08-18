## 定义

> 发布-订阅者模式它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的值都将得到通知

- 在JavaScript中一般用事件模型来代替传统的订阅-发布者模式

## 模型
![1948637-93095ddc48adb80e.png](https://upload-images.jianshu.io/upload_images/2973087-aa888000b5d66a7b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 优点
1. 对象间功能解耦，弱化对象间的引用关系；
2. 更细粒度地管控，分发指定订阅主题通知

## 缺点
1. 对间间解耦后，代码阅读不够直观，不易维护
2. 额外对象创建，消耗时间和内存（很多设计模式的通病）


## 简单实现
```javascript
module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    this.subscribes[type] = this.subscribes[type] ? this.subscribes[type].push(fn) : [fn]
  }

  unsubscribe(type, fn) {
    let fns = this.subscribes[type]
    fns && (this.subscribes[type] = this.subscribes[type].filter(item => item !== fn))
  }

  publish(type, ...args) {
    this.subscribes[type].forEach(fn => fn(args))
  }

}
```
## 参考

- [JavaScript设计模式（六）：观察者模式与发布订阅模式](https://segmentfault.com/a/1190000019722065)
- [设计模式学习之观察者模式和发布订阅模式](https://www.jianshu.com/p/9f2c8ae57cac)