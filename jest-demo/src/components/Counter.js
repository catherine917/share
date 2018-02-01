import React, { Component } from 'react';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.onClickLater = this.onClickLater.bind(this);
        this.onClickTest = this.onClickTest.bind(this);
    }
    onClickIncrementButton(){
        console.log('##### click IncrementButton');
        this.setState({count: this.state.count + 1});
        console.log('# this.state', this.state);
        this.setState({count: this.state.count + 1});
        this.setState({count: this.state.count + 1});
        this.setState({count: this.state.count + 1});
        this.setState({count: this.state.count + 1});
        console.log('# this.state', this.state);
    }
    onClickDecrementButton(){
        this.setState({count: this.state.count - 1});
    }
    onClickTest() {
        console.log('##### click test');
        setTimeout(() => {
            this.setState({count: this.state.count + 1});
            console.log('# timeout this.state', this.state);
        });
        console.log('# this.state', this.state);
        this.setState({count: this.state.count + 1});
        this.setState({count: this.state.count + 1});
        console.log('# this.state', this.state);
    }
    onClickLater() {
        console.log('##### click later');
        setTimeout(() => {
            this.onClickIncrementButton()
        });
    }
    render() {
        console.log('# render');
        console.log('# render this.state', this.state);
        return (
            <div>
            <button style={buttonStyle} onClick={this.onClickIncrementButton}>IncrementButton</button>
            <button style={buttonStyle} onClick={this.onClickTest}>Click test</button>
            <button style={buttonStyle} onClick={this.onClickLater}>Click Later</button>
             <span>count: {this.state.count}</span>
            </div>
        )
    }
}
export default Counter;
