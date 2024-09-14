import { Active, All, clearCompleted, Completed, } from './components/TodoFooter.js';
import { EventSystem } from './core/events.js';
import { Router } from './core/router.js';
import { update } from './core/state.js';
import { handleKeyPresse } from './components/TodoHeader.js'
//  Initiation des evenements
export const event = new EventSystem()




// initialisation du router
export const router = new Router


router.registerRoute('/', update())

// Lancement de l'interface accueil
router.navigateTo('/')



