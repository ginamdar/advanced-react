import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    console.log(this.state.searchTerm);
    this.props.doSearch(this.state.searchTerm);
  }, 400);

  render() {
    return (
      <input
        // ref={(input) => this.searchInput = input}
        type="search"
        placeholder="Enter Search Term here"
        onChange={this.handleChange}
        value={this.state.searchTerm}
      />
    );
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, this.doSearch);
    // console.log(this.searchInput.value);
    // console.log(this.state.searchTerm);
  }
}

export default SearchBar;
