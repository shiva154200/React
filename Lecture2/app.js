// const element1=React.createElement('h1',{id:"i1"},"Hello Srj");
// const element2=React.createElement('div',null,
//     React.createElement('h1',{id:"i1"},"Hello Srj"),
//     React.createElement('h2',{id:"i2"},"Wlcome to ReactSeries Lecture 2"))

// const root=ReactDOM.createRoot(document.getElementsByClassName('root')[0]);
 // root.render(element1);
// root.render(element2);





//JSX:Javascript Xml:Look Like Html

//                (babel)
//JSX:HTML like Code-->Reack.createElement

// const element= <h1>I am Created using babel</h1>
// const el= <div>
//     <h1>hi there</h1>
//     <h2>hello</h2>
//    </div>

// const root=ReactDOM.createRoot(document.getElementsByClassName('root')[0]);

// root.render(element);
// root.render(el)




// React Component
// function App(){
//     return(
//          <h1 className="c1">hi bhailogo i am very happy</h1> 
//     );
// }
// const root=ReactDOM.createRoot(document.getElementsByClassName('root')[0]);


// root.render(App())
// or 
// root.render(<App/>)


//we can pass argument to App

// function App(name){
//     return(
//          <h1 className="c1">hi bhailogo i am {name}</h1> 
//     );
// }
// const root=ReactDOM.createRoot(document.getElementsByClassName('root')[0]);


// root.render(App('Shiv'))


//{}inside this  u can write:-
// ->Number, string, array
//-> true false null undefined (render honge lekin kuch display nahi hoga)
//-> Object: Error



// const age= 10;
// const element = <h1>Hello Coder {(age>18)?"you can vote":"You cant vote"}</h1>
// const root = ReactDOM.createRoot (document.getElementsByClassName('root')[0])
// root.render(element);





// const courses = ["HTML", "CSS","Javascript","React"];
// // [<li>HTML</li><li>CSS</li> <li>JavaScript</li> <li>React</li>]
// const element = (
// <ul>
// {courses.map(course=><li>{course}</li>)}
// </ul>
// )
// const root = ReactDOM.createRoot(document.getElementsByClassName('root')[0]);
// root.render(element);



//you can pass arguments when you call app and use it in App()
// function App({age,name,task}){
//     return(
//     <>
//      <h2>
//         hello {name} how are you?
//       </h2>
//       <p>
//         your task is {task}
//       </p>

//        <p>
//         your age is {age}
//       </p>
      
      

//     </>
     

//     );

// }

// const root = ReactDOM.createRoot(document.getElementsByClassName('root')[0]);
// root.render(
//   <App name="Shiv" task="Push This Code To github and Create Readme.md" age={25} />
// );






//Simple Component Modularity Example

 function Header() {
        return (
            <header>
                <h1>My React Website</h1>
                <nav>
                    <a href="#">Home</a> |
                    <a href="#">About</a> |
                    <a href="#">Contact</a>
                </nav>
            </header>
        );
    }

    function Main() {
        return (
            <main>
                <h2>Hello Shiv 👋</h2>
                <p>Welcome to my React application.</p>
                <p>Currently learning React components and functions.</p>
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


function App() {

   
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(
    document.getElementsByClassName("root")[0]
);

root.render(
    <App />
);