const React = require('react');
const ReactDom = require('react-dom/client');

// const NumberBaseball = require('./NumberBaseball.jsx');   // class 버전
const NumberBaseball_hooks = require('./NumberBaseball_hooks.jsx');   // hooks 버전

// React 18버전 코드
// ReactDom.createRoot(document.querySelector("#root")).render(<NumberBaseball />);
ReactDom.createRoot(document.querySelector('#root_hook')).render(<NumberBaseball_hooks />);
