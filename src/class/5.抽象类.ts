/* 关于抽象
类 是对有相同特征的对象的抽象
抽象类 是对有相同特征的类的抽象
 */

abstract class Person { //抽象类不能实例化的，只能被继承
    username: string;

    constructor(username: string) {
        this.username = username;
    }

    say() {
        console.log('哈哈哈哈哈');
    }

    // 虽然子类都会有这样的特性，学习，但是子类学习具体过程不一样，所在在父类确定
    // 不了study方法的具体实现，父类只能有抽象约定，即只能约定该方法接收什么参数，返回什么内容
    // 如果一个类中有抽象的方法了，那么这个类也必须是抽象的


     /**
     * abstract 表示抽象：当一个类不清楚方法具体实现细节，或者细节需要依赖子类来实现的时候，就可以使用抽象，同时还可以依靠来约束子类的结构
     *  当一个方法抽象的时候，这个方法只定义了结构，而不允许有实现
     *  抽象方法依靠继承的子类来实现
     *  当一个类当中有抽象方法的时候，那么这个类也必须是抽象的
     *  当一个类是抽象的时候，那么这个类是不能被实例化的
     */

     /**
 * 当一个子类继承了一个抽象父类，那么这个子类就必须实现所有的抽象方法，才能够被实例化，否则的话该类也必须是抽象的
 */
    abstract study(): void   //抽象方面是没有具体代码的
}


class Student extends Person {

    study() {
        console.log('学生有学生的学习方法 - 需要老师教授');
    }

}

class Teacher extends Person {

    study() {
        console.log('自学');
    }

}

// 如果一个类继承了抽象的父类，就必须实现所有抽象方面，否则这个子类还是必须得为抽象的
// abstract class P extends Person {

// }


// new Person();
