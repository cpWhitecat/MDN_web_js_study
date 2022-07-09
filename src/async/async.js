const asyncSecond = function(){
    console.log('asyncSecond start');

    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('asyncSecond');
        }, 2000);
    })
};

const asyncFirst = function(){
    console.log('async first start');

    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('asyncFirst');
        }, 1000);
    })
};

const firstTest = async function(){
    console.log('first test start');

    await asyncSecond();
    await asyncFirst();   
}

firstTest();   //执行完这个函数需要3秒