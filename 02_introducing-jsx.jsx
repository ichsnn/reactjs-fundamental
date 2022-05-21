const root = ReactDOM.createRoot(document.getElementById('root'));

// This funny tag syntax is neither a string nor HTML.
const element = <h1>Hello, World</h1>;
// It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

// Embeding expression in JSX
const name = 'Ichsan Nulmuhlis';
const element1 = <h1>Hello, {name}</h1>;

function formatUsername(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
};

const element2 = <h1>Hello, {formatUsername(user)}</h1>;

// JSX is an expression too
function getGreeting(user) {
    if (user) {
        return element2;
    }
    return <h1>Hello Stranger</h1>;
}

// Specifying attributes with JSX
const element3 = <a href="https://github.com/ichsnn">Link</a>;
const element4 = (
    <img
        src="https://avatars.githubusercontent.com/u/72180474?v=4"
        alt="github-ichsnn"
        width={100}
        height={100}
    />
);

// Specifying children with JSX
const element5 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

// JSX prevents injection attacks
const title = 'Inputan Kata';
const element6 = <h1>{title}</h1>;

// JSX represents objects
const element7 = React.createElement(
    'h1',
    {
        className: 'greeting',
        title: 'Hello World',
    },
    'Hello World'
);

const renderer = (
    <ol>
        <li>{element}</li>
        <li>{element1}</li>
        <li>{element2}</li>
        <li>{getGreeting()}</li>
        <li>{element3}</li>
        <li>{element4}</li>
        <li>{element5}</li>
        <li>{element6}</li>
        <li>{element7}</li>
    </ol>
);

root.render(renderer);
