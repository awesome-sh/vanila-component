import { Component } from "./core/Component_220330.js";

import Menu from "./components/Menu.js";
import Section from "./components/Section.js";
import Footer from "./components/Footer.js";


const menuList = [
    {
        no: 1,
        name: 'Menu 01',
        path: '/menu01',
        selected: true
    },
    {
        no: 2,
        name: 'Menu 02',
        path: '/menu02',
        selected: false
    },
    {
        no: 3,
        name: 'Menu 03',
        path: '/menu03',
        selected: false
    },
    {
        no: 4,
        name: 'Menu 04',
        path: '/menu04',
        selected: false
    },
    {
        no: 5,
        name: 'Menu 05',
        path: '/menu05',
        selected: false
    }
]

export default class App extends Component {
    initialize() {
        this.$state = {
            menu: menuList
        }
    }

    template() {
        return `
            <header></header>
            <section></section>
            <footer></footer>
        `
    }

    mounted() {
        const $headerArea = document.querySelector('header');
        const $sectionArea = document.querySelector('section');
        const $footerArea = document.querySelector('footer');

        // 첫번째 인자로 Target Element를 넣어주고
        // 두번째 인자로 props 를 넣어줄수 있고
        // 값이 아니라 작동에 필요한 메서드를 넣어준다.
        new Menu($headerArea, this.$state.menu);
        new Section($sectionArea);
        new Footer($footerArea);
    }
}