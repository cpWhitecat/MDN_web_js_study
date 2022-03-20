zconsole.log(cpp);
console.log(cp);
const cpp = function(){
    return cpp + cpp
}
// 如上函数表达式不会被提升 在调用该函数表达式之前

function cp(){
    return obj
}
// 只有这样的函数声明才会被提前到调用表达式之前 
// 所以尽量把函数写在调用之前（因需求造成的特殊情况除外）



// 下列堆栈的使用 尝试把函数里的递归展开干净，如此就明了结果的值
function foo(i) {
    if (i < 0)
      return;
    console.log('begin:' + i);
    foo(i - 1);
    console.log('end:' + i);
  }
  foo(3);
  
  // 输出:
  
  // begin:3
  // begin:2
  // begin:1
  // begin:0
  // end:0
  // end:1
  // end:2
  // end:3




  function outside(x) {
    function inside(y) {
      return x + y;   //此处相当于把值返回给outside了
    }
    return inside;
  }
  fn_inside = outside(3); // 可以这样想：给一个函数，使它的值加3
  result = fn_inside(5); // returns 8
  
  result1 = outside(3)(5); // returns 8




  var createPet = function(name) {
    var sex;
  
    return {
      setName: function(newName) {
        //不要因为newName形参 而误会对实参的理解 函数调用 pet.setName("Oliver")就是newName
        name = newName;
      },
  
      getName: function() {
        return name;
      },
  
      getSex: function() {
        return sex;
      },
  
      setSex: function(newSex) {
        if(typeof newSex == "string"
          && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
          sex = newSex;
        }
      }
    }
  }
  
  var pet = createPet("Vivie");
  pet.getName();                  // Vivie
  
  pet.setName("Oliver");
  pet.setSex("male");
  pet.getSex();                   // male
  pet.getName();                  // Oliver
  

  // 这是需要提交的例子
(
  (function(){
    console.log
  })
)()


//调试成功 git使用起来是真的简单，快速入门


function out(){
  var name = 20;
  var x = function in(){
      name
  }
}
// lambda 匿名函数 希腊字母像中文的入



// Function.prototype.bind()
// bind() 方法创建一个新的函数，
// 在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，
// 而其余参数将作为新函数的参数，供调用时使用。

// 这个文章 讲述了一些关于箭头函数和this指向问题的解答 
https://juejin.cn/post/6881312898564980750


在箭头函数出现之前，每一个新函数都重新定义了自己的 this 值（在构造函数中是一个新的对象；在严格模式下是未定义的；在作为“对象方法”调用的函数中指向这个对象；等等）。以面向对象的编程风格，这样着实有点恼人。

function Person() {
  // 构造函数Person()将`this`定义为自身
  this.age = 0;

  setInterval(function growUp() {
    // 在非严格模式下，growUp()函数将`this`定义为“全局对象”，
    // 这与Person()定义的`this`不同，
    // 所以下面的语句不会起到预期的效果。
    this.age++;
  }, 1000);
}

var p = new Person();
Copy to Clipboard
在ECMAScript 3/5里，通过把this的值赋值给一个变量可以修复这个问题。

function Person() {
  var self = this; // 有的人习惯用`that`而不是`self`，
                   // 无论你选择哪一种方式，请保持前后代码的一致性
  self.age = 0;

  setInterval(function growUp() {
    // 以下语句可以实现预期的功能
    self.age++;
  }, 1000);
}






this指向问题
在严格模式下是未定义的 指向undefined

this 环境转换 可用 call 和 apply
call(this,...args){
  
}