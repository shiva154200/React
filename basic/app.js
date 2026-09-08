// const div = document.querySelector('.div');

// Method 1
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

// Method 2
// function createElement(tag, attributes, children) {
//     const element = document.createElement(tag);
//     element.textContent = children;

//     for (const key in attributes) {
//         if (key === 'style') {
//             Object.assign(element.style, attributes.style);
//         }
//         else {
//             element[key] = attributes[key];
//         }
//     }

//     return element;
// }

// const div = document.querySelector('.div');

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

// Method 3:Custom React
// const React = {
//     createElement: function(tag, attributes, children) {
//         const element = document.createElement(tag);
//         element.textContent = children;

//         for (const key in attributes) {
//             if (key === 'style') {
//                 Object.assign(element.style, attributes.style);
//             }
//             else {
//                 element[key] = attributes[key];
//             }
//         }

//         return element;
//     }
// };

// const ReactDom = {
//     render: function(element, root) {
//         root.append(element);
//     }
// };

// const div = document.querySelector('.div');

// const el1 = React.createElement(
//     'h1',
//     {style:{color:"red", backgroundColor:"black"}, id:"second", className:"c1"},
//     "Hello Shiva"
// );
// console.log(el1)
// const el2 = React.createElement(
//     'h1',
//     {style:{color:"red", backgroundColor:"blue"}, id:"first", className:"c1"},
//     "Hello Shiv"
// );

// ReactDom.render(el1, div);
// ReactDom.render(el2, div);

// Method 4

const div = document.querySelector('.div');

const ele1 = React.createElement(
    "h1",
    {
        className: "r1",
        id: 'i1',
        style: {
            color: "yellow",
            backgroundColor: "green",
            textAlign: "center",
            fontFamily: "fantasy"
        }
    },
    "el1 created using react"
);

const ele2 = React.createElement(
    "h2",
    {
        className: "r1",
        id: 'i2',
        style: {
            color: "yellow",
            backgroundColor: "green",
            textAlign: "center",
            
        }
    },
    "el2 created using react"
);

//old method
// ReactDOM.render(ele, div);



// //New Method
// const root=ReactDOM.createRoot(div);
// root.render(ele1);
// root.render(ele2);

//Note:The second render() replaces the first UI. It doesn't append ele2 below ele1.




//for displaying both el1 and el2

const container = React.createElement(
    "div",
    null,
    ele1,
    ele2
);

const root = ReactDOM.createRoot(div);

root.render(container);


