import React, { Component } from 'react';
import styles from './contact.module.scss';
import happyface from '../../assets/happy.jpg';

class Contactpage extends Component {
    state = {
        email: '',
        message: '',
        show: null
    }

    submitHandler = (e) => {
        e.preventDefault();

        const { email, message } = this.state;

        if (email !== '' && message !== '') {
            this.setState({ show: 'thank you'})
        }
    };

    render() {
        const { email, message, show } = this.state;
        if(show === 'thank you') {
            return (
              <div className={styles.message}>
                <p>Thanks for reaching out!</p>
                <img src={happyface} alt="Happy face" />
              </div>
            );
        } else {
            return (
              <div className={styles.Contact}>
                <h1>Hi there!</h1>
                <p>
                  Got a job proposal for me? &nbsp; Or maybe a project idea you
                  wanna bring to life? &nbsp; I'd love to hear from you!
                </p>
                <form
                  onSubmit={(e) => this.submitHandler(e)}
                  action="mailto:origho9@gmail.com"
                  method='POST'
                  enctype="text/plain"
                >
                  <input
                    value={email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    type="email"
                    placeholder="Your email address"
                  />
                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => this.setState({ message: e.target.value })}
                  />
                  <button type="submit">Send</button>
                </form>
              </div>
            );
        }
    };
};

export default Contactpage;