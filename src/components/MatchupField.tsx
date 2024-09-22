import './MatchupField.css';
import FightScreen from './FightScreen';

import { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import { fetchPokemonData } from '../util/utils';

interface MatchupFieldProps {
  slot1: number;
  slot2: number;
}

interface Pokemon {
  name: string;
  id: number;
  weight: number;
  sprite: string;
  backSprite: string;
}

export default function MatchupField({ slot1, slot2}: MatchupFieldProps) {
  const [pokemon1, setPokemon1] = useState<Pokemon | null>(null); // Set to a single Pokemon or null
  const [pokemon2, setPokemon2] = useState<Pokemon | null>(null);
  const [fightScreen, setFightScreen] = useState<boolean>(false);

  // Fetch data for slot1 when it changes and is non-zero
  useEffect(() => {
    if (slot1 !== 0) {
      fetchPokemonData([], slot1 - 1, slot1).then((updatedPokemon) => {
        setPokemon1(updatedPokemon[0]); // Assuming fetchPokemonData returns an array, get the first element
      });
    }
  }, [slot1]);

  // Fetch data for slot2 when it changes and is non-zero
  useEffect(() => {
    if (slot2 !== 0) {
      fetchPokemonData([], slot2 - 1, slot2).then((updatedPokemon) => {
        setPokemon2(updatedPokemon[0]); // Assuming fetchPokemonData returns an array, get the first element
      });
    }
  }, [slot2]);

  return (
    <div className="matchup-container">
      {!fightScreen ?
      <div className="slot-one">
        {slot1 === 0 ? (
          <p>Choose a Pokémon!</p>
        ) : (
          // Render PokeCard when pokemon1 is available
          pokemon1 && (
            <PokeCard
              name={pokemon1.name}
              id={pokemon1.id}
              weight={pokemon1.weight}
              sprite={pokemon1.sprite}
              backSprite={pokemon1.backSprite}
              // not needed, but keeps the JS overlords happy :)
              setSlot1={() => {}}
              setSlot2={() => {}}
            />
          )
        )}
      </div>
      : null}

      {!fightScreen ? 
      <div id="vs-txt">
      <p id="vs-text">vs</p>
      <button id="fight-button" onClick={ () => {
        setFightScreen(true);
      }}>FIGHT</button>
      </div>
      : null}

      {!fightScreen ? 
      <div className="slot-two">
        {slot2 === 0 ? (
          <p>Choose a Pokémon!</p>
        ) : // Render PokeCard when pokemon1 is available
        pokemon2 && (
          <PokeCard
            name={pokemon2.name}
            id={pokemon2.id}
            weight={pokemon2.weight}
            sprite={pokemon2.sprite}
            backSprite={pokemon2.backSprite}
            // not needed, but keeps the JS overlords happy :)
            setSlot1={() => {}}
            setSlot2={() => {}}
          />
        )}
      </div>
      : null}

      {fightScreen? <FightScreen left_pokemon={pokemon1} right_pokemon={pokemon2} /> : null}
    </div>
  );
}
