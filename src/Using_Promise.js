const { rejects } = require("assert")
const { resolve } = require("path")

Promise是一个异步(Async) --- 且只会执行一次



关于Promise.then() --- 方法
如果then前面的链式调用返回的是一个value,那就会使用这个value调用下一个<then>
如果then前面返回的是一个<Promise>对象,那后面的<then>会等返回的Promise执行完再调用

let myPromise  = new Promise()   //括号里的函数并不会异步 而是立即执行
Promise.then(myPromise).then()
catch的错误捕捉,只能捕捉同级链上的错误,在其他链上的捕捉不到





Promise的时序问题
//如之后还有不懂 可点击
//https://segmentfault.com/q/1010000020368538


var myPromise1 = new Promise((rejects)=>{
    console.log('myPromise1');
    rejects();  //resolve和rejects至少传一个，不然后面的then就不会执行
}).then(()=>{
    console.log("then外部1");
    new Promise(resolve=>{
        console.log("内部Promise");
        resolve();
    }).then(()=>{
        console.log("then内部1");
    }).then(()=>{
        console.log("then内部2");
    })
}).then(()=>{
    console.log("外部then2");
})
myPromise1()
throw//是用来抛出用户定义的错误\


//现只是初略了解
// 但对它的应用场景还是不了解

