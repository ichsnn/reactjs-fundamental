const root = ReactDOM.createRoot(document.getElementById('root'));

const element = <h1>Hello World</h1>;

// Updating the Rendered Element
function tick() {
    const element1 = (
        <div>
            <h1>Hello World</h1>
            <h2>It is {new Date().toLocaleString()}</h2>
        </div>
    );
    return element1;
}

const renderer = () => {
    const render = (
        <ol>
            <li>{element}</li>
            <li>{tick()}</li>
        </ol>
    );
    root.render(render);
};

setInterval(renderer, 1000)

// In practice, most React apps only call root.render() once. In the next sections we will learn how such code gets encapsulated into stateful components.
