function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

// Element Variable
function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>;
}

class LoginControll extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick(e) {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick(e) {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

// Inline if with Logical && Operator
function MailBox(props) {
    const unreadMessage = props.unreadMessage;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessage.length > 0 && (
                <h2>You have {unreadMessage.length} unread message.</h2>
            )}
        </div>
    );
}
const message = ['React', 'Re: React', 'Re:Re: React'];
// It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.

// IF-ELSE inline with conditional operator
/*
render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
            The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
    );
}
*/
/*
render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
            {isLoggedIn ? (
                <LogoutButton onClick={this.handleLogoutClick} />
            ) : (
                <LoginButton onClick={this.handleLoginClick} />
            )}
        </div>
    );
}
*/

// Preventing Component from Rendering
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return <div className="warning">Warning!</div>;
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToogleClick = this.handleToogleClick.bind(this);
    }

    handleToogleClick() {
        this.setState((state) => ({
            showWarning: !state.showWarning,
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToogleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

function App() {
    return (
        <ol>
            <li>
                <ul>
                    <li>
                        <Greeting isLoggedIn={true} />
                    </li>
                    <li>
                        <Greeting isLoggedIn={false} />
                    </li>
                </ul>
            </li>
            <li>
                <LoginControll />
            </li>
            <li>
                <MailBox unreadMessage={message} />
            </li>
            <li>
                <Page />
            </li>
        </ol>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
