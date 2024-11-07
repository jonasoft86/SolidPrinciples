class PokemonOCPBAD {
    #name = ""; 
    #type = ""

    constructor(name, type) {
        this.#name = name;
        this.#type = type;
    }

   get name() {
       return this.#name;
   }

   get type() {
       return this.#type;
   }

}

/*
   Se genera una clase para procesar los ataques de
   los pokemons dependiento del tipo de este.
*/
class ProcessAttackOCP {
   /*
       Se crea método que permite procesar los ataques 
       de un listado de pokemons.
   */
   allPokemonAttack(pokemonList) {
       const ATTACKS = pokemonList.reduce((output, pokemon) => {
           let attack = "";
           const { name, type } = pokemon;
           /*
               Se crea un listado de casos que permite asignar
               un ataque dependiendo el tipo de pokemon.
           */
           switch(type) {
               case "Electric":
                   attack = "Impactrueno ⚡️";
                   break;
               case "Fire": 
                   attack = "Aliento igneo 🔥";
                   break;
               case "Water":
                   attack = "Pitsola de agua 🔫";
                   break;
                   attack = "Ataque base";
                default:
           }
           return `${output}${name}, ${attack}\n`;
       }, "");
       return ATTACKS;
   }
}
// Se crean instancias de la clase pokemon
const flareon = new PokemonOCPBAD("Flareon", "Fire"); 
const jolteon = new PokemonOCPBAD("Jolteon", "Electric");
const vaporeon = new PokemonOCPBAD("Vaporeon", "Water");

// Creamos una instancia de la clase ProcessAttack 
const AttackOCP = new ProcessAttackOCP()
// invocamos al método allPokemonAttack y enviamos las 
// instancia de la clase pokemon
const MSGOCP = AttackOCP.allPokemonAttack([flareon, jolteon, vaporeon]);
console.log(MSGOCP);
/*
   Salida 
   Flareon, Aliento igneo 🔥
   Jolteon, Impactrueno ⚡️
   Vaporeon, Pitsola de agua 🔫
*/