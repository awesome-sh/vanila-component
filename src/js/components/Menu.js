import { Component } from "../core/Component_220330.js";

export default class Menu extends Component {
    
    template() {
        console.log(this)

        return this.$props.map(v => `
            <div 
                class="menu_item ${v.selected ? 'selected' : ''}
                data-no="${v.no}" 
                data-path="${v.path}"
            >
                ${v.name}
            </div>
        `).join('')
    }
}