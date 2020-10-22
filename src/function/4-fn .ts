/* 函数声明
   

   类型约束：1 函数参数 2 函数返回值

   若函数无返回值 则使用void
 */
function fn1(x:number,b:number):number{
    return 1
}
/* 函数表达式
 */
let fn2:Function = function (a:number,b:number):number{
    return 2
} // 此时变量的fn2的类型 可以为Function 但不准确 因为Function类型不会对参数类型进行检测
// 即此时fn2（'a', 'b')是不会报错的  因此准确的写法为

let fn3:(x:number,y:number) => number = function (a:number,b:number):number{
    return 2
}
// fn3 类型为 接受两个数值参数，并返回数值的函数


/* 可根据类型推断简写为
let fn3:(x:number,y:number) => number = function (a,b){
    return 2
}
*/

/* 可选参数 用？指定 */
function fn4(x:number,y?:number):void {
    console.log('aaa');
    
}
// 可以为可选参数指定默认值
function fn5(x:number,y=1):void {
    console.log('aaa');
    
}
fn5(1)



/* 剩余参数  类型必须为数组*/

function fn6 (...args:[])
{
    console.log(args);
    
}

/*  函数重载  同名函数实现不同功能 */