import { useState } from 'react';
import MatchupField from './MatchupField';
import Pokemons from './Pokemons';




export default function SlotContext() {
    const [slot1, setSlot1] = useState<number>(0);
    const [slot2, setSlot2] = useState<number>(0);


    return (
        /*
        Lift the two components up to share the
        current slot state
        */
        <>
            <MatchupField slot1={slot1} slot2={slot2} />
            <Pokemons setSlot1={setSlot1} setSlot2={setSlot2} />
        </>
    );
}