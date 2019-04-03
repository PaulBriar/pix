import React from 'react';

class SearchBar extends React.Component<any, any> {
    state = { term: '' };

    onFormSubmit = (event:any) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    componentDidMount = () =>  {
        this.props.onSubmit('new');
    };

    public render() {
        return (
            <div className="ui basic segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input
                            id="searchBar"
                            type="text"
                            placeholder="Image Search"
                            autoFocus
                            onChange={e => this.setState({ term: e.target.value})}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;