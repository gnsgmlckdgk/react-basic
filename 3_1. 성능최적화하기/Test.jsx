import React, { Component, PureComponent } from 'react';

class Test extends PureComponent {

    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},
        array: [],
    }

    // /**
    //  * 렌더링 여부를 설정한다.
    //  * @param {*} nextProps 
    //  * @param {*} nextState 
    //  * @param {*} nextContext 
    //  * @returns 
    //  */
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (this.state.counter !== nextState.counter) {  // 현재 counter 가 다음 counter와 다르면
    //         return true;    // 렌더링 실행
    //     }
    //     return false;   // 랜더링 x
    // }

    onClick = (e) => {
        this.setState({
            array: [...this.state.array, 1],
        });
    };


    render() {
        console.log('렌더링', this.state);
        return (
            <>
                <div>
                    <button onClick={this.onClick}>클릭</button>
                </div>
            </>
        );
    }

}

export default Test;