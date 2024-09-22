import { useEffect } from 'react';
import { useState } from 'react';
import './Pokemons.css';
import PokeCard from './PokeCard';
import { fetchPokemonData } from '../util/utils';

interface PokemonsProps {
    setSlot1: (slot1: number) => void;
    setSlot2: (slot2: number) => void;
  }

interface Pokemon {
    name: string;
    id: number;
    weight: number;
    sprite: string;
    backSprite: string;
  }

const INITIAL_INDEX = 0;
const AMOUNT_NEXT_POKEMON = 50;

export default function Pokemons({setSlot1, setSlot2 }: PokemonsProps) {

    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [startIndex, setStartIndex] = useState<number>(INITIAL_INDEX);

    useEffect(() => {
        console.log("Use Effect executed");
        fetchPokemonData(pokemon, startIndex, AMOUNT_NEXT_POKEMON).then((updatedPokemon) => {
            setPokemon([...updatedPokemon]);
        });
    }, [startIndex]);

    console.log("pokemon", pokemon);

    return (
    <>
    <div className="poke-container">
        {pokemon.map((poke) => (
            <PokeCard 
                name={poke.name} 
                id={poke.id} 
                weight={poke.weight} 
                sprite={poke.sprite} 
                backSprite={poke.backSprite}
                setSlot1={setSlot1} 
                setSlot2={setSlot2} 
                key={poke.id}
            />
        ))} 
        
    </div>
    <div className="button-container">
        <button className="next-button" onClick={() => {
                setStartIndex(prevIndex => {
                    const newIndex = prevIndex + AMOUNT_NEXT_POKEMON;
                    console.log("startIndex", newIndex);
                    return newIndex; // Return the new value to update the state and trigger useEffect
                });
            }}>
            Next
        </button>
    </div>
    </>
    );
}