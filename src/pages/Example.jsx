import { firebaseApi } from "../services/firebaseServices";

function Example() {

  async function initializePokemonData() {
    const pokemonData = [
      {
        id: 'pikachu',
        name: 'Pikachu',
        type: 'Electric',
        moves: ['Quick Attack', 'Electro Ball', 'Thunder Shock', 'Iron Tail']
      },
      {
        id: 'bulbasaur',
        name: 'Bulbasaur',
        type: 'Grass/Poison',
        moves: ['Tackle', 'Vine Whip', 'Razor Leaf', 'Solar Beam']
      },
    ];

    for (const pokemon of pokemonData) {
      try {
        await firebaseApi.createData('pokemon', pokemon.id, pokemon);
        console.log('Data created successfully.');
      } catch (error) {
        console.error('Error creating data: ', error);
      }
    }
  }

  async function getPokemon() {
    const newPokemon = {
      id: 'charmander',
      name: 'Charmander',
      type: 'Fire',
      moves: ['Quick Attack', 'Electro Ball', 'Thunder Shock', 'Iron Tail']
    }
    firebaseApi.createDoc('pokemon', newPokemon.id, newPokemon)
  }

  getPokemon()

  return (
    <div>
      hi
    </div>
  );
}

export default Example;
