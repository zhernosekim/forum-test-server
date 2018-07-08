import React from 'react';
import {connect} from 'react-redux';

const Message = ({title, body}) => {
    return (
        <div className="message">
            <p className="messages__title">{title}</p>
            <p className="messages__content ">{body}</p>
        </div>
    );
};

class Messages extends React.Component {
    render() {
        const messages = this.props.messages;

        return (
            <div className="messages">
                {
                    messages.map(({title, body}, id) => <Message
                        key={id}
                        title={title}
                        body={body}
                    />)
                }
                <p className="messages__count "><strong>Количество сообщений:</strong>{messages.length}</p>
            </div>
        );
    }
}

const mapStateToProps = ({
    topic: {messages},
}) => ({
    messages,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);