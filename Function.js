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