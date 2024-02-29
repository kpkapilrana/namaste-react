import React from "react";
import ReactDOM from "react-dom/client";

// JSX HTML like - XML like Syntax (transpiled before it reaches the JS Engine) Parcel - Babel

//JSX => Babel transpiled it to React.creatElement => ReactElement-JS Object => HTMLElement(render)

// React Element
const Title = (
  <h1 className="head" tabIndex="5">
    Namaste React 🚀
  </h1>
);

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Component

const HeadingComponent = () => (
  <div id="container">
    {/* <Title /> */}
    {Title}
    <h1>Namaste React 🚀 Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
