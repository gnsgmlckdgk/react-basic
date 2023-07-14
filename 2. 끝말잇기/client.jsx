const React = require('react');
//const ReactDom = require('react-dom');
const ReactDom = require('react-dom/client');

const WordRelay = require('./WordRelay');   // class 버전
const WordRelayHooks = require('./WordRelay_hooks');    // hooks 버전


//ReactDom.render(<WordRelay />, document.querySelector("#root"));
ReactDom.createRoot(document.querySelector("#root")).render(<WordRelay />); // React 18버전 코드
ReactDom.createRoot(document.querySelector("#root2")).render(<WordRelayHooks />); // React 18버전 코드
