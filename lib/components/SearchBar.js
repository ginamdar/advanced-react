import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './StoreProvider';

class SearchBar extends React.PureComponent {
  state = {
    searchTerm: ''
  };

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('Updating Search Bar');
  }

  doSearch = debounce(() => {
    console.log(this.state.searchTerm);
    this.props.store.setSearchTerm(this.state.searchTerm);
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

export default storeProvider()(SearchBar);
