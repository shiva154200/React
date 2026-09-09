# React Lecture 3.2 — React Project with Vite

This lecture shows how to create a React project using **Vite's project scaffolding command** instead of manually installing and configuring every package.

The main command introduced in this lecture is:

```bash
npm create vite@latest
```

---

## 1. Why Use Project Scaffolding?

In Lecture 3.1, we manually created and configured the project.

That helped us understand what happens behind the scenes.

However, manually creating every file and installing every package is time-consuming for every new project.

Vite provides a scaffolding tool that creates the basic project structure for us.

```text
Manual Setup
    ↓
Understand what happens under the hood

Vite Scaffolding
    ↓
Create the same type of setup quickly
```

---

# 2. Creating a React Project with Vite

Use:

```bash
npm create vite@latest
```

Vite then asks us to choose the project configuration.

For this lecture:

```text
Framework → React
Variant   → JavaScript
```

The command generates the initial project structure automatically.

---

# 3. Project Structure

A typical generated project looks similar to:

```text
vite-project/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

The exact files can vary depending on the selected template and Vite version.

---

# 4. Installing Dependencies

After creating the project, move into the project directory:

```bash
cd vite-project
```

Then install the dependencies:

```bash
npm install
```

This creates the `node_modules` folder and installs the packages listed in `package.json`.

---

# 5. Running the Development Server

Start the development server using:

```bash
npm run dev
```

Vite starts the application locally.

The development server normally runs on:

```text
http://localhost:5173
```

---

# 6. `package.json`

The generated project already contains a `package.json` file.

It contains information such as:

- Project name
- Version
- Dependencies
- DevDependencies
- NPM scripts

Typical Vite scripts include:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

# 7. `src` Folder

The `src` folder contains the application's source code.

Important files include:

```text
src/
├── App.jsx
└── main.jsx
```

### `App.jsx`

Usually contains the main React component.

Example:

```jsx
export default function App() {
    return <h1>Welcome to React</h1>;
}
```

### `main.jsx`

Acts as the entry point where the React application is rendered.

Example:

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <App />
);
```

---

# 8. Default Export and Named Export

React components can be exported in two common ways.

## Default Export

```jsx
export default function App() {
    return <h1>Welcome</h1>;
}
```

Import:

```jsx
import App from "./App.jsx";
```

## Named Export

```jsx
export function Greet() {
    return <h2>Hello</h2>;
}
```

Import:

```jsx
import { Greet } from "./App.jsx";
```

A file can contain multiple named exports.

---

# 9. Rendering Multiple Components

Multiple components can be rendered using a React Fragment:

```jsx
createRoot(document.getElementById("root")).render(
    <>
        <App />
        <Greet />
    </>
);
```

The Fragment allows multiple elements to be returned without adding an unnecessary HTML element to the DOM.

---

# 10. Component Architecture

A React application can be divided into reusable components.

For example:

```text
App
├── Header
├── Navbar
├── MainContent
└── Footer
```

This makes applications:

- Modular
- Reusable
- Easier to maintain
- Easier to understand

---

# 11. Creating Multiple Components

Example:

```jsx
export default function App() {
    return <h1>Welcome</h1>;
}

export function Greet() {
    return <h2>Hello dear friend</h2>;
}

export function Qn() {
    return <h2>How are you?</h2>;
}
```

Import them in `main.jsx`:

```jsx
import App, { Greet, Qn } from "./App.jsx";
```

Then render them:

```jsx
createRoot(document.getElementById("root")).render(
    <>
        <App />
        <Greet />
        <Qn />
    </>
);
```

---

# 12. Production Build

When development is complete, create the production build:

```bash
npm run build
```

Vite generates the production output inside:

```text
dist/
```

The general workflow is:

```text
React Source Code
       ↓
Vite
       ↓
npm run build
       ↓
dist/
       ↓
Deployment
```

---

# 13. `dist` Folder

The `dist` folder contains the files generated for production deployment.

Example:

```text
dist/
├── index.html
├── assets/
└── ...
```

These files can be deployed to a suitable static hosting platform.

---

# 14. Deployment with Netlify

The lecture demonstrates deploying the generated `dist` folder using **Netlify**.

The important concept is the deployment flow:

```text
Develop React App
       ↓
npm run build
       ↓
dist/
       ↓
Upload / Deploy
       ↓
Live Website
```

---

# 15. Lecture 3.1 vs Lecture 3.2

This distinction is important.

| Lecture 3.1 | Lecture 3.2 |
|---|---|
| Manual setup | Automated scaffolding |
| Understand setup step by step | Generate setup quickly |
| `npm init` | `npm create vite@latest` |
| Manually install packages | Template handles initial setup |
| Manually configure project | Configuration is generated |
| Focus on understanding | Focus on practical workflow |

### In short

```text
Lecture 3.1
Manual Setup
     ↓
Understand the internals

Lecture 3.2
npm create vite@latest
     ↓
Create projects quickly
```

---

# 16. Important Commands

```bash
# Create a Vite project
npm create vite@latest

# Enter the project
cd project-name

# Install dependencies
npm install

# Start development server
npm run dev

# Create production build
npm run build

# Preview production build
npm run preview
```

---

# Key Takeaways

1. Vite can scaffold a React project automatically.
2. `npm create vite@latest` creates the initial project structure.
3. We select **React** as the framework and **JavaScript** as the variant for this setup.
4. `npm install` installs the generated project's dependencies.
5. `npm run dev` starts the development server.
6. React applications can be divided into reusable components.
7. Components can use default and named exports.
8. Multiple components can be rendered using a Fragment.
9. `npm run build` creates the production `dist` folder.
10. The `dist` folder can be deployed to a static hosting platform.
11. Scaffolding saves time while Lecture 3.1 helps us understand what the scaffolding process automates.

---

# Concepts Covered

- Vite
- `npm create vite@latest`
- Project Scaffolding
- React Template
- Vite Project Structure
- `package.json`
- `node_modules`
- `src`
- `App.jsx`
- `main.jsx`
- JSX
- Import / Export
- Default Export
- Named Export
- React Components
- React Fragment
- Component Architecture
- NPM Scripts
- Development Server
- Production Build
- `dist`
- Netlify Deployment
