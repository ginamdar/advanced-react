import React from 'react';
import ArticleList from '../ArticleList';
import Article from '../Article';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() } );

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a'},
      b: { id: 'b'}
    }
  };

  beforeEach(() => {
    Article.propTypes = {};
  });

  it('renders correctly', () => {
    const elem = shallow(
      <ArticleList
        articles={testProps.articles}
      />
    );
    // console.log('here', elem.props().children);
    expect(elem.props().children.length).toBe(2);
    expect(elem.find('Article').length).toBe(2);
    expect(elem).toMatchSnapshot();
  });
});
