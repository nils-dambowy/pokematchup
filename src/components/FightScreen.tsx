import './FightScreen.css';


interface FightScreenProps {
    left_pokemon: Pokemon | null;
    right_pokemon: Pokemon | null;
  }

interface Pokemon {
    name: string;
    id: number;
    weight: number;
    sprite: string;
    backSprite: string;
}

export default function FightScreen({left_pokemon, right_pokemon}: FightScreenProps) {
    console.log("left_pokemon", left_pokemon?.backSprite);
    console.log("right_pokemon", right_pokemon?.sprite);
    return (
        <>
        <div id="fight-screen">
            <img src={left_pokemon?.backSprite} alt={`${left_pokemon?.name} sprite`} id="left-pokemon-sprite" />
            <img src={right_pokemon?.sprite} alt={`${right_pokemon?.name} sprite`} id="right-pokemon-sprite" />
        </div>
        </>
    );
}