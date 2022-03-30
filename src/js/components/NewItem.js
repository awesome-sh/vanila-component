import { Component } from "../core/Component_220328.js";

export class NewItem extends Component {
    initialize() {
        this.$state = {
            isNewItem: false
        }
    }

    template() {
        const { isNewItem } = this.$state;

        if(isNewItem) {
            return `
                <div id="area">
                    <div>True</div>
                    <button class="changeBtn">Change</button>
                </div>
            `
        } else {
            return `
                <div id="area">
                    <div>False</div>
                    <button class="changeBtn">Change</button>
                </div>
            `
        }
    }

    setEvent() {
        this.$target.addEventListener('click', (e) => {
            const { classList } = e.target;
            const { isNewItem } = this.$state;

            if(classList.contains('changeBtn')) {
                console.log('>> Change Button Clicked!');

                this.setState({
                    ...this.$state,
                    isNewItem: !isNewItem
                });
            }
        })
    }

}