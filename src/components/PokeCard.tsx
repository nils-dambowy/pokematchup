import './PokeCard.css';

interface PokeCardProps {
    name: string;
    id: number;
    weight: number;
    sprite: string;
    backSprite: string;
    setSlot1: (slot1: number) => void;
    setSlot2: (slot2: number) => void;
    
  }
  
  export default function PokeCard({ name, id, weight, sprite,setSlot1, setSlot2}: PokeCardProps) {
    return (
      <div  className="poke-card">
        <h3>{name}</h3>
        <p>ID: {id}</p>
        <p>Weight: {weight}</p>
        <img src={sprite} alt={`${name} sprite`}  className="pokemon-sprite" />
        <div className="slot-container">
          <button className="slot-1" onClick={() =>{
            setSlot1(id);
          }}>Slot 1</button>
          <button className="slot-2" onClick={() =>{
            setSlot2(id);
          }}>Slot 2</button>
        </div>
      </div>
    );
  }