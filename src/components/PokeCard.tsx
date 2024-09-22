import './PokeCard.css';

interface PokeCardProps {
    name: string;
    id: number;
    weight: number;
    sprite: string;
  }
  
  export default function PokeCard({ name, id, weight, sprite}: PokeCardProps) {
    return (
      <div  className="poke-card">
        <h3>{name}</h3>
        <p>ID: {id}</p>
        <p>Weight: {weight}</p>
        <img src={sprite} alt={`${name} sprite`}  className="pokemon-sprite" />
      </div>
    );
  }