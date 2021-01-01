/* 装饰器可以给所装饰的对象进行扩展 装饰器是一个函数 */

// 类装饰器  类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。


// 实现一个给指定类扩展打印日志的装饰器
function log(target: Function) {
    // target是构造函数
    console.log(target === Foo); // true
    target.prototype.log = function() {
      console.log(this.bar);
    };
  }
  
  // 方法装饰器有三个参数   给方法扩展某些功能  如emit装饰器 可以使方法触发自定义
  function dong(target: any, name: string, descriptor: any) {
    // 这里通过修改descriptor.value扩展了bar方法
    const baz = descriptor.value;
    descriptor.value = function(val: string) {
        console.log('dong~~');
        // 原始逻辑
        baz.call(this, val);
    }
    return descriptor
  }
  
  // 属性装饰器
  function mua(option:string) {
    return function (target, name) {
      target[name] = option
    }
  }
  
  
  @log
  class Foo {
    bar = "bar";
  
    @mua('mua~~')
    ns!:string;
  
    @dong
    setBar(val: string) {
      this.bar = val
    }
  }
  
  const foo = new Foo();
  // @ts-ignore
  foo.log();
  