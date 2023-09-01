const React = require('react');
const ReactDom = require('react-dom/client');

const NumberBaseball = require('./NumberBaseball.jsx');   // class 버전

ReactDom.createRoot(document.querySelector("#root")).render(<NumberBaseball />);     // React 18버전 코드
