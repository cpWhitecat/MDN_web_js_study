/* 
这键集合需要查看
map
weakMap
set
weakMap */





// weakMap用例的细节以及对对象的私密存储
// https://fitzgeraldnick.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html


// 这三条提示可以帮你决定用Map还是Object：

// 如果键在运行时才能知道，或者所有的键类型相同，所有的值类型相同，那就使用Map。
// 如果需要将原始值存储为键，则使用Map，因为Object将每个键视为字符串，不管它是一个数字值、布尔值还是任何其他原始值。
// 如果需要对个别元素进行操作，使用Object。