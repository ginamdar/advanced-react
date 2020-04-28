import React, {Component} from 'react';
import DataApi from 'state-api';
import ArticleList from './ArticleList';
import axios from 'axios';

class App extends Component {
  state = {
    articles: {},
    authors: {}
  }
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  }

  async componentDidMount() {
    const response = await axios.get('/data');
    const api = new DataApi(response.data);
    this.setState({
      articles: api.getArticles(),
      authors: api.getAuthors()
    });
  }

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
