import { Component, FormEvent } from 'react';
import './search-panel.css';

import saveToLS from '../../utils/save-to-LS';

interface SearchPanelProps {
  handleSearchUpdate: (value: string) => void;
  search: string;
}

class SearchPanel extends Component<SearchPanelProps> {
  state = { search: this.props.search };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveToLS('search', this.state.search);
    this.props.handleSearchUpdate(this.state.search.trim());
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="input"
          type="text"
          onChange={(e) => this.setState({ search: e.target.value })}
          value={this.state.search}
        />
        <button className="btn">Search</button>
      </form>
    );
  }
}

export default SearchPanel;
