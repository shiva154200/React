# Part 2 — React State & Event Handling

This part recreates the counter using **React state** instead of directly manipulating the DOM.

## 🧠 Concepts Covered

### 1. Importing `useState`

`useState` is a React Hook used to store data that can change over time.

```jsx
import { useState } from "react";
```

### 2. Creating State

The counter state is initialized with `0`:

```jsx
const [count, setCount] = useState(0);
```

Here:

- `count` → current state value
- `setCount` → function used to update the state
- `0` → initial value

### 3. Updating State

The counter is increased using `setCount()`:

```jsx
function increaseNumber() {
    setCount(count + 1);
}
```

When `setCount()` updates the state, React re-renders the component and displays the new value.

### 4. Handling Events in React

React handles events using event props such as `onClick`.

```jsx
<button onClick={increaseNumber}>
    Increment: {count}
</button>
```

### 5. Dynamic Values in JSX

JavaScript values can be inserted into JSX using curly braces `{}`.

```jsx
<p>Counter: {count}</p>
```

Whenever `count` changes, React displays the updated value automatically.

### 6. React Fragment

The Fragment syntax `<>...</>` allows multiple elements to be returned without adding an extra HTML element to the DOM.

```jsx
return (
    <>
        <p>Counter: {count}</p>
        <button onClick={increaseNumber}>Increment: {count}</button>
    </>
);
```

---

## 🔄 React Counter Flow

```text
User clicks button
       ↓
  increaseNumber()
       ↓
setCount(count + 1)
       ↓
  State changes
       ↓
 React re-renders
       ↓
 Updated counter appears
```

## 🆚 Why Use State?

In vanilla JavaScript, we manually select DOM elements and change their content. In React, we update the **state**, and React takes care of updating the UI.

### Vanilla JavaScript

```javascript
p.textContent = `Count: ${count}`;
```

### React

```jsx
setCount(count + 1);
```

React automatically reflects the new state in the UI.

---

## 🎯 Key Takeaway

**State is the data that controls a React component's UI.** When state changes, React re-renders the component so the UI stays synchronized with the data.
