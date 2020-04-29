import React, {Component} from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';

class App extends Component {
  state = this.props.store.getState();
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext(){
    return {
      store: this.props.store
    };
  }

  setSearchTerm = (searchTerm) => {
    this.setState({searchTerm});
  }

  render() {
    let { articles, searchTerm } = this.state;
    if (this.state.searchTerm) {
      articles = pickBy(articles, (v) => {
        return v.title.match(searchTerm) || v.body.match(searchTerm);
      });
    }
    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm}/>
        <ArticleList
          articles={articles}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default App;
