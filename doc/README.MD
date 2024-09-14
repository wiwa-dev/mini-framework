
# Documentation of the Framework

This documentation will guide you through the usage of the framework, including creating elements, managing events, and manipulating the DOM.

## Features of the Framework

- **Element Creation**: Create HTML elements dynamically.
- **Event Handling**: Attach event listeners to elements using the event system.
- **State Management**: Keep track of the application state.
- **Routing**: Navigate between different views using a simple router.

## Example Code and Usage

### Creating an Element

To create an HTML element using the framework, you can use the `createElement` function. It takes the tag name, attributes, and children.

```javascript
import { createElement } from './core/dom.js';

const myDiv = createElement('div', { class: 'my-class' }, 'This is a div!');
```

This will generate a div element with the class `my-class` and text content.

### Adding an Event to a Button

To attach an event to an element, you can use the `EventSystem`. Here's how to add a click event to a button.

```javascript
import { EventSystem } from './core/events.js';

const eventSystem = new EventSystem();

const myButton = document.getElementById("myButton")

eventSystem.on('click', myButton, (e) => {
    alert('Button clicked!');
});
```

This attaches a `click` event to the element with the ID `myButton`.

### Nesting Elements

You can nest elements by passing other `createElement` calls as children:

```javascript
const nestedElements = createElement('div', { class: 'container' },
    createElement('h1', {}, 'Title'),
    createElement('p', {}, 'This is a paragraph inside a container.')
);
```

### Adding Attributes to an Element

You can add any attribute to an element by passing them as part of the `props` object.

```javascript
const link = createElement('a', { href: 'https://example.com', target: '_blank' }, 'Visit Example');
```

This will create a link that opens in a new tab.

## State Management

The framework provides a simple state manager for tracking your application data. this state is not general, it is specific to the implemented project.
Here is an example how to handle state: 


```javascript
import { StateManager } from './core/state.js';

const stateManager = new StateManager();

// Adding state
stateManager.setState({ todos: [] });

// Retrieving state
const currentState = stateManager.getState();
```

## Router

The framework includes a simple router that allows you to navigate between different views.

```javascript
import { Router } from './core/router.js';

const router = new Router();

// Define routes
router.registerRoute('/', () => {
    console.log('Home page');
});

router.registerRoute('/about', () => {
    console.log('About page');
});

// Navigate to a route
router.navigateTo('/about');
```

This example registers routes and navigates to the "About" page.

## Explanation on Why Things Work the Way They Work

1. Virtual DOM: The use of a virtual DOM with the VirtualNode class allows for an abstraction over the real DOM, making it easier to manipulate and update UI elements without directly interacting with the real DOM. This approach minimizes direct DOM manipulation, improving performance by reducing reflows and repaints in the browser.

2. Event System: The EventSystem centralizes event handling, allowing you to register events globally and dispatch them based on selectors. This approach helps decouple event listeners from specific DOM elements, making it easier to manage events in dynamic UIs where elements are created and destroyed frequently.

3. Routing: The Router class implements client-side routing using the browser’s history.pushState and popstate events. This enables single-page applications to navigate between views without full-page reloads, providing a smoother user experience. The decision to use hash-based routing (#) ensures compatibility with older browsers while simplifying the URL structure.

4. State Management: The StateManager provides a simple state management solution that allows you to store and retrieve state. It operates by maintaining a global state object that can be accessed throughout the application. The idea is to allow state to be modified and accessed predictably, reducing bugs related to inconsistent states.

## conclusion

This framework allows you to build UIs dynamically, handle events efficiently, and manage application state. It provides a basic yet flexible structure to build a single-page application.
By designing the framework this way, it becomes modular, efficient, and scalable. The abstractions simplify common tasks like event handling, state management, and routing while maintaining flexibility for developers to build complex UIs.
