// List and Keys
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => (
        // Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
        <li key={number}>{number}</li>
    ));
    return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];

function App() {
    return (
        <ol>
            <li>
                <NumberList numbers={numbers} />
            </li>
        </ol>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
