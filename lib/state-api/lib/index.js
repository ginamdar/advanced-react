class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: ''
    };
  }

  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  }

  mapIntoObject(arr) {
    return arr.reduce((a, c) => {
      a[c.id] = c;
      return a;
    }, {});
  }

  getState = () => {
    return this.data;
  }
}

export default StateApi;
