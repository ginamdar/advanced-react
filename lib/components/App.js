import React, {Component} from 'react';
// import Perf from 'react-addons-perf';
// if (typeof window !== 'undefined') {
//   window.Perf = Perf;
// }
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

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return(
      nextState.articles !== this.state.articles || nextState.searchTerm !== this.state.searchTerm
    );
  }

  render() {
    let { articles, searchTerm } = this.state;
    const searchReg = new RegExp(searchTerm, 'i');

    if (this.state.searchTerm) {
      articles = pickBy(articles, (v) => {
        return v.title.match(searchReg) || v.body.match(searchReg);
      });
    }
    return (
      <div>
        <TimeStamp/>
        <SearchBar/>
        <ArticleList
          articles={articles}
        />
      </div>
    );
  }
}

export default App;
