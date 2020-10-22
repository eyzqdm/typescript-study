/* ts 函数中的this 默认情况下是any类型 不会提示任何属性和方法 但不影响this的使用
 可以在config文件中设置this的默认类型

 但 事件函数中 ts会自动推导this的类型
*/

/*问题 想在时间函数中绑定一个对象中的函数 但对象函数中的this并不指向事件对象？

   因此要改变this指向
 */

let obj = {
  a:1,
  fn(this:Document){ // this本来指向obj，此时改变指向指向Document，此时this下有了dom对象的各种方法，
    //而this.a则无效
    // 可以使用与运算符指定多种类型
    this;
  }
};
document.onclick = obj.fn;