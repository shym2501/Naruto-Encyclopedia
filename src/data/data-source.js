class DataSource {
  static async searchChar(keyword) {
    const response = await fetch(`https://dattebayo-api.onrender.com/characters?name=${keyword}`);
    const responseJson = await response.json();
    if (responseJson.characters) {
      return Promise.resolve(responseJson.characters);
    } else {
      return Promise.reject(`${keyword} is not found`);
    }
  }
}

export default DataSource;
