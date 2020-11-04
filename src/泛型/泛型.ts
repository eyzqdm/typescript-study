/**
 * 泛型的概念可以类比函数
 * 声明一个函数（参数不确定） 不同的对象调用函数时传入不同的参数
 * 同理 声明一个函数 当传入的参数的类型不确定时 就会用到泛型
 * 调用函数时同时绑定一个类型约束 如例子中的<o1>
 * 
 * target: 是传入的对象
 * key: 是对象下面的其中一个key
 * 调用该函数返回target[key]
 */
function getVal<T>(target: T, key: keyof T) {
    return target[key];
}

let obj1 = {
    x: 1
};
let obj2 = {
    username: 'mt',
    age: 30
}

type O1 = typeof obj1;
type O2 = typeof obj2;

getVal<O1>(obj1, 'x');