# React Basics — Lecture 01

##Class Notes:
https://app.notion.com/p/Lecture-01-Introduction-To-React-2b03a78e0e2280c6b345f2ee06dc25de?source=copy_link

## Basic Definition

React is a JavaScript library used to build user interfaces (UI), especially for web applications.

In simple words, **React helps us create and manage UI using reusable components.**

> Lecture 01 — Introduction to React

## About

React is a JavaScript library used to build user interfaces (UI), especially for web applications.

In simple words, **React helps us create and manage UI using reusable components.**

## Learning React.js

This repository contains my **React.js learning journey, lecture code, and practice** based on the lectures by **Rohit Negi Sir**.

## What I am Learning

* React Basics
* Components
* JSX
* Props
* State
* Events
* Hooks
* React Router
* API Integration
* And more...

## Repository Structure

```text
React/
├── basic/
│   ├── app.js
│   ├── index.html
│   └── Readme.md
└── README.md
```

## Progress

🚀 Learning React step by step and building a strong foundation for modern web development.


This folder explains the basic idea behind React by building the same UI in four steps.

## 1. Direct DOM Manipulation

The first approach uses the browser's DOM API directly:

```js
const element = document.createElement('h2');
element.textContent = 'Hello';
element.style.color = 'black';
div.append(element);
```

### What happens?

- `document.createElement()` creates an HTML element.
- `textContent` adds content.
- `style` changes CSS.
- `append()` adds the element to the page.

### Problem

If we create many elements, we repeatedly write the same code. This makes the code harder to maintain.

---

## 2. Reusable `createElement()` Function

To avoid repetition, we can put the DOM creation logic inside a function:

```js
createElement(tag, attributes, children)
```

For example:

```js
createElement(
    'h1',
    {
        style: { color: 'red', backgroundColor: 'black' },
        id: 'first',
        className: 'c1'
    },
    'Hello Shiv'
);
```

The function:

1. Creates the element.
2. Adds its content.
3. Loops through the attributes.
4. Applies styles and other properties.
5. Returns the created element.

### Why `Object.assign()` for styles?

`element.style` is already a browser-managed `CSSStyleDeclaration` object. We don't replace it; instead, we copy our style properties into it:

```js
Object.assign(element.style, attributes.style);
```

For normal properties such as `id` and `className`, direct assignment works:

```js
element[key] = attributes[key];
```

### Main idea

**Functions remove repeated code and make UI creation reusable.**

---

## 3. Building a Mini React

Next, we create our own simplified objects named `React` and `ReactDom` to understand the basic idea behind the real library.

### Our `React`

```js
React.createElement(tag, attributes, children)
```

In this simple implementation, `createElement()` directly creates a real DOM element.

### Our `ReactDom`

```js
ReactDom.render(element, root)
```

Its job is to put the created element into the selected DOM container.

So we separate two responsibilities:

```text
React      → creates UI
ReactDom   → puts UI into the DOM
```

This is only a learning implementation. It is **not** the actual internal implementation of React.

---

## 4. Using Actual React

Finally, we use the real React library loaded through the CDN in `index.html`.

```js
const ele = React.createElement(
    'h1',
    {
        className: 'r1',
        id: 'i1',
        style: {
            color: 'yellow',
            backgroundColor: 'green',
            textAlign: 'center',
            fontFamily: 'fantasy'
        }
    },
    'created using react'
);
```

### What does `React.createElement()` do?

It does **not** simply create a browser DOM element like our Method 1 implementation.

It creates a **React element object** that describes what UI we want.

Think of it as:

```text
React.createElement()
        ↓
Describes the UI
        ↓
ReactDOM
        ↓
Browser DOM
```

### Three important arguments

```js
React.createElement(type, props, children)
```

- `type` → what element we want, such as `h1`, `div`, `p`.
- `props` → attributes, classes, styles, event handlers, etc.
- `children` → content or child elements.

---

## React Styles

In React, styles are passed as a JavaScript object:

```js
style: {
    backgroundColor: 'green',
    textAlign: 'center'
}
```

CSS property names containing `-` are written in **camelCase**:

| CSS | React |
|---|---|
| `background-color` | `backgroundColor` |
| `text-align` | `textAlign` |
| `font-family` | `fontFamily` |

---

## React vs ReactDOM

A useful way to remember the difference:

**React:** describes **what the UI should look like**.

**ReactDOM:** handles **rendering that UI in the browser**.

The lecture uses:

```js
ReactDOM.render(ele, div);
```

This is the older ReactDOM API. In modern React (React 18+), applications normally use `createRoot()` instead.

---

<img width="1679" height="2139" alt="image" src="https://github.com/user-attachments/assets/4d439813-859a-43fe-9aba-9d6ca5d5da3b" />


## Quick Revision

```text
Method 1 → Direct DOM manipulation
              ↓
Method 2 → Reusable createElement() function
              ↓
Method 3 → Build a simple React + ReactDOM idea
              ↓
Method 4 → Use actual React
```

## Key Takeaways

- React is a JavaScript library for building user interfaces.
- React encourages building UI with reusable components.
- `React.createElement()` describes the UI we want.
- ReactDOM is responsible for rendering React elements into the browser DOM.
- React styles use JavaScript objects and camelCase property names.
- We can understand React better by first understanding how UI can be created manually with the DOM.

### The main concept to remember

We started with manually creating DOM elements. Then we introduced reusable functions. Finally, we reached the basic idea of React: **describe the UI and let the renderer handle putting it into the browser DOM.**
