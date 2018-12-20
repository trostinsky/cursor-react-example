import React from 'react';
import ReactDOM from 'react-dom';
//const App =  require("./components/app")
import App from "./components/app";
import './index.css';
import * as serviceWorker from './serviceWorker';

// const virtual = {
//     diff(){
//
//     },
//     // copy DOM,
//     render(){
//
//     }
// };

// setInterval(() => {
//     const results = virtual.diff(oldVirtual);
//     results.forEach((element) => {
//         element.render();
//     })
// }, 15); // 15 ms

// const createElement = (tagName, params = {}, children = null) => {
//     const newElement = virtual.createElement(tagName);
//     for(let key in params){
//         newElement.style[key] = params[key];
//     }
//     if(!children){
//         if(children instanceof HTMLElement){
//             newElement.append(children);
//         }
//         if(typeof children === 'string'){
//             newElement.innerText = children;
//         }
//         // ...
//     }
//     virtual.main.append(newElement);
//     return newElement;
// };

// React.createElement("div", {
//     textAlign: 'center'
// });
//
// // Заменяется
// <div align="center">Test</div>
// // на:
// React.createElement("div", {
//     align: 'center'
// }, "Test");
//
// // JSX ->
// // Bro
// <div type="test">
//     <a href="https://google.com">Go to google, Bitch!</a>
// </div>
// // Ne bro
// React.createElement("div", { type: "test" },
//     React.createElement("a", {}, "Go to google, Bitch!")
// );
// <span></span>

// const Heading = (props) => {
//     // props.color
//     const styles = {
//         color: props.color,
//         textAlign: "center"
//     };
//     return <h1 style={styles}>Hello React!</h1>;
// };
// Heading({
//     color: "#57f13e"
// });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
