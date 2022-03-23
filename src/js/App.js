import { Component } from "./core/index.js";

class App extends Component {
    initialState() {
        this.$state = {
            items: [
                'item1',
                'item2'
            ]
        }
    }

    template() {
        const { items } = this.$state;

        return `
            <ul>
                ${items.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <button>추가</button>
        `
    }

    setEvent() {
        this.$target.querySelector('button').addEventListener('click', () => {
            console.log('>> Add Button Click!');

            const { items } = this.$state;
            this.setState({
                items: [
                    ...items,
                    `item${items.length + 1}`
                ]
            })
        })
    }
}

new App(document.querySelector('#app'));