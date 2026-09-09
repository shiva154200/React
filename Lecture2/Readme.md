# React Lecture 2 — JSX and Components

## Class Notes:
https://app.notion.com/p/Lecture-02-JSX-Babel-props-and-React-Component-2b13a78e0e22804797a1ef605cb2d3fb?source=copy_link

## JSX

JSX stands for **JavaScript XML**.

It allows us to write HTML-like code inside JavaScript.

Example:

```jsx
const element = <h1>Hello React</h1>;
```

JSX makes React code easier to read and write.

### JSX and Babel

Browsers do not directly understand JSX.

**Babel** converts JSX into normal JavaScript, which React can understand.

For example:

```jsx
const element = <h1>Hello React</h1>;
```

is converted roughly into:

```js
const element = React.createElement("h1", null, "Hello React");
```

So we can think of it as:

```text
JSX → Babel → React.createElement()
```

---

## Label

In JSX, HTML attributes are sometimes written differently.

For example, in HTML:

```html
<label for="name">Name</label>
```

In JSX, we use:

```jsx
<label htmlFor="name">Name</label>
```

Similarly, the HTML `class` attribute becomes:

```jsx
className
```

Example:

```jsx
<h1 className="heading">Hello React</h1>
```

### Why?

`class` and `for` have special meanings in JavaScript, so JSX uses:

* `className` instead of `class`
* `htmlFor` instead of `for`

---

## Difference Between HTML and JSX Syntax

JSX looks very similar to HTML, but there are some differences.

| HTML                                              | JSX                                 |
| ------------------------------------------------- | ----------------------------------- |
| `class`                                           | `className`                         |
| `for`                                             | `htmlFor`                           |
| Can write multiple root elements in some contexts | Must return one parent/root element |
| Attribute values are usually strings              | JavaScript expressions use `{}`     |
| HTML is markup                                    | JSX is JavaScript syntax extension  |

Example:

### HTML

```html
<h1 class="title">Hello</h1>
```

### JSX

```jsx
<h1 className="title">Hello</h1>
```

---

## In JSX

### Wrong Syntax

We cannot directly return multiple sibling elements without a parent.

```jsx
const element =
    <h1>Hi there</h1>
    <h2>Hello</h2>
```

This is invalid because there is no single parent/root element.

### Correct Syntax

Wrap them inside a parent element:

```jsx
const element = (
    <div>
        <h1>Hi there</h1>
        <h2>Hello</h2>
    </div>
);
```

We can also use a **React Fragment**:

```jsx
const element = (
    <>
        <h1>Hi there</h1>
        <h2>Hello</h2>
    </>
);
```

The Fragment allows multiple elements without adding an extra `<div>` to the DOM.

---

## JSX Expressions `{}`

We can write JavaScript expressions inside JSX using `{}`.

Example:

```jsx
const name = "Shivam";

const element = <h1>Hello {name}</h1>;
```

We can use:

* Numbers
* Strings
* Arrays
* Variables
* Expressions
* Ternary operators
* Function results

Example:

```jsx
const age = 20;

const element = (
    <h1>
        {age > 18 ? "You can vote" : "You cannot vote"}
    </h1>
);
```

### Important

Objects cannot be directly rendered as JSX children.

---

## React Component

A **component** is a reusable piece of UI.

In React, components are commonly created using JavaScript functions.

Example:

```jsx
function App() {
    return (
        <h1>Hello React</h1>
    );
}
```

We can render the component using:

```jsx
root.render(<App />);
```

---

## Component Modularity

A large React application can be divided into smaller components.

For example:

```jsx
function Header() {
    return (
        <header>
            <h1>My React Website</h1>
        </header>
    );
}

function Main() {
    return (
        <main>
            <h2>Hello Shiv 👋</h2>
            <p>Welcome to my React application.</p>
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <p>© 2026 My React Website</p>
        </footer>
    );
}
```

Then we can combine these components inside `App`:

```jsx
function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}
```

This makes the application:

* Easier to understand
* Easier to maintain
* Reusable
* More organized

---

## Props

**Props** are used to pass data from one component to another.

Example:

```jsx
function App({ age, name, task }) {
    return (
        <>
            <h2>Hello {name}, how are you?</h2>

            <p>Your task is {task}</p>

            <p>Your age is {age}</p>
        </>
    );
}
```

We can pass props like this:

```jsx
<App
    name="Shiv"
    task="Push this code to GitHub"
    age={25}
/>
```

Here:

```text
name → "Shiv"
task → "Push this code to GitHub"
age  → 25
```

The component receives these values as props.

---

## `.map()` for Rendering Lists

JavaScript's `.map()` method can be used to render multiple elements.

Example:

```jsx
const courses = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

const element = (
    <ul>
        {courses.map(course => (
            <li key={course}>{course}</li>
        ))}
    </ul>
);
```

The `map()` method goes through each item and creates a `<li>` element.

---

## React.createElement()

Before JSX, React elements can be created using:

```js
React.createElement()
```

Example:

```js
const element = React.createElement(
    "h1",
    null,
    "Hello React"
);
```

It can also be used to create nested elements:

```js
const element = React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hi there"),
    React.createElement("h2", null, "Hello")
);
```

JSX makes this easier to write:

```jsx
const element = (
    <div>
        <h1>Hi there</h1>
        <h2>Hello</h2>
    </div>
);
```

---

## Rendering

To display React elements on the webpage, we need a React root.

```js
const root = ReactDOM.createRoot(
    document.getElementsByClassName("root")[0]
);
```

Then we render our component:

```jsx
root.render(<App />);
```

---

## Important JavaScript Note

When returning JSX from a function, keep the opening `(` on the same line as `return`.

### Wrong

```jsx
function App() {
    return
    (
        <h1>Hello</h1>
    );
}
```

JavaScript may treat the `return` as complete because of **Automatic Semicolon Insertion (ASI)**.

### Correct

```jsx
function App() {
    return (
        <h1>Hello</h1>
    );
}
```

---

## Lecture 2 — Key Takeaways

```text
JSX
 ↓
HTML-like syntax inside JavaScript
 ↓
Babel converts JSX
 ↓
React.createElement()
 ↓
React Element
 ↓
Component
 ↓
Props
 ↓
Render using ReactDOM
```

### Concepts Covered

* JSX
* Babel
* HTML vs JSX
* `className` and `htmlFor`
* JSX expressions `{ }`
* Parent/root element
* React Fragment `<> </>`
* React Components
* Component modularity
* Props
* `.map()` for lists
* `React.createElement()`
* Rendering with `ReactDOM.createRoot()`
* JavaScript `return` and ASI

---

## Next Lecture

The next step is to learn more about:

* State
* Events
* Event handlers
* `useState`
* Dynamic UI updates
* Component interaction
