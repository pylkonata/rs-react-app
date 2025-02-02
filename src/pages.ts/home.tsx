import { Component } from 'react';
import './home.css';

import getFromLS from '../utils/get-from-LS';

import { SearchPanel } from '../components/search-panel';
import { CharsList } from '../components/chars-list';

interface HomeState {
  search: string;
  error: boolean;
}

class Home extends Component {
  state: HomeState = {
    search: getFromLS('search') || '',
    error: false,
  };

  handleSearchUpdate = (value: string) => {
    this.setState((prevState) => ({
      ...prevState,
      search: value,
    }));
  };

  handleTestErrorMsg = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      throw new Error('Test error!');
    }

    return (
      <div className="home">
        <h1 className="title">Rick&Morty</h1>

        <SearchPanel
          handleSearchUpdate={this.handleSearchUpdate}
          search={this.state.search}
        />
        <main className="main">
          <CharsList search={this.state.search} />
          <button className="error-btn" onClick={this.handleTestErrorMsg}>
            Throw Error
          </button>
        </main>
      </div>
    );
  }
}

export default Home;
