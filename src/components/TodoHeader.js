import { todos, update } from '../core/state.js';
import { createElement } from '../core/dom.js';
import { eventToggle, evenEditLabel, eventRemoveTodo } from './TodoItem.js';
import { UpdateFilter } from './TodoFooter.js';

export default function TodoHeader() {


    return createElement('header', { class: 'header' },
        createElement('h1', {}, 'todos'),
        createElement('input', {
            class: 'new-todo',
            placeholder: 'What needs to be done?',
            autofocus: '',
            id: "myHeader"
        })
    );
}


// fonction qui gere le input du header lorsque je tape quelque chose et appuis sur entrer
export function handleKeyPresse(e) {
    let inputElement = e.target
    if (e.key == 'Enter' && inputElement.value.trim()) {
        // console.log("ok")

        todos.push({ text: inputElement.value, completed: false, display: true });
        let i = todos.length - 1
        todos[i].id = i
        inputElement.value = '';

        update();  // Mise à jour de l'interface

        //lancer l'evenemnt de checkbox completed depuis TodoItems.js

        eventToggle(todos[i])
        evenEditLabel(todos[i])
        eventRemoveTodo(todos[i])
        UpdateFilter()
    }
}







