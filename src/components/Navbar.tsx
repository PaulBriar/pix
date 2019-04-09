import React from 'react';
import firebase from 'firebase';
import Modal from 'react-modal';
import LoginForm from './LoginForm';
import Spinner from './Spinner';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#modal');

class Navbar extends React.Component {
	state = { loggedIn: null, modalIsOpen: false };

	openModal = () => {
		this.setState({ modalIsOpen: true });
	}

	afterOpenModal = () => {
		this.subtitle.style.color = '#f00';
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	}

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
			console.log(this.state);
    });
	}

	renderLogin = () => {
			const { loggedIn } = this.state;

			if (loggedIn) {
				return (
					<a className="ui item" onClick={() => firebase.auth().signOut() }>
						<span>Log out</span>
					</a>
				);
			} else if (!loggedIn) {
				return (
					<a className="ui item" onClick={this.openModal}>
						<span>Login</span>
					</a>

				// 	<Modal
        //   isOpen={this.state.modalIsOpen}
        //   onAfterOpen={this.afterOpenModal}
        //   onRequestClose={this.closeModal}
        //   style={customStyles}
        //   contentLabel="Example Modal"
        // 	>

        //   <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
        //   <button onClick={this.closeModal}>close</button>
        //   <div>I am a modal</div>
        //   <form>
        //     <input />
        //     <button>tab navigation</button>
        //     <button>stays</button>
        //     <button>inside</button>
        //     <button>the modal</button>
        //   </form>
        // </Modal>
				);
			} else {
				return <Spinner size="large" />;
			}
	}

	render() {
		return (
			<div className="ui secondary menu">
					<a className="item" href="#">pix</a>
					<div className="right menu">
						<div className="item">
							<div className="ui icon input">
								{this.props.children}
							</div>
						</div>
							{this.renderLogin()}
					</div>
			</div>
		);
	}
}

export default Navbar;