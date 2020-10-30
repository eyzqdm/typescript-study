/*与es6的区别  ts中的类，成员属性必须先声明再使用 */
class person{
   private _username:string = ''; // 私有属性一般用_声明
   private _age:number;

    constructor(name:string,age:number)
    {
        this._username = name;
        this._age = age
   
    }

    public get a() : number {
        return this._age
    }

    public set a(age:number) {
        if(age<200)
        {
            this._age = age
        } 
    }
}

/* 修饰符 控制对类中属性和方法的访问
public 公开
private 私有的 只能该对象（类）的内部才可访问
protected 在类内部和其子类中可访问
readonly 只读 不能修改
*/

let p1 = new person('wangerniu',12)
/* p1.username 无法访问*/

p1.a = 14 // 可以访问person类内部的私有变量，且可以修改（通过get，set存取器），但是是有规则限制的修改，具体规则在set中定义 
console.log(p1.a); // 打印14 

/* 存取器
ts支持通过getters和setters来截取对对象成员的访问
*/

