export class Component {
    $target; // Rendering Target Element
    $state; // State Data

    constructor(target) {
        // 생성자는 Target Element를 인자로 받아
        // 인자로 받은 target을 $target에 할당한다
        this.$target = target;
        this.initialState();
        this.render();
    }

    // Component마다 초기 State값을 셋팅한다.
    initialState() {}

    template() {
        // HTML 구성요소를 셋팅한다
        return ``;
    }

    render() {
        // Target Element에 template에 작성된 HTML 요소를 할당한다.
        this.$target.innerHTML = this.template();

        // DOM 요소추가 후 => setEvent에 할당된 이벤트들을 등록한다.
        this.setEvent();
    }

    // Event할당을 위해
    setEvent() {}

    setState(newState) {
        // State에 새로운 State Data를 추가하고
        // 렌더링을 진행해 DOM에 반영한다.
        this.$state = {
            ...this.$state,
            ...newState
        };
        this.render();
    }
}