// 补一个超级大坑
// 具体扩展需要经验的积累


这里也涉及js真假值的判断
this-is-true();{  // 平常的理解是除了0之外
    if (true)
    if ({})
    if ([])
    if (42)
    if ("foo")
    if (new Date())
    if (-42)        
    if (3.14)
    if (-3.14)
    if (Infinity)
    if (-Infinity);
}

假值();{
    NaN,
    undefined,
    "",
    0n,
    -0,
    0;
}

// 不知道对于function是怎么判断的  （钻牛角尖行为） 因为如果函数不存在，编译器会显示

// test

function trueAndFalse(){
    console.log('输出函数的console');
}

if(trueAndFalse()){
    console.log('有函数并执行正确');
}else{
    console.log('现在是错误执行的');
}


// 知道为什么没有函数了 因为函数会返回值 如果不设置返回值 默认undefined 
// 直接执行else后面的表达式了