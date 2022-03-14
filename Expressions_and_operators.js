// 表达式和运算符
// 解构
/* 
对于复杂的赋值
解构可以较方便的让我们提取到想要的数据
比如说下面的例子 */

var name = ['cp','c','cpp'];
var cpName = name[0];
var cName = name[1];
var cppName = name[2];


// 这是没有使用解构的赋值，赋值很麻烦



var [cpName,cName,cppName] = name;
// 这是使用了解构方法的赋值操作
// 现在还不知道能不能和 ...args 协作