import { todos } from '../core/state.js';
import { createElement } from '../core/dom.js';
import { UpdateFilter } from './TodoFooter.js'
import { addTodos } from '../core/state.js';
let id = 1
export default function TodoHeader() {


    return createElement('header', { class: 'header' },
        createElement('h1', {}, 'todos'),
        createElement('input', {
            "class": 'new-todo',
            placeholder: 'What needs to be done?',
            autofocus: ''
        })
    );
}


// fonction qui gere le input du header lorsque je tape quelque chose et appuis sur entrer
export function handleKeyPresse(e) {
    let inputElement = e.target
    
    let lass = inputElement.className

    if (e.key == 'Enter' && inputElement.value.trim()) {

        addTodos({ text: inputElement.value, completed: false, display: true });
        todos[0].id = id
        id++
        inputElement.value = '';

        UpdateFilter();  // Mise à jour de l'interface

        
    }
}







