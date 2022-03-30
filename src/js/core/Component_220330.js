/**
 * 컴포넌트 추상화
 * Required : target, props, state
 * Required Method : initialize, template, render, setEvent, setState, mounted
 */
export class Component {
    $target;
    $props;
    $state;

    constructor( target, props ) {
        this.$target = target;
        this.$props = props;

        this.initialize();
        this.render();
        this.setEvent();
    }

    initialize() {}

    template() {
        return ``;
    }

    render() {
        this.$target.innerHTML = this.template();
        this.mounted();
    }

    setEvent() {}

    setState( nextState ) {
        this.$state = {
            ...this.$state,
            ...nextState
        }

        this.render();
    }

    mounted() {}
}