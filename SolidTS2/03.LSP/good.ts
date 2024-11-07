class PokemonLSPGOOD {
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
   // quitamos el método canFly
}

/*
   Generamos una clase PokemonFly la cual
   contara con el método cnFly que tenia la 
   clase Pokemon
*/
class PokemonFly extends PokemonLSPGOOD {
   // Creamos el metodo principal
   constructor(name, type) {
       // Invocamos al constructor de la clase pokémon
       super(name, type);
   }
   /*
       Agregamos un metodo el cual define la habiliad 
       de volar.
   */
   get canFly() {
       return "Puedo volar";
   }
}

/*
   Creamos una clase Charmander la cual hereda de 
   la clase Pokemon y en esta ocacion no es necesario
   mandar una exepción ya que no tiene el método canFly  
*/
class CharmanderLSP extends PokemonLSPGOOD {
   // Creamos el metodo principal
   constructor() {
       // Invocamos al constructor de la clase pokémon
       super("Charmander", "Fire");
   }
}

/*
   Creamos una clase Charizar la cual hereda de 
   la clase PkemonFly ya que charizar si utiliza
   el método canFly
*/
class CharizarLSP extends PokemonFly {
   // Creamos el metodo principal
   constructor() {
       // Invocamos al constructor de la clase pokémon
       super("Charizar", "Fire");
   }
}

// Creamos la instancia de la clase Charizar
const CHARIZARLSP = new Charizar();
/*
   Como se comento con anterioridad charizar puede 
   utilizar todos los métodos de la clase Pokemon.    
*/
console.log(`Hola soy ${CHARIZAR.name}`);
console.log(`Soy de tipo ${CHARIZAR.type}`);
console.log(`Ademas ${CHARIZAR.canFly}`);

// Creamos la instancia de la clase Charmander
const CHARMANDERLSP = new Charmander();
/*
   Como se comento con anterioridad charmander no puede 
   utilizar todos los métodos de la clase Pokemon.    
*/
console.log(`Hola soy ${CHARMANDER.name}`);
console.log(`Soy de tipo ${CHARMANDER.type}`);
console.log(`Ademas ${CHARMANDER.canFly}`);
// En esta caso la salida nos mostrara undedined
// ya que el método no exite en la clase Charmander

/*
Al aplicar LSP entra en juego PokemonFly que hereda de Pokémon y tiene el método canFly, 
de esta manera podemos definir quién puede volar y quien no, este principio es una 
advertencia de que el polimorfismo es poderoso, pero no siempre es fácil de aplica correctamente.
*/