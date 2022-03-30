/**
 * Core Component
 * Required State: target, props, state
 * Required Method: initialize, template, render, setEvent, setState, mounted(+)
 */

export class Component {
    $target;
    $props;
    $state;

    constructor( target, props ) {
        this.$target = target;
        this.$props = props;

        this.initialize();
        this.setEvent(); // Event는 Target Element에서 이루어지며, 최초 한번만 등록됨
        this.render();
    }

    initialize() {}
    
    template() {
        return ``;
    }

    render() {
        // [1] Render Target Element
        this.$target.innerHTML = this.template();

        // [2] Mounted After Rendering
        this.mounted();
    }

    setEvent() {}

    setState( nextState ) {
        this.$state = {
            ...this.$state,
            ...nextState
        }

        this.render()
    }

    mounted() {}
}