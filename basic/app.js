// ============================================================
// React Basics - Lecture 01
// Goal: Understand how React helps us create UI elements
// by building the idea step-by-step.
// ============================================================

// We want to create and add HTML elements dynamically.

// const div = document.querySelector('.div');


// ============================================================
// METHOD 1: Direct DOM Manipulation
// ============================================================
// Here we directly use JavaScript DOM methods to create HTML.
//
// document.createElement() -> creates a new HTML element
// textContent            -> adds text inside the element
// style                  -> changes CSS styles
// append()               -> adds the element to the page
//
// Problem: If we create many elements, the same code gets
// repeated again and again. This makes the code harder to maintain.

// const element1 = document.createElement('h2');
// element1.textContent = 'hello i am new ele1';
// element1.style.color = 'black';
// element1.style.backgroundColor = 'green';
// element1['class'] = 'c1';
// div.append(element1);

// const element2 = document.createElement('h2');
// element2.textContent = 'hello i am new ele2';
// element2.style.color = 'black';
// element2.style.backgroundColor = 'yellow';
// element2['class'] = 'c1';
// div.append(element2);


// ============================================================
// METHOD 2: Create a Reusable createElement() Function
// ============================================================
// Instead of repeating the DOM creation code, we put it inside
// a function. Now we can create different elements by simply
// passing different arguments.

// function createElement(tag, attributes, children) {
//     // Create the actual DOM element.
//     const element = document.createElement(tag);

//     // Add the text/content inside the element.
//     element.textContent = children;

//     // Loop through every property inside the attributes object.
//     for (const key in attributes) {
//         if (key === 'style') {
//             // element.style is an existing CSSStyleDeclaration object.
//             // Object.assign() copies all style properties into it.
//             // Example: {color: 'red', backgroundColor: 'black'}
//             Object.assign(element.style, attributes.style);
//         }
//         else {
//             // Normal properties such as id and className can be
//             // assigned directly to the DOM element.
//             element[key] = attributes[key];
//         }
//     }

//     return element;
// }

// const div = document.querySelector('.div');

// The function can now be reused for multiple elements.
// const el1 = createElement(
//     'h1',
//     {style:{color:"red", backgroundColor:"black"}, id:"second", className:"c1"},
//     "Hello Shiv"
// );

// const el2 = createElement(
//     'h1',
//     {style:{color:"red", backgroundColor:"black"}, id:"first", className:"c1"},
//     "Hello Shiv"
// );

// div.append(el1);
// div.append(el2);

// Main lesson: Functions help us avoid repetitive code and make
// our UI creation logic reusable.


// ============================================================
// METHOD 3: Build Our Own Mini React
// ============================================================
// Now we create objects named React and ReactDOM to understand
// the basic idea behind the real React library.
//
// React  -> responsible for creating/describing UI
// ReactDOM -> responsible for putting UI into the browser DOM
//
// NOTE: This is only a simplified version for learning.
// It is NOT how the complete React library works internally.

// const React = {
//     createElement: function(tag, attributes, children) {
//         // Create a real DOM element.
//         const element = document.createElement(tag);

//         // Add the element's content.
//         element.textContent = children;

//         // Apply all attributes passed to createElement().
//         for (const key in attributes) {
//             if (key === 'style') {
//                 // Copy style properties into the existing style object.
//                 Object.assign(element.style, attributes.style);
//             }
//             else {
//                 // Assign properties such as id and className directly.
//                 element[key] = attributes[key];
//             }
//         }

//         return element;
//     }
// };

// const ReactDom = {
//     // render() receives an element and the root/container where
//     // that element should be displayed.
//     render: function(element, root) {
//         root.append(element);
//     }
// };

// const div = document.querySelector('.div');

// React.createElement() creates the element.
// const el1 = React.createElement(
//     'h1',
//     {style:{color:"red", backgroundColor:"black"}, id:"second", className:"c1"},
//     "Hello Shiva"
// );

// const el2 = React.createElement(
//     'h1',
//     {style:{color:"red", backgroundColor:"blue"}, id:"first", className:"c1"},
//     "Hello Shiv"
// );

// ReactDom.render(el1, div);
// ReactDom.render(el2, div);

// Main lesson: We separated the responsibility of creating UI
// from the responsibility of rendering UI into the DOM.


// ============================================================
// METHOD 4: Actual React
// ============================================================
// Now we stop using our custom React and use the real React
// library loaded through the CDN in index.html.
//
// IMPORTANT DIFFERENCE:
// Our custom React.createElement() directly created a REAL DOM
// element using document.createElement().
//
// Actual React.createElement() creates a React element (a
// JavaScript object describing the UI). ReactDOM then uses that
// description to render the UI into the browser DOM.

const div = document.querySelector('.div');

// React.createElement() arguments:
// 1. First argument  -> HTML tag/type
// 2. Second argument -> props/attributes
// 3. Third argument  -> children/content
const ele = React.createElement(
    "h1",
    {
        className: "r1",
        id: 'i1',

        // In React, style is provided as a JavaScript object.
        // CSS property names that contain '-' are written in
        // camelCase, for example background-color -> backgroundColor.
        style: {
            color: "yellow",
            backgroundColor: "green",
            textAlign: "center",
            fontFamily: "fantasy"
        }
    },
    "created using react"
);

// ReactDOM is the browser renderer for React.
// render() takes the React element and displays it inside div.
//
// NOTE: ReactDOM.render() is the older API used in this lecture.
// React 18+ normally uses createRoot() instead.
ReactDOM.render(ele, div);


// ============================================================
// QUICK REVISION
// ============================================================
// Method 1 -> Directly create and manipulate DOM elements.
// Method 2 -> Put repeated DOM logic inside a reusable function.
// Method 3 -> Create a simplified React + ReactDOM ourselves.
// Method 4 -> Use the actual React library.
//
// Remember:
// React     -> describes WHAT UI we want.
// ReactDOM  -> handles rendering that UI in the browser.
// ============================================================
