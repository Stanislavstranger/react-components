import { ChangeEvent, Component } from 'react';
import { SearchPageState } from '../models';
import {
  searchAllAnimals,
  searchAnimalsByName,
} from '../services/LoadingDataService';
import './SearchPage.css';
import imgShip from '../assets/1.png';

class SearchPage extends Component<object, SearchPageState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchTerm') || '',
      animals: [],
      loading: true,
      error: null,
      showError: false,
      searched: true,
    };

    this.handleSearchClick();
  }

  handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.handleSearchClick();
    }
  };

  handleSearchClick = async () => {
    const { searchTerm } = this.state;
    localStorage.setItem('searchTerm', searchTerm.trim());

    this.setState({ loading: true, error: null, searched: true });

    try {
      if (searchTerm !== '') {
        const { animals } = await searchAnimalsByName(searchTerm);
        this.setState({ animals });
      } else {
        const { animals } = await searchAllAnimals();
        this.setState({ animals });
      }
    } catch (error) {
      this.setState({ error: error as Error, showError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  throwError = () => {
    const error = new Error('This is a test error');
    this.setState({ error, showError: true });
  };

  render() {
    const { searchTerm, loading, error, animals, searched } = this.state;

    return (
      <div className="container">
        <div className="top-section">
          <input
            type="text"
            value={searchTerm}
            placeholder="Select animal"
            onChange={this.handleSearchInputChange}
            onKeyPress={this.handleKeyPress}
          />
          <button
            className="search-button"
            onClick={this.handleSearchClick}
            disabled={loading}
          >
            Search
          </button>
          <button
            className="error-button"
            onClick={this.throwError}
            disabled={loading}
          >
            Throw Error
          </button>
        </div>
        <div className="bottom-section">
          {loading && searched && (
            <div className="ship-container">
              <img className="ship" src={imgShip}></img>
            </div>
          )}
          {error && <div className="error">Error: {error.message}</div>}
          {animals.length === 0 && !loading && !error && searched && (
            <div className="not-found">Nothing found</div>
          )}
          {animals.map((result) => (
            <div className="card" key={result.uid}>
              <h3>{result.name}</h3>
              <div className="description">
                {Object.entries(result).map(([key, value]) => (
                  <p key={key}>
                    <span>{key}:</span> {value.toString()}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPage;
