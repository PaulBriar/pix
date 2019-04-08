import React from 'react';
import firebase from 'firebase';
import Spinner from './Spinner';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(() => {
            this.onLoginFail();
          });
      });
  }

  onLoginFail = () => {
    this.setState({ error: 'Authentication Failed.', loading: false });
  }

  onLoginSuccess = () => {
    this.setState({
      error: '',
      loading: false,
      email: '',
      password: ''
    });
  }

  renderButton = () => {
    const { loading } = this.state;

    if (loading) {
      return <Spinner size="large" />;
    }
    return (
      <button onClick={this.onButtonPress}>
        Log In
      </button>
    );
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <div>
        <div>
          <input
            type="Email"
            value={email}
            onChange={text => this.setState({ email: text })}
            placeholder="your@email.com"
          />
        </div>
        <div>
          <input
            type="Password"
            value={password}
            onChange={text => this.setState({ password: text })}
            placeholder="password"
          />
        </div>
        <div>
          {error}
        </div>
        <div>
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

export default LoginForm;