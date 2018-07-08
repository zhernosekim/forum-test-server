import React from 'react';
import {connect} from 'react-redux';
import * as topic from '../actions/topic.js';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.send = this.send.bind(this);

        this.state = {
            title: '',
            body: '',
        };
    }

    send(e) {
        e.preventDefault();

        const sendMessage = this.props.sendMessage;

        const {title, body} = this.state;

        sendMessage({
            title,
            body,
        });

        this.setState({
            title: '',
            body: '',
        });
    }

    render() {
        const {title, body} = this.state;

        return (
            <form className="form" onSubmit={this.send}>
                <input
                    className="form__input"
                    placeholder="Заголовок"
                    onChange={e => this.setState({title: e.target.value})}
                    value={title}
                />
                <textarea
                    className="form__text"
                    placeholder="Текст сообщения"
                    onChange={e => this.setState({body: e.target.value})}
                    value={body}
                />
                <button
                    className="form__btn"
                    disabled={!body || !title}
                >
                    Отправить
                </button>
            </form>
        );
    }
}

const mapStateToProps = ({topic}) => ({
    topic,
});

const mapDispatchToProps = {
    ...topic,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);