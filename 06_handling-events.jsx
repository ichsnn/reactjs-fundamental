function Form() {
    function handleSubmite(e) {
        e.preventDefault();
        console.log('You clicked me!');
    }

    return (
        <form onSubmit={handleSubmite}>
            <button type="submit">Submit</button>
        </form>
    );
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is neccesary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class LoggingButton extends React.Component {
    // Experiment
    handleClick = () => {
        console.log('This is: ', this);
    };

    handleClick1() {
        console.log('This is: ', this);
    }

    render() {
        return (
            <ul>
                <li>
                    <button onClick={this.handleClick}>Click Me 1</button>
                </li>
                <li>
                    <button onClick={() => this.handleClick1()}>
                        Click Me 2
                    </button>
                </li>
            </ul>
        );
    }
}

// Passing arguments to event handlers

class ButtonArg extends React.Component {
    deleteRow(id, e) {
        e.preventDefault();
        console.log('Delete id: ' + id);
    }
    render() {
        return (
            <ul>
                <li>
                    <button onClick={(e) => this.deleteRow(1, e)}>
                        Delete Row 1
                    </button>
                </li>
                <li>
                    <button onClick={this.deleteRow.bind(this, 1)}>
                        Delete Row 2
                    </button>
                </li>
            </ul>
        );
    }
}

const App = () => {
    return (
        <ol>
            <li>
                <Form />
            </li>
            <li>
                <Toggle />
            </li>
            <li>
                <LoggingButton />
            </li>
            <li>
                <ButtonArg />
            </li>
        </ol>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
