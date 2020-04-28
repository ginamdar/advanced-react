class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }

  mapIntoObject(arr) {
    return arr.reduce((a, c) => {
      a[c.id] = c;
      return a;
    }, {});
  }

  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;
