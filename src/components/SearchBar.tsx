import React from 'react';

class SearchBar extends React.Component<any, any> {
    public render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <input type="text" placeholder="Image Search"/>
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;