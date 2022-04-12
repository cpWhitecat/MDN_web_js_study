
Proxy-Object       // 应用于Vue3 
Proxy的语法

let newProxy  = new Proxy(target,handler)
// target 是要拦截的对象
// handler 具体拦截的方式

Proxy的handler对象使用

handler.get //的使用   把不在obj中的prototype都返回cpp
const handler = {
    get:function(obj,prototype) {
        return prototype in obj ? obj[prototype] : cpp
    }
}

handler.construct()

let p  = new Proxy  // 直接new Proxy 会报TypeError
所以这时候需要________construct()



handler.apply()
// 拦截函数调用  
// 拦截 function.apply  function.call()  Reflect.apply()    关于Reflect对象等后来读文档

handler还有很多方法未使用了解   //  待去看Vue源码 再逐一挖深了解


















Reflect对象  // 它并不能想Proxy一样使用new  它不是一个构造函数
let _Reflect = new Reflect   // TypeError

Reflect and Object 
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods
