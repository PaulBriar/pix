import React from 'react';

class Navbar extends React.Component<any, any> {
	state = { isLoggedIn: false };

	renderLogin = () => {
		if (this.state.isLoggedIn) {
			return <div>Logout</div>;
		}
		return <div>Login</div>;
	}

	loginState = () => {
		if (!this.state.isLoggedIn) {
			this.setState({ isLoggedIn: true })
		};
		console.log(this.state);
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
					<a className="ui item" onClick={this.loginState}>
						Logout
					</a>
				</div>
			</div>
		);
	}
}

export default Navbar;