const React = require('react');
const { useState, useRef } = React;

const WordRelayHooks = () => {

    const [word, setWord] = useState("비행기");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const inputRef = useRef(null);

    onSubmitProc = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult("정답!!");
            setWord(value);
            setValue("");
        } else {
            setResult("땡!!");
            setValue("");
        }
        inputRef.current.focus();
    }

    onChangeProc = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <div><h1>ReactHooks</h1></div>
            <div>{word}</div>
            <form onSubmit={onSubmitProc}>
                <label htmlFor='wordInput'>글자를 입력하세요.</label>
                <input ref={inputRef} type="text" value={value} onChange={onChangeProc} />
                <button id="wordInput" className="wordInput">입력!!</button>
            </form>
            <div>{result}</div>
        </>
    );

}

module.exports = WordRelayHooks;

