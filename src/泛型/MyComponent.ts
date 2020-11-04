import Component from './Component';

/**
 * 当一个子类继承了一个抽象父类，那么这个子类就必须实现所有的抽象方法，才能够被实例化，否则的话该类也必须是抽象的
 */
interface IMyComponentProps {
    value: string;
}
interface IMyComponentState {
    id: number;
}
class MyComponent extends Component<IMyComponentProps, IMyComponentState> {
    
    constructor(props: IMyComponentProps) {
        super(props);

        this.state = {
            id: 1
        }
    }

    render(): string {
        this.state.id;
        this.props.value;

        return '<div></div>';
    }

}