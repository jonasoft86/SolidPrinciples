/*
Al momento de que nuestra la Clase está abierta a recibir nuevos cambios es 
posible que insertemos un error, porque estaríamos modificando código ya existente, 
para aplicar OCP utilizaremos el principio de Herencia y Polimorfismo.
*/
class PokemonOCPGOOD {
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

   /*
       Cargamos el metodo attack para que todas 
       las clases que hereden de pokemon puedan utilizarlo
   */
   get attack() {
       const { name } = this;
       return `${name}, Ataque base`;
   }

}

/*
   Por cada tipo de pokemon crearemos una nueva clase
   la cual heredara de la clase pokemon
*/
class TypeElectric extends PokemonOCPGOOD {
   constructor(name) {
       /*
           Invocamos el constructor de la clase pokemon
           y pasamos por defecto el tipo Electric
       */
       super(name, "Electric");
   }

   get attack() {
       const { name } = this;
       return `${name}, Impactrueno ⚡️`;
   }
}

class TypeFire extends PokemonOCPGOOD {
   constructor(name) {
       /*
           Invocamos el constructor de la clase pokemon
           y pasamos por defecto el tipo Fire
       */
       super(name, "Fire");
   }

   get attack() {
       const { name } = this;
       return `${name}, Aliento igneo 🔥`;
   }
}

class TypeWater extends PokemonOCPGOOD {
   constructor(name) {
       /*
           Invocamos el constructor de la clase pokemon
           y pasamos por defecto el tipo Water
       */
       super(name, "Water");
   }

   get attack() {
       const { name } = this;
       return `${name}, Pitsola de agua 🔫`;
   }
}

/*
   Se genera una clase para procesar los ataques de
   los pokemons dependiento del tipo de este.
*/
class ProcessAttack {
   /*
       Se crea método que permite procesar los ataques 
       de un listado de pokemons.
   */
   allPokemonAttack(pokemonList) {
       /*
           En este caso solo basta con recibir el listado de pokemons
           para porder ejecutar un ataque, ya que cada elemento del listado
           cuenta con su propio ataque.
       */
       const ATTACKS = pokemonList.reduce((output, pokemon) => {
           let msg = "";
           const { attack } = pokemon;
           return `${output}${attack}\n`;
       }, "");
       return ATTACKS;
   }
}

// Creamos una instancia de la clase ProcessAttack 
const Attack = new ProcessAttack()

// invocamos al método allPokemonAttack y enviamos las 
// instancia te cada tipo de pokemon
const MSG = Attack.allPokemonAttack([
   new TypeFire("Flareon"),
   new TypeElectric("Jolteon"),
   new TypeWater("Vaporeon"),
]);
console.log(MSG);
/*
   Salida 
   Flareon, Aliento igneo 🔥
   Jolteon, Impactrueno ⚡️
   Vaporeon, Pitsola de agua 🔫
*/
/*
Al aplicar OCP en la Clase ProcessAttack lo primero que vemos es que ya no le 
importa saber el tipo de Pokémon solo le interesa el resultado del método attack 
para poder realizar la acción de ataque, con este nuevo diseño para poder agregar 
nuevos ataques por tipo de Pokémon solo es necesario crear nuevas SubClases de 
la Clase Pokémon, esto es un diseño mucho más robusto y fácil de extender.
*/