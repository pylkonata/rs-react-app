import { Component } from 'react';
import './char.css';

import { Character } from '../../types/characters';

interface CharProps {
  char: Character;
}

class Char extends Component<CharProps> {
  render() {
    const { char } = this.props;
    return (
      <li className="char">
        <img className="char-img" src={char.image} alt={char.name} />
        <div className="char-name">{char.name}</div>
      </li>
    );
  }
}

export default Char;
