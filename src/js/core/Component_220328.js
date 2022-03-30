export class Component {
    /**
     * Component가 갖고있어야 하는 속성
     * 1. 렌더링이 필요한 영역 = 타겟 엘리먼트 속성
     * 2. 현재 컴포넌트의 렌더링에 관여하는 상태 값 = 컴포넌트 상태 
     * 3. 컴포넌트 초기 상태값
     * 4. 컴포넌트 템플릿 설정
     * 4. 해당 컴포넌트 이벤트 관리
     * 5. State 조작은 setState() 메서드를 통해서만 이루어져야 한다
     * 6. Top - Down 부모 컴포넌트에서 자식 컴포넌트로 상태/메서드를 넘겨주기위해
     */
    $target;
    $props;
    $state;

    /**
     * Component 생성자는 Target Element 인자를 받아 셋팅한다.
     * @param {*} $target 
     */
    constructor($target) {
        this.$target = $target;
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
    }

    setEvent() {}

    setState(nextState) {
        this.$state = {
            ...this.$state,
            ...nextState
        }
        this.render();
    }
}