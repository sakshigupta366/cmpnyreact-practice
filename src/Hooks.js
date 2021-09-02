import React, { Component} from 'react';
// function Hooks() {
//     const [count, setCount] = useState(0);
//     return (
//         <>
//             <button onClick={() => setCount(count + 1)}> click me</button>
//             {count}
//         </>
//     )
// }

class Hooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    incr=() =>{
        this.setState({ count:this.state.count+1})        
    }
    render() {
        return (
            <>
                <button onClick={this.incr}>click me </button>
                {this.state.count}
            </>
        )
    }
}

export default Hooks;
