# React Lecture 3.1 — Manual React + Vite Setup

## Class Notes:
https://app.notion.com/p/Lecture-03-Introduction-to-Vite-2b33a78e0e228056a899c8eafdf55107?source=copy_link

This lecture explains **why build tools are needed** and how to manually set up a React project using **NPM and Vite** instead of relying on a project generator.

---

## 1. Why Do We Need Build Tools?

### First Thought Principle

As engineers, we should understand **why** we use a tool, not only **how** to use it.

For a small project, we can directly load JavaScript in the browser. But a real React application contains:

- JSX
- Multiple JavaScript modules
- External packages
- Many dependencies
- Development-only code
- Production optimizations

Managing all of this manually becomes difficult.

A build tool helps us:

- Process modern JavaScript
- Transform JSX
- Resolve modules and dependencies
- Optimize application code
- Create production-ready files
- Provide a development server

---

## 2. NPM — Node Package Manager

**NPM** is used to install, manage and share JavaScript packages.

Instead of manually downloading libraries, we can install them using:

```bash
npm install package-name
```

---

## 3. Creating a Project with `npm init`

To initialize a Node project manually:

```bash
npm init
```

This creates:

```text
package.json
```

### `package.json`

`package.json` stores important project information such as:

- Project name
- Version
- Scripts
- Dependencies
- DevDependencies

Example:

```json
{
  "name": "react-project",
  "version": "1.0.0",
  "scripts": {},
  "dependencies": {},
  "devDependencies": {}
}
```

---

## 4. `node_modules`

When packages are installed, NPM stores them inside:

```text
node_modules/
```

Example:

```text
project/
├── node_modules/
├── package.json
└── package-lock.json
```

`node_modules` contains the installed packages and their dependencies.

We normally do not upload `node_modules` to GitHub because it can be recreated using:

```bash
npm install
```

---

## 5. Dependencies vs DevDependencies

### Dependencies

Packages required by the application.

```bash
npm install package-name
```

They are stored under:

```json
"dependencies": {}
```

### DevDependencies

Packages required mainly during development or the build process.

```bash
npm install package-name -D
```

They are stored under:

```json
"devDependencies": {}
```

### Difference

| Dependencies | DevDependencies |
|---|---|
| Used by the application | Used mainly during development/build |
| `npm install package` | `npm install package -D` |
| Example: React | Example: Vite |

---

## 6. Installing Vite Manually

Unlike Lecture 3.2, here we **manually install and configure Vite**.

Install Vite as a development dependency:

```bash
npm install -D vite
```

Vite can also be run directly with:

```bash
npx vite
```

Vite's official documentation provides this manual installation approach. citeturn0search0

---

## 7. Installing React

React is installed separately because we are building the setup manually.

```bash
npm install react react-dom
```

Now React and ReactDOM are available as project dependencies.

---

## 8. `index.html`

In a Vite project, `index.html` is the entry point of the application.

A basic structure is:

```html
<!doctype html>
<html>
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

The important part is:

```html
<script type="module" src="/src/main.jsx"></script>
```

This loads our React entry module.

---

## 9. JSX Files

React components commonly use the `.jsx` extension when the file contains JSX.

Example:

```jsx
function App() {
    return <h1>Hello React</h1>;
}

export default App;
```

---

## 10. Import and Export

Modern React applications use JavaScript modules.

### Export

```jsx
export default function App() {
    return <h1>Hello</h1>;
}
```

### Import

```jsx
import App from "./App.jsx";
```

This allows us to split our application into multiple files and components.

---

## 11. Default and Named Exports

### Default Export

```jsx
export default function App() {
    return <h1>Welcome</h1>;
}
```

Import:

```jsx
import App from "./App.jsx";
```

### Named Export

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

## 12. `type: module`

Modern JavaScript uses ES Modules through:

```javascript
import
export
```

The project can specify:

```json
{
  "type": "module"
}
```

This tells Node.js to treat `.js` files as ES modules by default.

---

## 13. Vite Configuration

Because we are setting up the project manually, we need to understand the files and configuration instead of relying on a generated template.

A Vite project can contain a configuration file such as:

```text
vite.config.js
```

Vite uses this file when custom configuration is required.

---

## 14. NPM Scripts

Instead of typing the Vite command every time, we can define scripts inside `package.json`.

Example:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

Now we can run:

```bash
npm run dev
```

instead of directly running Vite.

---

## 15. Development Server

Run:

```bash
npm run dev
```

Vite starts a development server and serves the application locally.

The default development URL is generally:

```text
http://localhost:5173
```

---

## 16. Production Build

To create the production version:

```bash
npm run build
```

Vite processes the project and creates optimized production files inside:

```text
dist/
```

The basic workflow is:

```text
Source Code
    ↓
Vite Build
    ↓
Optimized Production Files
    ↓
dist/
    ↓
Deployment
```

---

## 17. Semantic Versioning

Packages generally follow:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
18.2.0
```

- **Major** → Breaking changes
- **Minor** → New backward-compatible features
- **Patch** → Bug fixes

---

## 18. Caret `^`

Example:

```json
"react": "^18.2.0"
```

The caret specifies a version range that allows compatible updates according to NPM's version-resolution rules.

Understanding version ranges is important because package updates can affect project stability.

---

## 19. Manual Setup Flow

The main idea of Lecture 3.1 is that we understand what happens **under the hood**.

```text
Create Project
     ↓
npm init
     ↓
package.json
     ↓
Install React + ReactDOM
     ↓
Install Vite
     ↓
Create index.html
     ↓
Create JSX files
     ↓
Configure modules
     ↓
Add NPM scripts
     ↓
npm run dev
     ↓
npm run build
     ↓
dist/
```

---

# Important Commands

```bash
# Initialize project
npm init

# Install React
npm install react react-dom

# Install Vite as a dev dependency
npm install -D vite

# Run Vite directly
npx vite

# Start development server
npm run dev

# Create production build
npm run build

# Preview production build
npm run preview
```

---

# Key Takeaways

1. Build tools are necessary for modern frontend applications.
2. NPM manages JavaScript packages and dependencies.
3. `package.json` stores project configuration and dependencies.
4. `node_modules` contains installed packages.
5. Dependencies and DevDependencies have different purposes.
6. Vite can be installed manually using `npm install -D vite`.
7. React and ReactDOM can be installed separately.
8. `index.html` acts as the entry point for a Vite application.
9. `.jsx` files allow us to write JSX.
10. `import` and `export` allow modular application development.
11. NPM scripts make development and production commands easier to run.
12. `npm run build` creates the production `dist` folder.
13. Understanding manual setup helps us understand what scaffolding tools automate.

---

# Concepts Covered

- Build Tools
- First Thought Principle
- NPM
- `npm init`
- `package.json`
- `node_modules`
- Dependencies
- DevDependencies
- React
- ReactDOM
- Vite
- Manual Vite Installation
- JSX
- `.jsx`
- ES Modules
- Import / Export
- Default Export
- Named Export
- `type: module`
- Vite Configuration
- NPM Scripts
- Development Server
- Production Build
- `dist`
- Semantic Versioning
- Caret `^`
