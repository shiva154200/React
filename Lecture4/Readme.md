# Lecture 4 — Events, DOM Manipulation & React State

This lecture introduces **event handling in JavaScript** and shows how the same counter functionality can be implemented in **React using state**.

## 📚 Parts

- **Part 1:** Event handling with JavaScript DOM
- **Part 2:** State and event handling with React

---

## Part 1 — JavaScript Event Handling

The first part builds a simple counter using vanilla JavaScript.

### Concepts Covered

- Selecting HTML elements using `getElementById()`
- Handling events with `addEventListener()`
- Handling `click` events
- Handling `wheel` events
- Using `event.deltaY`
- Updating the DOM using `textContent`
- Increasing and decreasing a counter

The counter can be changed using the **Increase** and **Decrease** buttons. Scrolling the counter also changes its value depending on the scroll direction.

---

## Part 2 — React State & Events

The second part implements the counter using React.

### Concepts Covered

- Importing `useState`
- Creating state with `useState(0)`
- Updating state using `setCount()`
- React component re-rendering
- Handling events using `onClick`
- Displaying dynamic values in JSX using `{count}`
- Using React Fragments `<>...</>`

Instead of manually selecting and updating DOM elements, React updates the UI when the state changes.

---

## 🔄 JavaScript vs React

| JavaScript | React |
|---|---|
| Manually select DOM elements | React manages the UI |
| Use `addEventListener()` | Use event props such as `onClick` |
| Update UI with `textContent` | Update state with `setCount()` |
| DOM is changed manually | UI re-renders from state |
| Normal variable stores counter | State stores counter |

---

## 🎯 Key Takeaways

- Events allow applications to respond to user actions.
- JavaScript can directly manipulate the DOM.
- React uses **state** to manage changing data.
- Updating state causes the component to re-render.
- React makes UI updates more declarative compared with manual DOM manipulation.
