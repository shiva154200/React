# Lecture05: useEffect Hook

## 1. Introduction to useEffect

### What is useEffect?

`useEffect` is a React Hook that lets you perform **side effects** in functional components.

Side effects are operations that affect things outside the component:

- Fetching data from APIs
- Setting up timers (`setInterval`, `setTimeout`)
- Subscribing to external services
- Manually updating the DOM
- Adding event listeners

### Why Do We Need useEffect?

A React component:

1. Runs
2. Returns JSX
3. React updates the screen

The component should not perform side effects during rendering. `useEffect` lets us run side-effect code **after rendering**.

---

## 2. The Problem useEffect Solves

### React's Rendering Model

```text
Component function runs → Returns JSX → React updates the screen
```

### Fetching Data Without useEffect

```jsx
function App() {
  const [data, setData] = useState(null);

  // ❌ Don't do this during render
  fetch('https://api.example.com/users')
    .then(res => res.json())
    .then(result => setData(result));

  return <div>{data ? data.name : 'Loading...'}</div>;
}
```

Every render starts another request. The request updates state, state causes another render, and the cycle can continue indefinitely.

**Solution:** put the side effect inside `useEffect`.

---

## 3. Basic Syntax and Structure

```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Effect code

  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```

### Three Parts

1. **Effect function** — code that performs the side effect
2. **Cleanup function** — optional code that removes/stops the effect
3. **Dependency array** — controls when the effect runs

### When Does useEffect Run?

```text
1. Component renders
2. React updates the screen
3. useEffect runs
```

**Key point:** `useEffect` runs after rendering.

---

## 4. Using fetch with useEffect

### Basic Fetch Example

```jsx
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  return <div>{data ? data.name : 'Loading...'}</div>;
}
```

The empty dependency array `[]` makes the effect run after the initial mount and not again just because the component re-renders.

### Using async/await

**❌ Don't make the effect callback itself async:**

```jsx
useEffect(async () => {
  const response = await fetch('/api/data');
  const result = await response.json();
  setData(result);
}, []);
```

An async function returns a Promise, while `useEffect` expects the callback to return either nothing or a cleanup function.

**✅ Define an async function inside the effect:**

```jsx
useEffect(() => {
  async function fetchData() {
    const response = await fetch('/api/data');
    const result = await response.json();
    setData(result);
  }

  fetchData();
}, []);
```

**Alternative: IIFE**

```jsx
useEffect(() => {
  (async () => {
    const response = await fetch('/api/data');
    const result = await response.json();
    setData(result);
  })();
}, []);
```

### Loading and Error States

```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://api.github.com/users');

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
}
```

---

## 5. setInterval and setTimeout with useEffect

### Why Timers Need useEffect

Creating a timer during rendering can create a new timer on every render.

```jsx
// ❌ Bad
function Counter() {
  const [count, setCount] = useState(0);

  setInterval(() => {
    console.log('Tick');
  }, 1000);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

Every re-render can create another interval.

### Correct Way with Cleanup

```jsx
function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>Time: {time}</div>;
}
```

### What Happens?

```text
Component mounts
    ↓
Effect runs
    ↓
Interval starts
    ↓
setTime updates state every second
    ↓
Component re-renders
    ↓
Effect does not restart because dependencies did not change
    ↓
Component unmounts
    ↓
Cleanup runs → clearInterval()
```

### setTimeout Example

```jsx
function Notification() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return show ? <div>This disappears in 3 seconds!</div> : null;
}
```

---

## 6. Cleanup Functions

A cleanup function is returned from the effect.

```jsx
useEffect(() => {
  const subscription = subscribeToService();

  return () => {
    subscription.unsubscribe();
  };
}, []);
```

Think of it as:

- **Effect = Setup**
- **Cleanup = Teardown**

### When Does Cleanup Run?

Cleanup runs:

1. Before the effect runs again because a dependency changed
2. When the component unmounts

### Example

```jsx
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('🟢 Effect runs:', count);

    const id = setInterval(() => {
      console.log('⏰ Tick');
    }, 1000);

    return () => {
      console.log('🔴 Cleanup:', count);
      clearInterval(id);
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

When `count` changes, React cleans up the old effect before running the new one.

### Common Things That Need Cleanup

**Timers**

```jsx
useEffect(() => {
  const id = setInterval(() => {}, 1000);
  return () => clearInterval(id);
}, []);
```

**Event listeners**

```jsx
useEffect(() => {
  function handleScroll() {
    console.log('Scrolling...');
  }

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
```

**Subscriptions**

```jsx
useEffect(() => {
  const subscription = dataSource.subscribe();

  return () => subscription.unsubscribe();
}, []);
```

---

## 7. Dependency Arrays

The dependency array is the second argument to `useEffect`.

```jsx
useEffect(() => {
  // Effect code
}, [dependencies]);
```

### Pattern 1: Empty Array `[]`

```jsx
useEffect(() => {
  console.log('Runs after initial mount');
}, []);
```

Use it for effects that don't need to react to changing component values, such as an initial data load or setup that lasts for the component's lifetime.

### Pattern 2: Dependencies `[value]`

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

The effect runs after the initial mount and again when `count` changes.

### Pattern 3: No Dependency Array

```jsx
useEffect(() => {
  console.log('Runs after every render');
});
```

This runs after every render and should be used only when that behavior is actually required.

### Multiple Dependencies

```jsx
useEffect(() => {
  console.log('Runs when count or name changes');
}, [count, name]);
```

The effect re-runs when **any** dependency changes.

### Important Dependency Rule

If an effect reads a reactive value from the component, that value generally belongs in the dependency array.

```jsx
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);
}
```

Do not remove dependencies just to force an effect to run less often. Instead, restructure the effect or move non-effect logic outside it when appropriate.

---

## 8. Controlled vs Uncontrolled Inputs

### Uncontrolled Input

```jsx
function App() {
  return <input type="text" />;
}
```

The browser/DOM manages the input value. React can still read the value through events or refs, but the value is not stored in React state.

### Controlled Input

```jsx
function App() {
  const [name, setName] = useState('');

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

Here React state is the source of truth.

### What Happens When You Type?

```text
User types
    ↓
onChange fires
    ↓
setName(newValue)
    ↓
State changes
    ↓
Component re-renders
    ↓
React updates the input value
```

### Why Use Controlled Inputs?

**Transform input**

```jsx
<input
  value={name}
  onChange={(e) => setName(e.target.value.toUpperCase())}
/>
```

**Access value easily**

```jsx
const handleSubmit = () => {
  console.log(name);
};
```

**Reset input**

```jsx
<button onClick={() => setName('')}>Clear</button>
```

**Validate while typing**

```jsx
const handleChange = (e) => {
  const value = e.target.value;

  if (value.length <= 10) {
    setText(value);
  }
};
```

### Controlled Input Rule

```jsx
<input
  value={stateVariable}
  onChange={(e) => setState(e.target.value)}
/>
```

- `value` → React controls the displayed value
- `onChange` → updates the state

If `value` is provided without an appropriate `onChange`, the input can become effectively read-only.

---

## 9. Practice Examples

### Example 1: Fetch Users from GitHub

```jsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await fetch('https://api.github.com/users?per_page=10');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <img src={user.avatar_url} width="50" height="50" />
          <span>{user.login}</span>
        </li>
      ))}
    </ul>
  );
}
```

### Example 2: Search with Button Click

```jsx
import { useState, useEffect } from 'react';

function SearchUsers() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(10);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!shouldFetch) return;

    async function fetchUsers() {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users?per_page=${count}`
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
      setShouldFetch(false);
    }

    fetchUsers();
  }, [shouldFetch]);

  return (
    <>
      <h1>GitHub Users</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        min="1"
        max="100"
      />
      <button onClick={() => setShouldFetch(true)}>Search</button>

      {loading && <p>Loading...</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </>
  );
}
```

### Example 3: Digital Clock

```jsx
import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [showTime, setShowTime] = useState(true);

  useEffect(() => {
    if (!showTime) return;

    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [showTime]);

  return (
    <>
      <button onClick={() => setShowTime(!showTime)}>
        {showTime ? 'Hide' : 'Show'} Time
      </button>
      {showTime && <h1>Time: {time}</h1>}
    </>
  );
}
```

### Example 4: Countdown Timer

```jsx
import { useState, useEffect } from 'react';

function Countdown() {
  const [seconds, setSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || seconds === 0) return;

    const intervalId = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);

  return (
    <>
      <h1>Time: {seconds}s</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setSeconds(60)}>Reset</button>
    </>
  );
}
```

### Example 5: Auto-save / Debouncing

```jsx
import { useState, useEffect } from 'react';

function AutoSave() {
  const [text, setText] = useState('');
  const [saved, setSaved] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('Saving:', text);
      setSaved(text);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    <>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
        cols="50"
      />
      <p>Last saved: {saved}</p>
    </>
  );
}
```

---

## 10. Common Mistakes to Avoid

### Mistake 1: Calling setState During Render

```jsx
// ❌ Wrong
function App() {
  const [count, setCount] = useState(0);
  setCount(count + 1);
  return <div>{count}</div>;
}
```

This causes repeated renders. State updates should normally happen in event handlers or effects when an effect is actually appropriate.

### Mistake 2: Missing Cleanup

```jsx
// ❌ Wrong
useEffect(() => {
  setInterval(() => {
    console.log('Tick');
  }, 1000);
}, []);
```

**Fix:**

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => clearInterval(id);
}, []);
```

### Mistake 3: Making the Effect Callback async

```jsx
// ❌ Wrong
useEffect(async () => {
  const data = await fetch('/api');
}, []);
```

**Fix:**

```jsx
useEffect(() => {
  async function fetchData() {
    const response = await fetch('/api');
    const data = await response.json();
  }

  fetchData();
}, []);
```

### Mistake 4: Missing Dependencies

```jsx
// ❌ Potentially stale value
useEffect(() => {
  console.log(count);
}, []);
```

If the effect is meant to react to `count`, include it:

```jsx
useEffect(() => {
  console.log(count);
}, [count]);
```

### Mistake 5: Unnecessary Dependencies

Do not add unrelated values merely to make the dependency array larger. The dependency list should reflect the values the effect actually depends on and the intended synchronization behavior.

### Mistake 6: Frozen Controlled Input

```jsx
// ❌ No onChange
function App() {
  const [text] = useState('');
  return <input value={text} />;
}
```

**Fix:**

```jsx
function App() {
  const [text, setText] = useState('');

  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
```

---

# Summary Cheatsheet

## useEffect Patterns

```jsx
// Run after initial mount
useEffect(() => {
  // Side effect
  return () => {
    // Cleanup
  };
}, []);

// Run when dependency changes
useEffect(() => {
  // Side effect
  return () => {
    // Cleanup before re-run/unmount
  };
}, [dependency]);

// Run after every render
useEffect(() => {
  // Use only when required
});
```

## Controlled Input Pattern

```jsx
const [value, setValue] = useState('');

<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

## Key Points to Remember

1. **useEffect synchronizes with external systems** and runs after rendering.
2. **Cleanup timers, listeners, subscriptions, and connections** when necessary.
3. **Dependencies control when an effect re-runs.**
4. **Do not make the effect callback async.** Define and call an async function inside it.
5. **Controlled inputs use state as the source of truth.**
6. `[]` means the effect has no reactive dependencies; it does not mean "skip dependencies forever".
7. Avoid using `useEffect` for ordinary calculations that can be done directly during rendering.

---

## Quick Reference

### When to use useEffect?

- ✅ Fetching data from an API
- ✅ Starting/stopping timers
- ✅ Subscribing to external services
- ✅ Adding/removing event listeners
- ✅ Updating the document title
- ❌ Calculating values from state — calculate directly when possible
- ❌ Handling button clicks — use event handlers

### Cleanup is needed for

- ✅ `setInterval` / `setTimeout`
- ✅ Event listeners
- ✅ Subscriptions
- ✅ WebSocket connections
- ❌ A normal `fetch` request itself — cleanup is not automatically required, though cancellation with `AbortController` can be useful for requests that should be aborted when the effect is cleaned up
- ❌ State updates themselves

---

**End of Notes**
