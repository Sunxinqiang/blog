## 定义

> 使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系


## 模型
![chain](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0MAAADmCAMAAAAgJ64dAAABaFBMVEUAAAAyMjI+Pj4yMjIyMjIyMjIyMjIJCQkkJCQxMTEyMjIPDw8yMjIwMDAXFxcyMjIoKCgyMjIAAAANDQ0bGxshISEsLCwICAgJCQkHBwcxMTEKCgoSEhIMDAweHh4rKysxMTEyMjIyMjIzMzMxMTEKCgolJSUaGhouLi4mJiYjIyMVFRUcHBwYGBgVFRUyMjIzMzMdHR0xMTExMTEyMjIyMjIyMjL///80NDTS0tJISEhSUlI+Pj47OztVVVVOTk6RkZGQkJBBQUE4ODhLS0tYWFjNzc1ycnKtra1ERESWlpbW1tbj4+Pu7u6GhoahoaHZ2dlpaWmKioqqqqr5+flbW1vo6Oi8vLz9/f3y8vJCQkL39/fQ0NDExMSOjo7d3d2AgIA1NTXi4uKxsbFsbGxPT0/l5eW0tLTCwsJ2dnbr6+vf39+Dg4N7e3u5ubmnp6dAQEA5OTlgYGBvb2/IyMiamppkZGR4eHgb5WsTAAAANnRSTlMA/Qc414qJOALrmAhi8gzA0bMSRhqr5B0FJPcuXzyg2qWeUUpDM7+E7cW2bY98aqyrlllY1bnhdO9NAAAQuElEQVR42uzUwQmAMBBE0Y1RiCCIzSyKF2uw/2IECxASWHTkvwr+YRgDAAAAAAAAAAAAAAAAAAB/kpNn0yGWK9eLat2Q3NPQmQaxXLle1Mu9r+e5eq/xlWK5cr1oesl9M9t2ia8Uy5XrRdtLHnY7BL5SLFeuN1iZ5tEDjfNULMrzS94EvlIs92O97w+4LB5uKRbn+SUVvvJiv455G4SBMAx/mSBKSBCUEkpDpxBIq0pdbsyY//+TWnloB5DbSpzyneUbs/iROL9WjHHJvAQLvJXrDapzu8oW/lGrJEsrw+HSeQkWeC+qAmeQPZTGX0maVobD5fMSLPBaoD6yhneUKsnTylC4jF6CBZZlCHc/Y1JJplYGwqX0EiwwAUGlklStDIJL6iVYYAKCQiXJWhkCl9VLsMAEhOUrydZK+1xeL8ECExCWriRfK81zib0EC0xAWLiShK00zqX2EiwwAWHRSlK20jaX20uwwAQEjUrqt7J52VjimvP+sOMd8pyhWEn9ViayscQ15/1mxzukd8a0kiqtTKTMn/ITsPkYsqrA+1DgmDWQryHkmvP+yuZfYALCQo+QUisTqR6KSw50Y130HdLxLc1fXSAZuea8XnZ8h2bPYHiE/tPKRBqgXKXFqgXKDGizc5+6j8vINef1suMdmjmD5RH6eysT2bkveRI3B6CTI9xPjFxzXh87/h+aOYPnEZpppf/j1lLDTTNUF7ifGLnmvD52vEOTM7geoUkr/R8XfVUf2hLpeN49PgONlAUh95O9M31OGgjD+KMfvO9rHI/xnPGDt45vQoCAHOU+Sgs9gFLQitBTpfrvu1mhorAJnUjckD6Txoqdyc+87/PsNuwOruOdAFv2BpYAwcFBSJyV1sW9dv38rUtX8fzeWdw5z8Ly9a3TEuK6jtcaW/rNOxIgODQIVcCUnSgrPY7rKl4JGlgCBLuDUKYBpg8Ylca/2GEoCCZ1oqz0NK7LeCVoYAkQ7KZkIgkmAtOSxhQIhSgUUnmBE4koPzb7RR6Q1EpmWSkbbquzF53PCnAl5F1bbZZ9EPDK3Vye8NDoVD2SHSpfQFHYEWRnXuRiMcUPHpQfNI1YEwBIpcgsK2XDLSwg9/HrWFwpeZeArRQEvDI3lzc8NDpVr6nBYDM5XGRdV9kBf6jpn0NfRn3rymJUUVQAGR+ZTdtlwzXUo3G40vLONSHglbi5POGhcc+L8mlF+fgZtO77OyiTGitp3FAEAHtNqQb7RfaR2bRdOlymdmosrqS8lURJcHvlbS5veGjs86LAmqLEPoF29gqoaaSVD4r8ba+kNMuGBkVeWRV6aDgrpcNlKqfH48rI2yP6Jri98jaXJzw0/k2LQlxXsjGAlM2NME/JwS+9rYS2thNRDA2KnA0JPTScldLhAltlIa6MvI3ytohXzubyhocEb1os+PRieg0gFoNZXuQ0C0ogjfW6Vl1U2UyjP9moaFqAUpqm1QceEmWldLhY8+fEuBLyot4U8srYXE54yAeuIA60g252Kv/Na6cO+c75wsdUCyCFK8DPnPM7NEUpKSs6OxvsyytKfnUBEI5Dv7NSNtywv2uGK93tBepfbPKK+d3qoVIZcSZiX/vgImyuh6fhoTOnzzw+dah3zlcT+F3k5U/ar2esHwBN0XU9SH5d320kVa3ditS0rqmHBlkpF25az5njynV7GzuofF23zyvmP1xztUNqemPEzcQORz2E7/sY3MlGyhCluKbgISI6/eDR8YmXb+U3tMRShhYXqyuZfPTr1iAoYQTlcltrdypKdWPrc3Ulvot0ucuJmMyHohnFdYL3U7y5twXY4bXmn7y5KuoOAAk8xNQfhzrgInBNw0Nc5+8/PDtJSmb0eWDhWyhIRPOVOWA9FotRjAnQKmG9k0Xj67cegJZeAvvnVHKy1cazies6Xit+6+byEWTwUMFfLg7mcnHA3wKoDdTi0/IQ1/mXby5YryFeglBJtHMwNGf8kSjA0G5+0tXGs4jrOl4rfuvmIibumF48qmeAXrwZq4O/ko3WAQTqjoxD3eAfltIB8qO4l8YkIhu6fO4iURiOK0z0bvZxXcc7yj/ZOMQd0+niYxxYyiyWQv1x6Mc20A45NJcLAn7dkB9M8zVQeT2yD2c89B6O6z0r8uzjuo7XlodaQJ3/dCZNfQ/NfQHmC855SFUMEQx1E+SLloDpzuVevTUmGyds7AezsXPsxPFZxHUdrxX/ITzU/z6cSvygwSv+9qdozjkPUdwQ//ndwBYhGcg490zBRlYKN8GIU9L4pXc2cV3Ha8F/eA9lqaHUDzy0O7+/Dac8VOwdeKin6zUYhg4uwYFn2+ZZSSEuAhAx1Awa53A4OiTxJhhxSs4orut4LfgP76FNqq98pINXgrE5pzykRndUGCJkovv9G1ZQtx16j1WclVGFKwpwJUcWxZDJJhhhSs4srut4LfgP7yGUvmzs/vbQtg6HPNRTk+AeykaBFoAigamWdmitjzgrSecicOXjVOgUR4os2gQjSsnZxXUd77TX+sR3nfIQeoBqDNShMJjmqLn1P9acvjcPyp5/u0qLSa3TAhDRNC0CgEw2wQhS0oO4ruP9R821kPLSuu1+Voon7I351I6i0LJSTQfXAOo/RCSTTTCClPQirut4/0lzRTd8nvLQ+KysK1x1ILdfZd8kltlpMzlcZPEmGEFKehPXdbyyNLAECDaysqhxET8DauSXVGC4yOJNMIKU9Ciu63glaWAJEOxlZfKzskyDCy0qXPzvxsJyXmTRJhhxSnoW13W8UjSwBAi2sjK3WmdFDjEV/iqyOri62SaY8SnpXVzX8crQwBIg2MrKrx3/h9xoUP5WLSraBCNOSS/juo1XggaWAMFGVvpieWxua83I6upesAvSfonQ1w/1C+XNNsEIUlL8UYc3n9w4duP5KclxXccrwD7ykOU17GflZwwrMagtBupWBJtgBClp/VGHl27fPHnjieS4ruMVYB95yOY1rLNyemuIxR91eBfAndOS47qOV4B95KEpXcP+amNxSlp/1OEVAHfplNy4ruMVYR95aOQasg1FgpQUF/canTQC8obkuK7jFWAfjUNjriHXUCRKSXFxcZ1P1J9Kjus6XgH2kYfGXkOeoUiQkubFvfDsxrF7L2THdR3veOyjZ9s/2bWDE4eBIAqiOkogEM7FzNFHBeD8g1nY+8LSjOyqr/4J+MG0yxf/8RmUn6L/VPLmXIMXcMAAwvU/RfVK3pwr8AIOGECY0UpqJfVcvBdwwADCnFYyK+nn0r2AAwYQJrUSWckELtsLOGAAYVorgZWM4KK9gAMGEOa1klfJEC7YCzhgAGFmK2mVTOFyvYADBhCmthJWyRwu1Qs4YABhcitRlQziQr2AAwYQZreSVMkoLtILOODtE4RtqazeSk4ls7hEL+CAj3EuF+8cx1JavZWYSqZxeV7AAe/jdbHhfI19Ka7eSkgl47g4L+CA18e4fI+17K+3klHJQC7MSzjgdT+2ceG2Yy98hWa0klDJRC7Mm3jAiP22ElDJTK7O26u38vuVzOTqvL1yK99vTSVlXJ23V22lqJIyrs7bq7Xy+TRVUsbVeXvUP4Lcl6vz9vIfWcbVeXv5jyzj6ry9/EeWcXXeXv4jy7g6by//kWVcnbeX/8gyrs7by39kGVfn7eU/soyr8/byH1nG1Xl7+Y8s4+q8vfxHlnF13l7+I8u4Om8v/5FlXJ23l//IMq7O28t/ZBn3h507yU0ciqIwfMikaGwHbNzEAZwWVYkk1Ul3mGH2v6RYhA3kWUjvN/dbwS+dO/DAerheN/6RYbm4Xjdk5HVbSFlaaPH3Z1rm0qFqXxQb2k3Set2gkctS2nRT7X7V+X6nGyuyZ8WGdpO0Xjdo5G2baf+qfHIrFanqyUbxod0krdcNG7nb1G2uZztqtKmWW8WGdpO0Xjds5MP+tZRqq/WleakUG9pN0nrdsJHztNpK2pd1c1uo3jZvaXTPKNNuktbrBo68W6q3LtN2Weimm3SFYkO7SVqvGzjy8qDY0W6S1usGjZy/VZliR7tJWq8bNHLb/VD0aDdJ63XjHxmWi+t14x8ZlovrdeMfGZaL63XjHxmWi+t14x8ZlovrdeMfGZaL63Xfs573zOa9teIHy8X1ugDTmZ3Movsvjp+L63Uh5nYyFwEsF9frAjzZyZMIYLm4XhegmaG+NWC5uF4X4t6O7sUAy8X1ugCPdvQoBlgurtcFuEqtl16JAZaL63Uh7qx3JwpYLq7XBXiw3oMoYLm4XhdgkZqlC1HAcnG9LsRvsz/igOXiel2Af2b/xQHLxfW6AJlZ/A+RYHNxvS7EaiUSWC6u1wVIEpHAcnG9Tpom1zM7o9l1Mr3cXFyvC9h4ZWe3ml5qLq7XBUjs/UNn9fFuyaXm4nrdJzvntpNGFIbR/1ISE9KX2SOEGVoG0YpK0VatbbUHa4/W2kafv9tR2v+GGzLUb2fWCoMxRGYlK58QnbAA7TCyJTMK7abqJucLC9AKtnRCq6m6yfmC6MfIhKD4VHMJQfO5+CQgURKLnJhucr4gGoANeaR9QTQAG/JI+4JoADbkkfYF0QBsyCPtC6IB2JBH2hdEA7Ahj7QviAZgQx5pXxANwIY80r4gGoANeaR9QTQAG/JI+4JoADbkkfYF0QBsyCPtC6IB2JBH2hdEA7Ahj7QviAZgQx5pXxANwIY80r4gGoANeaR9QTQAG/JI+4JoADbkkfYF0QBsyCPtC6IB2JBH2hdEA7Ahj7QviAZgQx5pX6g3wH48Nm3G9Jn9ZXxqkQ9aG1LUTc4X6o3cq457vqzbXl5hZhtV++onD7uRXr8f+v21+edoqm5yvlB/5Cu7Y6974B4ZbM8iR3pZFm95vH/4DanpJucLdUYeDMJgpwxlWQaz78Ptzc824/Vanr/b9JGLYi3e5p+jqbrJ+UKdkat6R6WZxXj7X0+v3tiM3a0sO/ts4W1H6nVIUDc5X6g98s7AzEqLFBPLIyEe1jvJsuG5hR8/J/a6G7ovVDYkp5ucL9QauVNOP/WL+zftZ8Eqwo7ZZL3ItodmIfv28XH1W1LhbwqSusn5Qp2R85urTnZZnpj1zKYXLvJ+p3i2dXIbOXu5XUXeyrLcbGv+OZqqm5wv1P5m4/rJxdRiv0NzkWPms6fvbyNX9Kr7/MH/P6Som5wv1B35qH9qZgM7Nh85crxh/yIfnXe73RCPD3PP0VTd5Hyh7siXNxZZ33wxi3x+92X3Y3fjcByeP3/1crxb/vou8jqkp5ucL9QZ+WDneJx3LDIJk7vIFyFMzWxcxPv93/08xO8PRmZvh8NhGEbmnqOpusn5Qp2Ri97ep+v73vEYuYcOBa851dRNzhdEL/rlum2PtC+IBmBDHmlfEA3AhjzSviAagA15pH1BNAAb8kj7gmgANuSR9gXRAGzII+0LogHYkEfaF0QDsCGPtC+IBmBDHmlfEA3AhjzSviAagA15pH1BNAAb8kj7gmgANuSR9gXRAGzII+0LogHYkEfaF0QDsCGPtC+IBmBDHmlfEA3AhjzSviAagA15pH1BNAAb8kj7gmgANuSR9gXRAGzII+0LogHYkEfaFxag9T8it5qqm5wvLEA7jGzJjEK7qbrJ+cICrIZiyZVHRVhtqm5yvrAAK4/C0nm00lTd5Hxhocqr7VZYIq326kpzdZPzBQAAAAAAAPjTHhwIAAAAAAjyt15ghAoAAAAAAAAAADgBPa++/d4y1C0AAAAASUVORK5CYII=)

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