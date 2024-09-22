interface Pokemon {
    name: string;
    id: number;
    weight: number;
    sprite: string;
  }

export async function fetchPokemonData(currentPokemons : Pokemon[], startIndex : number) : Promise<Pokemon[]> {
    const END_INDEX = startIndex + 50;
    for (let id = (startIndex + 1); id <= END_INDEX; id++) {
        console.log("id", id);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        
        currentPokemons.push({ 
            name: data.name, 
            id: data.id, 
            weight: data.weight, 
            sprite: data.sprites.front_default 
        });
    }
    return currentPokemons;
};

export function capitalizeFirstLetter(word: string){
    return word.charAt(0).toUpperCase() + word.slice(1);
}