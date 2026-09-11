# Lecture 6: React Under the Hood

This lecture explains how React updates the UI efficiently using the **Virtual DOM, reconciliation, diffing, Fiber, and keys**.

## 1. Virtual DOM

The Virtual DOM is a lightweight JavaScript representation of the UI.

When state or props change, React creates a new UI representation and compares it with the previous one instead of rebuilding the entire DOM.

## 2. Reconciliation

**Reconciliation** is the process React uses to compare the previous UI tree with the new UI tree and determine what needs to change.

```text
State / Props change
        ↓
New UI tree
        ↓
Reconciliation
        ↓
Find changes
        ↓
Update DOM
```

## 3. Diffing

React uses a **diffing algorithm** to efficiently compare the old and new trees.

### Different element type

```jsx
<div />
```

changed to

```jsx
<span />
```

React treats them as different elements and replaces the old subtree.

### Same element type

```jsx
<div className="old" />
```

changed to

```jsx
<div className="new" />
```

React can reuse the existing DOM element and update only the changed property.

## 4. Keys

Keys help React identify elements in a list.

```jsx
users.map(user => (
  <User key={user.id} user={user} />
))
```

A stable key helps React understand which item was added, removed, or moved.

### Important

Prefer a unique and stable ID:

```jsx
key={user.id}
```

Avoid using array indexes as keys when the list can be reordered, inserted into, or deleted from.

## 5. Fiber

**Fiber** is React's internal architecture for managing rendering work.

It breaks rendering work into smaller units so React can schedule and prioritize that work efficiently.

Think of it as:

> **Fiber = units of work + scheduling of work**

## 6. Render and Commit

React's update process can be understood in two main phases:

### Render Phase

React determines what the UI should look like and performs reconciliation.

### Commit Phase

React applies the required changes to the actual DOM.

```text
State change
    ↓
Render phase
    ↓
Reconciliation / Diffing
    ↓
Commit phase
    ↓
Actual DOM update
```

## 7. Why React Is Efficient

React does not blindly update the entire DOM whenever something changes.

It uses:

- Virtual DOM
- Reconciliation
- Efficient diffing
- Fiber architecture
- Keys for list identity

Together, these mechanisms help React perform UI updates efficiently.

## 8. Quick Revision

| Concept | Meaning |
|---|---|
| Virtual DOM | JavaScript representation of the UI |
| Reconciliation | Finds what changed between UI trees |
| Diffing | Efficiently compares old and new trees |
| Fiber | Manages rendering work and scheduling |
| Key | Identifies list elements |
| Render Phase | Determines required UI changes |
| Commit Phase | Applies changes to the DOM |

## 9. Interview Answer

**How does React update the UI efficiently?**

React creates a new UI representation when state or props change. It uses reconciliation and a diffing algorithm to compare it with the previous representation. Fiber manages this rendering work efficiently, while keys help React identify list elements. Finally, React commits the required changes to the actual DOM.
