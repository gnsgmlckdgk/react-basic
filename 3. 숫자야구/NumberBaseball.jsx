// import React, { Component } from 'react';
const React = require('react');
const { Component } = React;

// import Try from './Try.jsx';
const Try = require('./Try.jsx');

// 숫자 4개를 겹치지 않게 랜덤하게 만드는 함수
function getNumbers() {

}

class NumberBaseball extends Component {

    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: []
    }

    onSubmitForm = (e) => {

    }

    onChangeInput = (e) => {

    }

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {[
                        { fruit: '사과', taste: '맛있다' },
                        { fruit: '바나나', taste: '맛없다' },
                        { fruit: '포도', taste: '시다' },
                        { fruit: '귤', taste: '시다' },
                        { fruit: '감', taste: '시다' },
                        { fruit: '배', taste: '시다' },
                        { fruit: '밤', taste: '시다' },
                    ].map((v, i) => {
                        return (
                            <Try key={v.fruit + v.taste} value={v} index={i} />
                        );
                    })}
                </ul>
            </>
        );
    }

}

module.exports = NumberBaseball;