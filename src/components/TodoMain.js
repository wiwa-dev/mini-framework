import { todos } from '../core/state.js';
import TodoItem from './TodoItem.js';
import { createElement } from '../core/dom.js';
import { EventSystem } from '../core/events.js';
import { UpdateFilter } from './TodoFooter.js';

export default function TodoMain() {
    return createElement('main', { class: 'main', style: "display: flex;" },
        createElement('div', { class: 'toggle-all-container' },
            createElement('input', {
                class: 'toggle-all',
                type: 'checkbox',
            }),
            createElement('label', { class: 'toggle-all-label', id: "myLabel" }, 'Mark all as complete')
        ),
        createElement('ul', { class: 'todo-list' },
            ...todos.map((todo, index) => TodoItem(todo, index))
        )
    );
}
//fonction qui mark tous les todos a completed
function toggleAll() {
    // console.log("boom");
    if (todos.length != 0) {
        const allCompleted = todos.every(todo => todo.completed);
        todos.forEach(todo => todo.completed = !allCompleted);
        UpdateFilter()
    }

}


// Event pour cocher ou decocher tous les todo

const EventToggleAll = new EventSystem

EventToggleAll.on('click', '#myLabel', function (e) { toggleAll() })

