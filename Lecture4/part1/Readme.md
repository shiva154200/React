# Part 1 — JavaScript Event Handling

This part demonstrates how to handle user interactions using **vanilla JavaScript** and update the HTML DOM directly.

## 🧠 Concepts Covered

### 1. Selecting DOM Elements

Use `getElementById()` to access elements from the HTML document.

```javascript
btn = document.getElementById('btn');
p = document.getElementById('para');
```

### 2. Event Listeners

`addEventListener()` is used to run a function when a particular event occurs.

```javascript
btn.addEventListener("click", () => {
    // event handling logic
});
```

### 3. Click Events

The project contains two buttons:

- **Increase** → increments the counter
- **Decrease** → decrements the counter

```javascript
count++;
count--;
```

### 4. Updating the DOM

`textContent` changes the text displayed inside an HTML element.

```javascript
p.textContent = `Count: ${count}`;
```

### 5. Wheel Event

A `wheel` event is used to detect mouse-wheel movement.

```javascript
p.addEventListener("wheel", function(event) {
    // handle scroll
});
```

`event.deltaY` tells the direction of vertical scrolling:

- `deltaY > 0` → scrolling downward
- `deltaY < 0` → scrolling upward

In this project:

- Scrolling down decreases the counter.
- Scrolling up increases the counter.

---

## 🔄 How It Works

1. Start the counter at `0`.
2. Select the required HTML elements.
3. Attach event listeners to the buttons and counter.
4. Change the counter when an event occurs.
5. Update the displayed value using `textContent`.

## 🎯 Key Takeaway

In vanilla JavaScript, we handle events and **manually update the DOM** whenever the data changes.
