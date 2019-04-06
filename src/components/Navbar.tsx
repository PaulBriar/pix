import React from 'react';

class Navbar extends React.Component<any, any> {
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
					<a className="ui item">
						Logout
					</a>
				</div>
			</div>
		);
	}
}

export default Navbar;