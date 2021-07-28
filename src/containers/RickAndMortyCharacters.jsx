import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { fetchCharacters } from '../services/rickAndMortyApi';

export default class RickAndMortyCharacters extends Component {
    state = {
      characters: [],
      loading: true,
    };

    async componentDidMount() {
      const characters = await fetchCharacters();
      this.setState({ characters, loading: false });
    }

    render() {
      const { characters, loading } = this.state;

      if(loading) return <h1>En Route...</h1>;

      return <CharacterList characters={characters} />;
    }
}
