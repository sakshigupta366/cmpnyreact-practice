import React, { Component } from 'react';
class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            org:'school'
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps',props,state);        
        return {}
    }
    chnge = () => {
        this.setState({org:'lyf'})
    }
    render() {
        console.log('render');
        return (<>
            {this.state.org}
            <button onClick={this.chnge}>click</button>
            {this.state.org}
        </>)
    }
    componentDidMount() {
        console.log('ComponentDidMount');
        this.setState({
            org:'clg'
        })

    }
    // shouldComponentUpdate() {
    //     console.log('ComponentShouldUpdate');
    //     return false;

    // }
    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('getSnapshotBeforeUpdate',prevProps,prevState.org);
        return {};

    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
}
export default Lifecycle;

