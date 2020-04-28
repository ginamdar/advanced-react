import DataApi from '../DataApi';
import  { data } from '../testData.json';

const api = new DataApi(data);

describe('DataApi', () => {
  it('should exposes articles as Object', () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('should exposes authors as Object', () => {
    const authors = api.getAuthors();
    const authorId = data.authors[0].id;
    const authorFirstName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});

