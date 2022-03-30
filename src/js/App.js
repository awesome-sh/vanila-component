import { Component } from "./core/Component_220329.js";
export default class App extends Component{
    initialize() {
        this.$state = {
            isFilter: 0,
            todos: [
                {
                    no: 1,
                    todo: '컴포넌트 추상화',
                    isComplete: 2
                },
                {
                    no: 2,
                    todo: '컴포넌트 렌더링 후 마운팅 처리',
                    isComplete: 2
                }
            ]
        }
    }

    template() {
        const { isFilter, todos } = this.$state;

        if(todos.length === 0) {
            return `해야할 목록이 존재하지 않습니다.`
        } else {
            const filteredTodos = isFilter === 0 ? todos : todos.filter((v) => v.isComplete === isFilter)
            return `
                <ul>
                    ${filteredTodos.map((v) => `
                        <li data-no="${v.no}">
                            ${v.todo}
                            <button class="handleChange" data-no="${v.no}">
                                ${v.isComplete === 1 ? '취소' : '완료'}
                            </button>
                        </li>
                    `).join('')}
                </ul>
                <div class="btn-group">
                    <button class="allBtn ${isFilter === 0 ? 'selected': ''}">전체</button>
                    <button class="imcompleteBtn ${isFilter === 2 ? 'selected': ''}">할 일</button>
                    <button class="completeBtn ${isFilter === 1 ? 'selected': ''}">끝낸 일</button>
                </div>
            `
        }
    }

    /**
    * 이벤트 버블링을 통한 클릭 이벤트 처리
    * 매 Render 시 이벤트를 할당하는 방식이 아닌
    * 컴포넌트 생성시 최초 한번 이벤트 할당
    */
    setEvent() {
        this.$target.addEventListener('click', (e) => {
            const { target } = e;

            if(target.classList.contains('handleChange')) {
                console.group('>> Entered Handle Change Event!')
                const { todos } = this.$state;
                const todoNo = parseInt(target.dataset.no);

                const newTodos = todos.map((v) => {
                    if(v.no === todoNo) {
                        v.isComplete = v.isComplete === 1 ? 2 : 1;
                    }
                    return v
                })
                
                console.log('>> Change is Complete : ', newTodos);

                this.setState({
                    ...this.$state,
                    todos: newTodos
                })

                console.log('>> Complete setState!')
                console.groupEnd()
            }

            if(target.classList.contains('allBtn')) {
                console.log('>> 전체목록')

                this.setState({
                    ...this.$state,
                    isFilter: 0
                })
            }

            if(target.classList.contains('imcompleteBtn')) {
                console.log('>> 할 일')

                this.setState({
                    ...this.$state,
                    isFilter: 2
                })
            }

            if(target.classList.contains('completeBtn')) {
                console.log('>> 끝낸 일')

                this.setState({
                    ...this.$state,
                    isFilter: 1
                })
            }
        })
    }
}