import React  from 'react';

class App extends React.Component {
    render() {
        const children = this.props.children;

        return (
            <div className="app">
                <h1>Супер тема.</h1>
                {children}
            </div>
        );
    }
}

export default App;