Array.prototype.filter()


Array.prototype.reduce()




Array.prototype.find()

/* 对于find()函数在一个数组中找值
它找的是当时那个数组索引值所在的状态
它找的对应的值是根据当时索引对应现在的值 */
// 这个方法感觉可以使用回调函数函数
// 固定找某个值，虽然没什么效率但是个想法



Array.prototype.reduce(function(){},lastValue)   // 
//  这里的lastValue是指上次函数操作的值 如果没有这值传入
//  此函数会自动把index =  0 的数自动作为lastValue
//  此函数的应用 比如斐波那契数列

// 具体可往function里传四个参数    被调用的函数在数组property中一般都是最后一个


// 后续被添加删除的数并不会影响reduce的执行
/** 这点跟fiter()很像
 * 不知到其他数组也有如上相同的特征
 * 等待学习
 * 
*
 */




// 在array中有很多浅拷贝和深拷贝的函数
/**
 * 
 */




