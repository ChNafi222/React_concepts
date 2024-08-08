//-- definition-- Babel is an essential tool for modern JavaScript development that enables developers to write code using the latest features while ensuring compatibility with older environments. It helps improve code quality, maintainability, and future-proofing, making it a valuable asset in any JavaScript project.


//--- conversion--Babel can convert JSX (JavaScript XML) into regular JavaScript. JSX is a syntax extension commonly used with React that allows you to write HTML-like code within JavaScript files. Babel handles the transformation of JSX into the appropriate React.createElement calls, which are necessary for rendering React components.


// babbel is a compiler that converts next the next generation Javascript and jsx into normal javascript

const user = 'munaf'
const h2 = <h2> Hello jsx <b>munaf</b> </h2>

const root = ReactDOM.createRoot(document.querySelector('#root'))
     
root.render(h2)