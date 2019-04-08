import React from 'react';
import firebase from 'firebase';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import Spinner from './Spinner';

class Navbar extends React.Component {
	state = { loggedIn: null };

	componentDidMount = () => {
		firebase.initializeApp({
			apiKey: "AIzaSyDAfn133TWtMc4p1KmDNU-vJOFypCfkMoU",
			authDomain: "pix-pinterest-clone.firebaseapp.com",
			databaseURL: "https://pix-pinterest-clone.firebaseio.com",
			projectId: "pix-pinterest-clone",
			storageBucket: "pix-pinterest-clone.appspot.com",
			messagingSenderId: "627985022769"
		});

		firebase.auth().onAuthStateChanged( user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
	}

	renderLogin = () => {
			const { loggedIn } = this.state;

			if (loggedIn) {
				return <span>Log out</span>;
			} else if (!loggedIn) {
				return <span>Login</span>;
			} else {
				return <Spinner size="large" />;
			}
	}

	render() {
		return (
			<div className="ui secondary menu">
				<a className="item" href="/">pix</a>
				<div className="right menu">
					<div className="item">
						<div className="ui icon input">
							{this.props.children}
						</div>
					</div>
					<Link to="/login" className="ui item" onClick={() => firebase.auth().signOut()}>
						{this.renderLogin()}
					</Link>
				</div>

				<Route path="/login" exact component={LoginForm}/>
			</div>
		);
	}
}

export default Navbar;