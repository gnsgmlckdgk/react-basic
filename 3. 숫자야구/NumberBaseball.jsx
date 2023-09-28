// import React, { Component } from 'react';
const React = require('react');
const { Component } = React;

// import Try from './Try.jsx';
const Try = require('./Try.jsx');

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

class NumberBaseball extends Component {

    state = {
        result: '',
        value: '',
        answer: getNumbers(),   // ex: [1, 3, 5, 7]
        tries: [],
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.value === this.state.answer.join('')) {
            this.setState({
                result: '홈런!',
                tries: [...this.state.tries, { try: this.state.value, result: '홈런!' }],
                // 리엑트에서는 push 쓰면 안됨(리엑트에서 변경됬는지 인식을 못함), ...array 를 해주면(이전거 복사) push처럼 됨
            });
            alert('게임을 다시 시작합니다!');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
        } else {    // 답이 틀렸으면
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')} 였습니다!`
                });
                alert('게임을 다시 시작합니다!');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for (let i = 0; i < 4; i++) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                    this.setState({
                        tries: [...this.state.tries, { try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼` }]
                    });
                }
            }
        }
    }

    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const { result, value, tries } = this.state;    // 구조분해문법으로 hooks랑 비슷하게 쓸수도 있음
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangeInput} />
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
    }

}

module.exports = NumberBaseball;