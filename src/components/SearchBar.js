import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <label htmlFor="input">Search for videos</label>
                <input
                    type="text"
                    id="input"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
            </form>
        </div>
    );
};

// class SearchBar extends React.Component {
//     state = { term: '' };
//     onInputChange = (e) => {
//         this.setState({ term: e.target.value });
//     };

//     onFormSubmit = (e) => {
//         e.preventDefault();
//         this.props.onFormSubmit(this.state.term);
//     };

//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFormSubmit} className="ui form">
//                     <label htmlFor="input">Video search</label>
//                     <input
//                         type="text"
//                         id="input"
//                         value={this.state.term}
//                         onChange={this.onInputChange}
//                     />
//                 </form>
//             </div>
//         );
//     }
// }

export default SearchBar;
