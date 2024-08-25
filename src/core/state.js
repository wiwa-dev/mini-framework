import { Render } from '../utils/render.js';
import TodoApp from '../components/TodoApp.js';

// L'état global de l'application
export let todos = [];

// Fonction pour mettre à jour l'interface
// * type: 'add' 'remove' 'setAt'

export const update = () => {
    const rootElement = document.querySelector('#root');
    const newTree = TodoApp();
    Render(newTree, rootElement);
}

