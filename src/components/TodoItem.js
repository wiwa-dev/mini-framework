import { todos, update } from '../core/state.js';
import { createElement } from '../core/dom.js';
import { event } from '../app.js';
import { UpdateFilter, All } from '../components/TodoFooter.js';


export default function TodoItem(todo) {

    const inputAttributes = {
        class: 'toggle',
        type: 'checkbox',
    };

    if (todo.completed) {
        inputAttributes.checked = '';
    }

    return createElement('li', {
        "data-id": todo.id,
        class: todo.completed ? 'completed' : '',
    },
        createElement('div', { class: 'view' },
            createElement('input',
                inputAttributes
            ),
            createElement('label', {}, todo.text),
            createElement('button', {
                class: 'destroy'
            })
        ),

    );
}



function toggleComplete(todo) {
    todo.completed = !todo.completed;
    UpdateFilter()
}
//fonction qui lance l'evenment completed des todos pour mark les todo a completed
export function eventToggle(todo) {
    // let test = document.que
    let toggle = document.querySelector(`li[data-id="${todo.id}"] .view .toggle`)

    event.on('change', toggle, (e) => { toggleComplete(todo) })
}



// Fonction pour supprimer un todo
export function removeTodo(todo) {
    todos.forEach((t, i) => { if (t.id == todo.id) todos.splice(i, 1) })
    if (todos.length == 0) {
        All()
        return
    }
    update()
}
// Event pour supprimer todo
export function eventRemoveTodo(todo) {
    let destroy = document.querySelector(`li[data-id="${todo.id}"] .view .destroy`);
    event.on('click', destroy, (e) => removeTodo(todo))
}



export function evenEditLabel(todo) {
    let label = document.querySelector(`li[data-id="${todo.id}"] .view label`);

    event.on('dblclick', label, (e) => {
        let li = document.querySelector(`li[data-id="${todo.id}"]`)
        li.classList.add('editing')
        let myLabel = e.target
        let input = createElement('input', { class: "edit" }).render()
        li.appendChild(input)
        input.value = myLabel.textContent

        input.focus()

        const handleKeypress = (e) => {
            if (e.key === 'Enter') {
                myLabel.textContent = input.value;
                todo.text = input.value;
                li.innerHTML = ''
                UpdateFilter()
                event.off('keypress', input, handleKeypress); // Detach keypress event
            }
        };

        const handleBlur = (e) => {
            myLabel.textContent = input.value;
            todo.text = input.value
            li.innerHTML = ''
            UpdateFilter()
            event.off('blur', input, handleBlur); // Detach blur event
        };

        // Ajouter les écouteurs d'événements
        event.on('keypress', input, handleKeypress)
        event.on('blur', input, handleBlur);

    })
}




