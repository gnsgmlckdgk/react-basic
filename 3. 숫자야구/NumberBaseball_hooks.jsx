const React = require('react');
const Try = require('./Try_hook');

// 숫자 4개를 겹치지 않게 랜덤하게 만드는 함수
function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseball_hooks = () => {

    const [result, setResult] = React.useState('');
    const [value, setValue] = React.useState('');
    const [answer, setAnswer] = React.useState(getNumbers); // getNumers 로 함수를 넣으면 함수 한번만 실행됨(getNumbers() 로 넣으면 렌더링때마다 실행됨, 문제는 없음)
    const [tries, setTries] = React.useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {

            setResult('홈런!');
            setTries((prevTries) => {
                return (
                    [...prevTries, { try: value, result: '홈런!' }]
                );
            });
            // 리엑트에서는 push 쓰면 안됨(리엑트에서 변경됬는지 인식을 못함), ...array 를 해주면(이전거 복사) push처럼 됨

            alert('게임을 다시 시작합니다!');

            setValue('');
            setAnswer(getNumbers());
            setTries([]);

        } else {    // 답이 틀렸으면
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {

                const resultMsg = `10번 넘게 틀려서 실패! 답은 ${answer.join(',')} 였습니다!`;
                setResult(resultMsg);

                alert('게임을 다시 시작합니다!');

                setValue('');
                setAnswer(getNumbers());
                setTries([]);

            } else {
                for (let i = 0; i < 4; i++) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevTries) => [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼` }]);
                setValue('');
            }
        }
    }

    const onChangeInput = (e) => {
        console.log(answer);
        setValue(e.target.value);
    }

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput} />
            </form>
            <div>시도 : {tries.length}</div>
            <ul>
                {tries.map((v, i) => {
                    return (
                        <Try key={`${i + 1}차 시도 : `} tryInfo={v} />
                    )
                })}
            </ul>
        </>
    );

};

module.exports = NumberBaseball_hooks;
