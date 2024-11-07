class PokemonLSPBAD {
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
       Agregamos un metodo el cual define la habiliad 
       de volar.
   */
   get canFly() {
       return "Puedo volar";
   }
}

/*
   Creamos una clase Charmander la cual hereda de 
   la clase pokemon
*/
class Charmander extends PokemonLSPBAD {
   constructor() {
       // Invocamos el contructor de la clase pokemon
       super("Charmander", "Fire");
   }

   /*
       Charmander aun que es pokémon no cuentan
       con la capacidad de volar, por lo que el método
       canFly tendra que mostraria un error.
   */
   get canFly() {
       return "No puedo volar";
   }
}

/*
   Para el caso de la clase Charizar no se necesita
   mandar una exepcion ya que el si puede utilizar
   el método canFly
*/
class Charizar extends PokemonLSPBAD {
   constructor() {
       /*
           Invocamos el contructor de la clase pokemon
           inicializamos los valores correspondientes
       */            
       super("Charizar", "Fire");
   }
}

// Creamos la instancia de la clase Charizar
const CHARIZAR = new Charizar();
/*
   Como se comento con anterioridad charizar puede 
   utilizar todos los métodos de la clase Pokemon.    
*/
console.log(`Hola soy ${CHARIZAR.name}`);
console.log(`Soy de tipo ${CHARIZAR.type}`);
console.log(`Ademas ${CHARIZAR.canFly}`);

// Creamos la instancia de la clase Charmander
const CHARMANDER = new Charmander();
/*
   Como se comento con anterioridad charmander no puede 
   utilizar todos los métodos de la clase Pokemon.    
*/
console.log(`Hola soy ${CHARMANDER.name}`);
console.log(`Soy de tipo ${CHARMANDER.type}`);
console.log(`Ademas ${CHARMANDER.canFly}`);
// En esta caso la salida mostrar un error 

/*
El ejemplo anterior está rompiendo el principio LSP ya que como podemos apreciar 
la Sub-Clase (Charmander) 
tiene un comportamiento que difiere de la Clase-Padre (Pokémon),
*/