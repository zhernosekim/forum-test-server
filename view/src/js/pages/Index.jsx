import React from 'react';
import {connect} from 'react-redux';

import * as topic from '../actions/topic.js';
import Messages from '../components/Messages.jsx';
import Form from '../components/Form.jsx';

class Index extends React.Component {
    componentWillMount() {
        const {
            topic,
            loadMessages,
        } = this.props;

        if (topic.messages.length === 0 && !topic.fetch) {
            loadMessages();
        }
    }

    render() {
        return (
            <div>
                <Form/>
                <Messages/>
            </div>
        );
    }
}

const mapStateToProps = ({
    topic,
}) => ({
    topic,
});

const mapDispatchToProps = {
    ...topic,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);