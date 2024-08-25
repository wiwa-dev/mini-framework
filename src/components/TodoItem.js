import { todos, update } from '../core/state.js';
import { createElement } from '../core/dom.js';
import { EventEditLabel ,EventToggle,EventRemoveTodo} from '../app.js';
import { activeSelect,UpdateFilter, allSelect, completedSelect, All } from '../components/TodoFooter.js';


export default function TodoItem(todo) {

    const inputAttributes = {
        class: 'toggle',
        type: 'checkbox',
        id: `check${todo.id}`
    };

    if (todo.completed) {
        inputAttributes.checked = '';
    }

    return createElement('li', {
        id: todo.id,
        class: todo.completed ? 'completed' : '',
        style: !todo.display ? 'display:none;':''
    },
        createElement('div', { class: 'view',id:`view${todo.id}` },
            createElement('input',
                inputAttributes
            ),
            createElement('label', {id:`label${todo.id}`}, todo.text),
            createElement('button', {
                class: 'destroy',
                id:`button${todo.id}`,
                // onclick: () => removeTodo(index)
            })
        ),
        createElement('input',
            {class:"edit",type:'text',id:`input${todo.id}`},
        ),
    );
}



function toggleComplete(todo) {
    todo.completed = !todo.completed;    
    UpdateFilter()
}
//fonction qui lance l'evenment completed des todos pour mark les todo a completed
export function eventToggle(todo){
    EventToggle.on('change', `#check${todo.id}`,  (e)=> { toggleComplete(todo) })
}



// Fonction pour supprimer un todo
export function removeTodo(todo) {
    todos.forEach((t,i)=>{ if(t.id == todo.id) todos.splice(i,1) })
    if (todos.length == 0){
        All()
        return
    }  
    update()
}
// Event pour supprimer todo
export function eventRemoveTodo(todo){
 EventRemoveTodo.on('click',`#button${todo.id}`,(e)=> removeTodo(todo))
}



export function evenEditLabel(todo){
    
    EventEditLabel.on('dblclick',`#label${todo.id}`,(e)=>{
        let view = document.getElementById(`view${todo.id}`)
        let li = document.getElementById(`${todo.id}`)

        view.style.display = 'none'
        li.classList.add('editing')
        let myLabel = e.target
        const input = document.getElementById(`input${todo.id}`)
        input.style.display = 'inline'
        input.value = myLabel.textContent
        input.focus()
        
        const handleKeypress = (e) => {
            if (e.key === 'Enter') {
                myLabel.textContent = input.value;
                todos[todo.id].text = input.value;
                input.style.display = 'none';
                view.style.display = 'block';
                input.removeEventListener('keypress', handleKeypress); // Detach keypress event
            }
        };

        const handleBlur = (e) => {
            myLabel.textContent = input.value;
            todos[todo.id].text = input.value;
            input.style.display = 'none';
            view.style.display = 'block';
            input.removeEventListener('blur', handleBlur); // Detach blur event
        };

        // Ajouter les écouteurs d'événements
        input.addEventListener('keypress', handleKeypress);
        input.addEventListener('blur', handleBlur);
       
})
}


// function RemoveListener(id){
//     let document.
// }
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("aaa");
   
// });




