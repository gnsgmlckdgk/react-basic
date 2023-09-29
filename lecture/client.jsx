import React, { Component } from 'react';
import ReactDom from 'react-dom/client';

import Test from './Test.jsx';

// React 18버전 코드
ReactDom.createRoot(document.querySelector("#root")).render(<Test />);
