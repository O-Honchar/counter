import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export default class Counter extends Component {
    static defaultProps = {
        initialStep: 1,
        initialValue: 0,
    };

    static propTypes = {
        initialStep: PropTypes.number,
        initialValue: PropTypes.number,
    };

    state = {
        step: this.props.initialStep,
        value: this.props.initialValue,
    };

    renewStep = newStep => {
        this.setState({ step: newStep });
    }

    decrementHandler = () => {
        this.setState(prevState => ({ value: prevState.value - this.state.step }));
    };

    incrementHandler = () => {
        this.setState(prevState => ({ value: prevState.value + this.state.step }));
    };

    render() {
        const { step, value } = this.state;

        return (
            <div>
                <Input value={step} renewValue={this.renewStep} />
                <button onClick={this.decrementHandler}>Decrement</button>
                <span>{value}</span>
                <button onClick={this.incrementHandler}>Increment</button>
            </div>
        );
    }
}
