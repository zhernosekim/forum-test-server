import React  from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const children = this.props.children;

        return (
            <div className="app">
                {children}
            </div>
        );
    }
}

export default App;