import TodoHeader from './TodoHeader.js';
import TodoMain from './TodoMain.js';
import TodoFooter from './TodoFooter.js';
import { createElement } from '../core/dom.js';


export default function TodoApp() {
    return createElement('section', { class: 'todoapp'},
        TodoHeader(),
        TodoMain(),
        TodoFooter()
    );
}



