// 鸭子类型
/* 
一个动物
它只要会像鸭子一样游泳
走路
叫声
鸭子的嘴巴
那它就是鸭子 */



// 对象
/**
 * 如果一个对象是通过在顶级脚本的对象初始化器创建的，
 * 则 JavaScript 在每次遇到包含该对象字面量的表达式时都会创建对象。
 * 同样的，在函数中的初始化器在每次函数调用时也会被创建。
 */


//通过this 引用对象

// this在html元素中的使用
在html中每个元素后面的onchange属性，
它之后可以添加js函数
还有from标签 这里的this指向它的父节点


/* 如果一个对象是通过在顶级脚本的对象初始化器创建的，
用var声明过的 会被编译器自动置顶 这就是顶级对象
则 JavaScript 在每次遇到包含该对象字面量的表达式时都会创建对象。

同样的，在函数中的初始化器在每次函数调用时也会被创建。
 */



指向:31 函数的初始化器就是用new关键字和o
function cpp(value) {
    console.log(this);
}
var a = new cpp();   //为什么这里明明只是new一下 为什么会调用cpp()这个函数
console.log("-------------------");
a;

function peoDemo(){
    this.name = 'cp'  
    console.log('-------------------');
    console.log();
    console.log('-------------------');
    // return console.log("peodemo");
}
关于new关键字https://juejin.cn/post/6844904196362223624
function newPeo(){
    let p  = new peoDemo  //mdn的new步骤说如果被new的函数没有主动设置返回值 ╳
                          //会自动返回一个this 可是没有返回任何值  ╳

                          // 上面的是文档没读懂吧
                            //new 创造的是实例
    console.log(this);
    console.log('---------------------');
    console.log('下面是p返回的值');
    console.log(p);
}
newPeo()
console.log(window.name)


关于new关键字还是有不懂的地方

解释第:41
// 每次new一下 相当于执行了一遍new的函数





删除属性 //一般都会使用this.prototype = null 操作 
//赋值为空操作比删除一个属性快
可以用delete来删除非继承属性
function deleteAttribute(attribute){
    attr = attribute; //删去这行 函数传入的attribute不会被读取
    console.log(this);
    delete this.attr;
    return this
//为什么函数传的参数不能在函数内部被当作一个属性使用
//如果有这个需求怎么办
//虽然这个需求感觉不大可能会有
};
let obj = {
    nname:"cp"
};
console.log(obj);
obj.deleteAttribute('nname');
console.log(obj)
