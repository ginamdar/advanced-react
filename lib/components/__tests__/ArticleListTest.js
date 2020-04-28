import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a'},
      b: { id: 'b'}
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };

  it('renders correctly', () => {
    const elem = renderer.create(
      <ArticleList
        articles={testProps.articles}
        articleActions={testProps.articleActions}
      />
    ).toJSON();
    expect(elem.children.length).toBe(2);
    expect(elem).toMatchSnapshot();
  });
});
