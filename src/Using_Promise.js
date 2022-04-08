Promise是一个异步(Async) --- 且只会执行一次



关于Promise.then() --- 方法
如果then前面的链式调用返回的是一个value,那就会使用这个value调用下一个<then>
如果then前面返回的是一个<Promise>对象,那后面的<then>会等返回的Promise执行完再调用

let myPromise  = new Promise
Promise.then(myPromise).then



throw//是用来抛出用户定义的错误\

