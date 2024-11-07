class PokemonGood {
    #name = ""; 
    #type = ""
    #evolutions = [];

    constructor(name, type, evolutions) {
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }

   get name() {
       return this.#name;
   }

   get type() {
       return this.#type;
   }

   get evolutions() {
       return this.#evolutions;
   }
}

/*
   para aplicar el principio de responsabilidad única
   separamos todas las operaciones que tengan que ver
   con acciones dentro de la base de datos.
*/
class DataBase {
   // Método principal
   constructor(pokemon) {}
   saveData() {  }
   findData() {  }
   updateData() {  }
   deleteData(){  }
}

// Creamos la instacia de la clase pokemon
const Eevee = new PokemonGood("Eevee", "normal", ["Jolteon", "Vaporeon", "Flareon"]);
// pasamos los la instancia del pokemon
const DB = new DataBase(Eevee);
// creamos un nuevo registro
DB.saveData()

/*
Aplicando SRP vemos que entra en juego una nueva clase llamada DataBase 
la cual es encarga de manipular la Base de datos y por otro lado la Clase Pokemon 
solo se encarga de definir nuevos Pokémons, de esta manera cada Clase tiene una 
responsabilidad además podemos conseguir una alta cohesión.
alta cohesión: Se refiere a la media que módulos de un sistema tiene una sola responsabilidad.
*/