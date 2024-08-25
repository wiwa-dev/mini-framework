import { Active, All, clearCompleted, Completed, } from './components/TodoFooter.js';
import { EventSystem } from './core/events.js';
import { Router } from './core/router.js';
import { update } from './core/state.js';
import { handleKeyPresse } from './components/TodoHeader.js'

//  Initiation des evenements
export const
    EventKeyPress = new EventSystem(),
    EventRemoveTodo = new EventSystem(),
    EventToggle = new EventSystem(),
    EventEditLabel = new EventSystem(),
    EventFilter = new EventSystem(),
    EventClear = new EventSystem()

//evenment pour handleKeypress

//initialisation

// application
EventKeyPress.on('keypress', '#myHeader', (e) => { handleKeyPresse(e) });

// initialisation du router
const router = new Router


router.registerRoute('/', update())

// Lancement de l'interface accueil
router.navigateTo('/')



// Evenemet de filtre pour filtrer les todos actif, complet et all apres un click sur les different lien
EventFilter.on('click', "#all", (e) => {
    router.registerRoute('#/', All())// Enregistrement du route /
    router.navigateTo('#/')
})

EventFilter.on('click', "#active", (e) => {
    router.registerRoute('#/active', Active())/// Enregistrement du route active 
    router.navigateTo('#/active')
})

EventFilter.on('click', "#completed", (e) => {
    router.registerRoute('#/completed', Completed())// Enregistrement du route completed 
    router.navigateTo('#/completed')
})

// Event pour supprimer les todo completed

EventClear.on('click', "#clearCompleted", (e) => { clearCompleted() })