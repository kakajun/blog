---
date: 2022-2-01
title: 立即执行函数
tags:
  - js
describe: 概念
---

### 1.什么是立即执行函数（IIFE）
在了解立即执行函数之前先明确一下函数声明、函数表达式及匿名函数的形式，如下图：
函数声明
``` js
function test(){
console.log("test")
}
```
函数表达式
``` js
var test=function(){
console.log("test")
}
```
匿名函数
``` js
function (){
console.log("test")
}
```

### 使用立即执行函数的好处
通过定义一个匿名函数，创建了一个新的函数作用域，相当于创建了一个“私有”的命名空间，该命名空间的变量和方法，不会破坏污染全局的命名空间。此时若是想访问全局对象，将全局对象以参数形式传进去即可，如jQuery代码结构:

``` js
(function(window,undefined){
//jquery code
})(window)
```

从图中可以看出，除了使用()运算符之外，！，+，-，=等运算符都能起到立即执行的作用。这些运算符的作用就是将匿名函数或函数声明转换为函数表达式，如下图所示，函数体是函数声明的形式，使用运算符将其转换为函数表达式之后就可达到立即执行效果：

``` js
!function(window,undefined){
//jquery code
}(window)
```