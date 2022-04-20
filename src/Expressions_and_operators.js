// 表达式和运算符
// 解构
/* 
对于复杂的赋值
解构可以较方便的让我们提取到想要的数据
比如说下面的例子 */

const { text } = require("stream/consumers");
const { threadId } = require("worker_threads");

var name = ['cp','c','cpp'];
var cpName = name[0];
var cName = name[1];
var cppName = name[2];


// 这是没有使用解构的赋值，赋值很麻烦


var [cpName,cName,cppName] = name;
// 这是使用了解构方法的赋值操作
// 现在还不知道能不能使用 ...args(剩余函数) 


// updata 
// 补一个运算符 ?.
such as;


this example is not rigorous
in description label

let nestedProp ={
    first:{
        second:prop,
    }
};
const myName = allName.otherName?.Name;
console.log(myName);

// This is my first module text
// also return undefined 
// you dont know what the promblen is that you cant find "otherName" or "Name"
// so you must promise you can find Name in the otherName
// i dont know what happending in actual development



// 被短路的后续的链式调用不会再调用了，也就是说无效了