import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import unsplash from '../api/unsplash';
import Navbar from './Navbar';
import SearchView from './SearchView';
import SearchBar from './SearchBar';

class App extends React.Component<any, any> {
	state = {
		images: [],
};

onSearchSubmit = async (term:string) => {
		const res = await unsplash.get('/search/photos', {
				params: { query: term, per_page: 30 },
		});
		this.setState({ images: res.data.results });
};
	render() {
		return (
			<Router>
				<Navbar>
					<SearchBar onSubmit={this.onSearchSubmit}/>
				</Navbar>
				<div className="ui container">
					<SearchView images={this.state.images}/>
				</div>
			</Router>
		);
	};
};

export default App;