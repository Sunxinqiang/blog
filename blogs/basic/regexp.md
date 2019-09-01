## 正则规范
1. POSIX: grep
2. PCRE

## 捕获匹配
#### 获取引用 (x)
1. RegExp.$number
```js
/a(bc)/g.exec('abc')
RegExp.$1 // bc

/a(bcd)/g.test('abcd')
RegExp.$1 // bcd

```

2. replace $number
```js
'<div class="123">'.replace(/(<div)[\s\S]*(>)/, '$1$2') // <div>
```

## 非捕获匹配 (?:x)
- `匹配 'x' 但是不记住匹配项`
#### 用途
1. 使表达式作用于整个元素
```js
/(?:abc){2}/.test('abc') // false
/(?:abc){2}/.test('abcabc') // true
```
2. 提升性能
  - 捕获是消耗性能的 如果不需要记住匹配项 只想单纯括起来 不要用捕获

## 先行断言 x(?=y)
- 匹配'x'仅仅当'x'后面跟着'y'.
```js
/\S+(?=ing)/.test('running') // true
/\S+(?=ing)/.test('runn ing') // false
```
## 后行断言 (?<=y)x
- 匹配'x'仅仅当'x'前面是'y'.
```js
/(?<=is)\S+/.test('isLoading') // true
/(?<=is)\S+/.test('is Loading') // false
```
## 正向否定查找 x(?!y)
- 仅仅当'x'后面不跟着'y'时匹配'x'
```js
/runn(?!ing)/.test('running') // false
/runn(?!ing)/.test('runn ing') // true
```
## 反向否定查找 (?<!y)x
- 仅仅当'x'前面不是'y'时匹配'x'
```js
/(?<!is)Loaded/.test('isLoaded') // false
/(?<!is)Loaded/.test('is Loaded') // true
```

### 这些等等
- 正向肯定零宽断言
- 正向否定零宽断言
- 零宽断言
  - 零宽断言的意思是（匹配宽度为零，满足一定的条件/断言
  - 零宽断言用于查找在某些内容(但并不包括这些内容)之前或之后的东西