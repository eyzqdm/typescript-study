// class Person {

//     private _a = 1; 只能在父类中访问，子类中无法访问

//     // 在构造函数的参数中如果直接使用public等修饰符，等同于在构造函数外边声明了该变量
//     constructor(public username: string, public age: number) {
//         this.username = username;
//         this.age = age;
//     }

// }

// class Student extends Person {

//     // 如果子类没有重写构造函数，则默认子类的构造函就是父类的构造函
//     // 如果子类重写了构造函数 那么必须super()一下
//     // 注意：需要手动调用父类构造函数 super()也需要传参
//     // super：关键字，表示父类
//     constructor(username: string, age: number, public type: string) {
//         super(username, age);    //执行父类构造函数

//         this.type = type;
//     }

// }

// let s1 = new Student('Kimoo', 30, 'javascript');