const rootElement = document.getElementById("root");
console.dir(rootElement);
const root = ReactDOM.createRoot(rootElement);
//const headingElement = React.createElement("h1", {}, "Hello from React!");
//const secondHeadingElement = React.createElement("h2", {}, "Some text");
//const headerElement = React.createElement(  "header",  {},  headingElement,  secondHeadingElement);
//console.log(JSON.parse(JSON.stringify(headerElement)));
//example with JSX Syntax
const Heading = (props) => {
  return <h1>Hello from {props.title}!</h1>;
};

const JSXHeaderElement = (
  <header className="header">
    <Heading title="React" />
    <Heading title="Second" />

    <h2>Slogan here!</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed beatae
      obcaecati saepe eum rem consequuntur quo molestiae corporis illo commodi
      perferendis fugit tempora tenetur ad ullam, earum eaque sit!
    </p>
  </header>
);
root.render(JSXHeaderElement);
root.render(headerElement);
