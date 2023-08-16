var rootElement = document.getElementById("root");
console.dir(rootElement);
var root = ReactDOM.createRoot(rootElement);
//const headingElement = React.createElement("h1", {}, "Hello from React!");
//const secondHeadingElement = React.createElement("h2", {}, "Some text");
//const headerElement = React.createElement(  "header",  {},  headingElement,  secondHeadingElement);
//console.log(JSON.parse(JSON.stringify(headerElement)));
//example with JSX Syntax

var JSXHeaderElement = React.createElement(
  "header",
  { className: "header" },
  React.createElement(
    "h1",
    null,
    "Hello from JSX!"
  ),
  React.createElement(
    "h2",
    null,
    "Slogan here!"
  ),
  React.createElement(
    "p",
    null,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed beatae obcaecati saepe eum rem consequuntur quo molestiae corporis illo commodi perferendis fugit tempora tenetur ad ullam, earum eaque sit!"
  )
);
root.render(JSXHeaderElement);
root.render(headerElement);