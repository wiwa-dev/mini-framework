import { todos, update } from '../core/state.js';
import { createElement } from '../core/dom.js';


export let [allSelect, activeSelect, completedSelect] = ["selected", "", ""]


export default function TodoFooter() {

    const allNoCompleted = todos.every(todo => !todo.completed);
    const activeCount = todos.filter(todo => !todo.completed).length;
    let display = todos.length > 0 ? 'display: block;' : 'display: none;'
    let s = activeCount > 1 ? 's' : ''


    return createElement('footer', { class: 'footer', style: display },
        createElement('span', { class: 'todo-count' }, `${activeCount} item${s} left!`),
        createElement('ul', { class: 'filters' },
            createElement('li', {}, createElement('a', { href: '#/', class: allSelect, id: "all" }, 'All')),
            createElement('li', {}, createElement('a', { href: '#/active', id: "active", class: activeSelect }, 'Active')),
            createElement('li', {}, createElement('a', { href: '#/completed', id: "completed", class: completedSelect }, 'Completed'))
        ),
        createElement('button', {
            id: "clearCompleted",
            class: 'clear-completed',
            style: !allNoCompleted ? 'display: block;' : 'display: none;'
        }, 'Clear completed')
    )
}


const clearCompleted = () => {

    todos.forEach((todo, i) => {

        if (todo.completed) {
            todos.splice(i, 1)
            clearCompleted()
        }
    });
    if (todos.length == 0) {
        All()
        return
    }
    UpdateFilter()
}

// affiche tous les todo
const All = () => {
    todos.forEach((todo) => todo.display = true)
    if (allSelect == "") {
        allSelect = 'selected'
        activeSelect = ''
        completedSelect = ''
    }
    update()
}
// affiche les todo actif ou in left
const Active = () => {

    todos.forEach((todo) => todo.display = todo.completed ? false : true)
    if (activeSelect == "") {
        activeSelect = 'selected'
        allSelect = ''
        completedSelect = ''
    }

    update()
}
// Affiche les todo complete
const Completed = () => {
    todos.forEach((todo) => todo.display = !todo.completed ? false : true)
    if (completedSelect == "") {
        completedSelect = 'selected'
        allSelect = ''
        activeSelect = ''
    }

    update()
}
// Met a jour le filtre pour les ajout et mark completed
const UpdateFilter = () => {
    if (completedSelect != "") {
        Completed()
        return
    }

    if (allSelect != "") {
        All()
        return
    }


    if (activeSelect != "") {
        Active()
    }

}

export { All, Active, Completed, UpdateFilter, clearCompleted }
