
Proxy-Object       // 应用于Vue3   //也可能不是 只是有相同的关键字
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

