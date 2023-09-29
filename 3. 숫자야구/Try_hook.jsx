const React = require('react');

//const Try = (props) => {
const Try = ({ tryInfo }) => {  // props 오는 자리에 구조분해문법
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
};

module.exports = Try;
