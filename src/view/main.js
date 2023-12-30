import '../component/char-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const charListElement = document.querySelector('char-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchChar(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    charListElement.chars = results;
  };

  function fallbackResult(message) {
    charListElement.renderError(message);
  }

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;