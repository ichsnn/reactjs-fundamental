const root = ReactDOM.createRoot(document.getElementById('root'));

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

class Welcome1 extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}



const renderer = (
    <ol>
        <li>{Welcome({name: 'Ichsan'})}</li>
        <li><Welcome name="IchsanN"></Welcome></li>
        <li><Welcome1 name="Budi"></Welcome1></li>
        <li><Welcome name="Sarah"/></li>
        <li><Welcome name="Cahal"/></li>
        <li><Welcome name="Edit"/></li>
    </ol>
)
root.render(renderer)