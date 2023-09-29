const React = require('react');

const Try = React.memo(({ tryInfo }) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
});
Try.displayName = 'Try';

module.exports = Try;
