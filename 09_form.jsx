// Controlled Components
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Nama : </label>

                    <input
                        type="text"
                        name="nama"
                        id="id"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

// The textarea tag
class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="essay">Essay : </label>
                    <textarea
                        name="essay"
                        id="essay"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

// The select tag
class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="flavor">Pick your favorite flavor: </label>
                    <select
                        name="flavor"
                        id="flavor"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

// The file input Tag
/*
in HTML, an <input type="file"> lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JavaScript via the File API.
*/
const fileInput = <input type="file" />;
/*
Because its value is read-only, it is an uncontrolled component in React. It is discussed together with other uncontrolled components later in the documentation.
*/

// Handling Multiple Input
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(this.state)
        this.setState({
            [name]: value,
        });

    }

    handleSubmit(event) {
        alert('Is going: ' + this.state.isGoing + ', Number of Guest: ' + this.state.numberOfGuests)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Is going:
                        <input
                            type="checkbox"
                            name="isGoing"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Number of guest:
                        <input
                            type="number"
                            name="numberOfGuests"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

function App() {
    return (
        <ol>
            <li>
                <NameForm />
            </li>
            <li>
                <EssayForm />
            </li>
            <li>
                <FlavorForm />
            </li>
            <li>{fileInput}</li>
            <li>
                <Reservation />
            </li>
        </ol>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
