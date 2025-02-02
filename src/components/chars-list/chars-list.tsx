import { Component } from 'react';
import './chars-list.css';

import RickMortyApi from '../../services/rick-morty-api.service';
import { Character } from '../../types/characters';

import { ErrorMsg } from '../error-msg';
import { Loader } from '../loader';
import Char from '../char/char';

interface CharListProps {
  search: string;
}

interface CharsListState {
  charsList: Character[];
  loading: boolean;
  error: string;
  page: number;
}

class CharsList extends Component<CharListProps> {
  state: CharsListState = {
    charsList: [],
    loading: true,
    error: '',
    page: 1,
  };

  rickMortyService = new RickMortyApi();

  componentDidMount(): void {
    this.getCharsList();
  }

  componentDidUpdate(prevProps: Readonly<CharListProps>): void {
    if (prevProps.search !== this.props.search) {
      this.getCharsList();
    }
  }

  updateState = (newValues: Partial<CharsListState>) => {
    this.setState((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };

  getCharsList = () => {
    this.updateState({
      loading: true,
      error: '',
    });

    this.rickMortyService
      .getCharacters({
        page: this.state.page,
        name: this.props.search,
      })
      .then((data) => {
        this.updateState({
          charsList: data,
          loading: false,
        });
      })
      .catch((err) => {
        if (err instanceof Error) {
          this.updateState({
            loading: false,
            error: err.message,
          });
        }
      });
  };

  renderItems(arr: Character[]) {
    const items = arr.map((item) => {
      return <Char char={item} key={item.id} />;
    });

    return <ul className="chars-list">{items}</ul>;
  }

  render() {
    const { charsList, loading, error } = this.state;

    const items = this.renderItems(charsList);

    const errorMessage = error ? <ErrorMsg error={this.state.error} /> : null;
    const loader = loading ? <Loader /> : null;
    const content = !(loading || error) ? items : null;

    return (
      <div className="chars-container">
        {errorMessage}
        {loader}
        {content}
      </div>
    );
  }
}

export default CharsList;
