/*与es6的区别  ts中的类，成员属性必须先声明再使用 */
class person{
   private username:string = '';

    constructor(name:string)
    {
        this.username = name;
    }
}

/* 修饰符 控制对类中属性和方法的访问
public 公开
private 私有的 只能该对象（类）的内部才可访问
protected 在类内部和其子类中可访问
readonly 只读 不能修改
*/

let p1 = new person('wangerniu')
/* p1.username 无法访问*/


/* 存取器
ts支持通过getters和setters来截取对对象成员的访问
*/