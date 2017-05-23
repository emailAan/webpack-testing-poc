
import React from 'react';


let a = { a: 1 }

let b = { ...a, b: 2 };

class App extends React.Component {

    render() {
        return (<div><a>React is loaded</a></div>);
    }
}


export default App;