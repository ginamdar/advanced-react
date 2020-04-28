import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    answer: 44
  }
  myAsyncFunc = () => {
    return Promise.resolve(1805);
  }

  async componentDidMount() {
    this.setState({
      answer: await this.myAsyncFunc()
    });
  }

  render() {
    return (
      <h2>Hello Class Component {this.state.answer}</h2>
    );
  }
}

export default App;

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
