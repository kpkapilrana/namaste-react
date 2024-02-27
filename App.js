/**
 * <div id="parent">
 *          <div id="child">
 *              <h1></h1>
 *              <h1></h1>
 *          </div>
 *          <div id="child">
 *              <h1></h1>
 *              <h1></h1>
 *          </div>
 * </div>
 */

const heading = React.createElement(
    "h1",
    {id:"header"},
    "Hello World from React JS");

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement('div',{id:'child'},[
            React.createElement("h2",{id:"header"},"Hello World from React JS"),
            heading
        ]),
        React.createElement('div',{id:'child2'},[
            heading,heading
        ])
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);