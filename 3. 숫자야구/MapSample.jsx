// import React, { Component } from 'react';
const React = require('react');
const { Component } = React;

// 숫자 4개를 겹치지 않게 랜덤하게 만드는 함수
function getNumbers() {

}

class MapSample extends Component {

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
                map
                <ul>
                    {['사과', '바나나', '포도', '귤', '감', '배', '밤'].map((v) => {
                        return (
                            <li>{v}</li>
                        );
                    })}
                </ul>

                map(배열로)
                <ul>
                    {[
                        ['사과', '맛있다'],
                        ['바나나', '맛없다'],
                        ['포도', '시다'],
                        ['귤', '시다'],
                        ['감', '시다'],
                        ['배', '시다'],
                        ['밤', '시다'],
                    ].map((v) => {
                        return (
                            <li><b>{v[0]}</b> = {v[1]}</li>
                        );
                    })}
                </ul>

                map(객체로)
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
                            <li key={v.fruit + v.taste}><b>{i + 1}. {v.fruit}</b> = {v.taste}</li>
                        );
                    })}
                </ul>

            </>
        );
    }

}

module.exports = NumberBaseball;