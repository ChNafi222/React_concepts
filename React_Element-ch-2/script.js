// const h2  = React.createElement('h2', {className : 'subheading'},'Hello React')


// creating element
// const h2  = {
//     "$$typeof": Symbol.for("react.element"), //$$typeof for security, can't be transferred through json
// props:  { 
//     className: "subheading", 
//     id : 'subtitle',
//     children: "Hello React" },
// ref: null,
// type: "h2",

// }


// another example 
const container = React.createElement(
    'div',{
        className : 'container' , id : 'container'
    },
    [
    React.createElement('section', {
            key:1
        },
        'The library for web and native user interfaces'
    ),
    React.createElement(
        'img',{
            key: 2, src:'./react_logo.png'
        },
    ),

    // second section
    React.createElement('section',{
        key:3
    },
    [
        React.createElement('form',{
            key:1
        },[
            React.createElement('div',{className : 'input_group' },
            [
                React.createElement('label',{key:1, htmlFor: 'username'}, 'Username'),
                React.createElement('input',{key:2, id:'username'}),
            ]
            ),
    
        ]
    ),
    ]
    )
    
    ]

)

console.log(container)


// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const root = ReactDOM.createRoot(document.querySelector('#root'));
    // Render the h2 element
    root.render(container);
})
// reactDOM renders the on webpage
