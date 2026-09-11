# React 🚀

Learning **React.js** step by step through lectures by **Rohit Negi Sir**.

<p>
  <strong>React Learning Playlist:</strong>
  <a href="https://youtube.com/playlist?list=PLQEaRBV9gAFvcKA4jL9BTLBfmBSGMWSOe&si=1_uXrzkwgARW-dVJ">
    <img width="20" height="20" alt="YouTube" src="https://github.com/user-attachments/assets/bf8f1b9b-134d-487c-bd0e-3955188b4f6b" />
  </a>
</p>

## Notes
https://github.com/coderarmy-notes/mern-stack-course/tree/main/04React

## 📚 Learning Progress

| Lecture | Status | Main Topics |
|---|---|---|
| Lecture 1 | ✅ Completed | React basics, DOM, `React.createElement()`, ReactDOM |
| Lecture 2 | ✅ Completed | JSX, Components, Props, `.map()`, Rendering |
| Lecture 3.1 | ✅ Completed | Build tools, NPM, manual React + Vite setup, SemVer |
| Lecture 3.2 | ✅ Completed | Vite scaffolding, project structure, components, deployment |
| Lecture 4 | ✅ Completed | React development concepts and practical work |
| Lecture 5 | ✅ Completed | `useEffect`, side effects, fetching data, timers, cleanup, dependencies, controlled inputs |

## 🗺️ Learning Roadmap

```text
Lecture 1
React Fundamentals
      ↓
Lecture 2
JSX + Components + Props
      ↓
Lecture 3.1
Manual React + Vite Setup
      ↓
Lecture 3.2
Vite Project Scaffolding
      ↓
Lecture 4
React Development Concepts
      ↓
Lecture 5
useEffect + Side Effects
```

## 📂 Repository Structure

```text
React/
├── basic/
│   ├── Readme.md
│   ├── app.js
│   └── index.html
│
├── Lecture2/
│   ├── Readme.md
│   ├── app.js
│   └── index.html
│
├── Lecture3.1/
│   ├── Readme.md
│   ├── app.jsx
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── dist/
│
├── Lecture3.2/
│   ├── Readme.md
│   └── vite-project/
│
├── Lecture4/
│   └── Readme.md
│
├── Lecture5/
│   ├── Readme.md
│   └── vite-project/
│
└── README.md
```

## 📝 Lecture Notes

### Lecture 1 — React Basics

[Read Lecture 1 Notes](./basic/Readme.md)

Learned the basic idea behind React by moving from direct DOM manipulation to reusable functions, a simplified React/ReactDOM implementation, and finally actual React.

### Lecture 2 — JSX and Components

[Read Lecture 2 Notes](./Lecture2/Readme.md)

Covered JSX syntax, HTML vs JSX, JSX expressions, Components, Component Modularity, Props, `.map()`, `React.createElement()`, and rendering with `ReactDOM.createRoot()`.

### Lecture 3.1 — Manual React + Vite Setup

[Read Lecture 3.1 Notes](./Lecture3.1/Readme.md)

Focused on understanding the setup **from first principles**:

- Why build tools are needed
- NPM and `package.json`
- `node_modules`
- Dependencies and DevDependencies
- Manual Vite installation
- React and ReactDOM installation
- JSX and ES Modules
- `type: module`
- NPM scripts
- Semantic Versioning
- Production build and `dist/`

### Lecture 3.2 — React Project with Vite

[Read Lecture 3.2 Notes](./Lecture3.2/Readme.md)

Moved from manual setup to the practical Vite workflow:

```bash
npm create vite@latest
```

Covered:

- Vite project scaffolding
- React + JavaScript template
- Generated project structure
- `npm install`
- `App.jsx` and `main.jsx`
- Default and named exports
- Component architecture
- `npm run dev`
- `npm run build`
- `dist/`
- Netlify deployment

### Lecture 4 — React Development

[Read Lecture 4 Notes](./Lecture4/Readme.md)

Contains the concepts, examples, and practical notes covered during Lecture 4.

### Lecture 5 — useEffect Hook

[Read Lecture 5 Notes](./Lecture5/Readme.md)

Covered `useEffect` and React side effects after rendering:

- What `useEffect` is and why it is needed
- Fetching data with `fetch` and `async/await`
- Loading and error states
- `setInterval` and `setTimeout`
- Cleanup functions
- Event listeners and subscriptions
- Dependency arrays: `[]`, `[dependency]`, and no array
- Controlled vs uncontrolled inputs
- Auto-save / debouncing
- Common `useEffect` mistakes
- Practical examples and cheatsheet

## 🔑 Important Distinction — Lecture 3.1 vs 3.2

These two folders intentionally represent **two different approaches**.

| Lecture 3.1 | Lecture 3.2 |
|---|---|
| Manual setup | Vite scaffolding |
| `npm init` | `npm create vite@latest` |
| Install packages manually | Initial setup generated automatically |
| Configure the project manually | Start with a ready project structure |
| Understand what happens under the hood | Build projects quickly |

### Simple idea

```text
Lecture 3.1 → Understand the setup
Lecture 3.2 → Automate the setup
```

## 🎯 Learning Approach

- Learn the concepts from each lecture.
- Understand the **why** behind the tools and concepts.
- Practice the concepts with code.
- Maintain detailed notes for important concepts.
- Keep each lecture's code and notes organized separately.
- Build new concepts on top of previously learned concepts.

## 🚀 Current Progress

**6 lecture sections completed → React learning continues with the next lecture.**

---

⭐ This repository is my personal React learning journey, containing lecture notes, code, experiments, and practical learning progress.
