import React, {Component} from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
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

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
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
        <TimeStamp/>
        <SearchBar doSearch={this.props.store.setSearchTerm}/>
        <ArticleList
          articles={articles}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default App;
