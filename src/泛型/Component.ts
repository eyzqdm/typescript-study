/**
 * 虽然props和state是在父类中统一定义的，但是又是不清楚具体的子类中的props和state会有哪些特性
 */

export default abstract class Component<T, S> {

    props: T; // 接收子类传过来的泛型
    state: S;
    
    constructor(props: T) {
        this.props = props;
    }

    // render() {
    //     return '';
    // }

    /**
     * abstract 表示抽象：当一个类不清楚方法具体实现细节，或者细节需要依赖子类来实现的时候，就可以使用抽象，同时还可以依靠来约束子类的结构
     *  当一个方法抽象的时候，这个方法只定义了结构，而不允许有实现
     *  抽象方法依靠继承的子类来实现
     *  当一个类当中有抽象方法的时候，那么这个类也必须是抽象的
     *  当一个类是抽象的时候，那么这个类是不能被实例化的
     */
    abstract render(): string;

}

// new Component()