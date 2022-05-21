// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello World</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }

// function tick() {
//     root.render(<Clock date={new Date()}/>)
// }

// Coverting a function to a class
// TO DO
// 1. Create an ES6 class, with the same name, that extends React.Component.
// 2. Add a single empty method to it called render().
// 3. Move the body of the function into the render() method.
// 4. Replace props with this.props in the render() body.
// 5. Delete the remaining empty function declaration.

class Clock extends React.Component {
    // Adding local state
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // Adding Lifecycle Methods to a Class
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    // Convert function to class
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
