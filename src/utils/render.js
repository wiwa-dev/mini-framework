import { createElement } from "../core/dom.js";
import { event, router } from "../app.js";
import { handleKeyPresse } from "../components/TodoHeader.js";
import { todos } from "../core/state.js";
import { evenEditLabel, eventRemoveTodo, eventToggle } from "../components/TodoItem.js";
import { Active, All, clearCompleted, Completed, UpdateFilter } from "../components/TodoFooter.js";
import { toggleAll } from "../components/TodoMain.js";

export function Render(newTree, rootElement) {

    rootElement.innerHTML = '';

    rootElement.appendChild(newTree.render());

    eventHeader()

    eventToggleAll()

    eventClearComplet()

    eventTodo()

    const footer = createElement('footer', { class: 'info' },
        createElement('p', {}, 'Double-click to edit a todo'),
        createElement('p', {}, 'Created by (yba,adiane,belhajd,sefaye) Team'),
        createElement('p', {},
            'Part of ',
            createElement('a', { href: 'http://todomvc.com' }, 'TodoMVC')
        )
    );
    rootElement.appendChild(footer.render())

    eventFilters()

    let input = document.querySelector(".new-todo")
    input.focus()
}


function eventHeader() {
    let header = document.querySelector(".new-todo")
    event.on('keypress', header, (e) => { handleKeyPresse(e) });
}


function eventToggleAll() {
    let myLabel = document.querySelector(".toggle-all-label")
    event.on('click', myLabel, function (e) { toggleAll() })
}

function eventFilters() {
    let filters = document.querySelector(".filters")

    event.on('click', filters.children[0], (e) => {
        router.registerRoute('#/', All())// Enregistrement du route /
        router.navigateTo('#/')
    })

    event.on('click', filters.children[1], (e) => {
        router.registerRoute('#/active', Active())/// Enregistrement du route active 
        router.navigateTo('#/active')
    })

    event.on('click', filters.children[2], (e) => {
        router.registerRoute('#/completed', Completed())// Enregistrement du route completed 
        router.navigateTo('#/completed')
    })
}


function eventClearComplet() {
    // event pour supprimer les todo completed
    let clearComplet = document.querySelector(".clear-completed")
    event.on('click', clearComplet, (e) => { clearCompleted() })
}

function eventTodo() {
    todos.forEach((todo) => {
        if (todo.display) {
            eventToggle(todo)
            evenEditLabel(todo)
            eventRemoveTodo(todo)
        }

    })
}