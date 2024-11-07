class PokemonBad {
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

   saveDateDB(pokemon) {}
}

// Creamos la instacia de la clase pokemon
const Eevee = new PokemonBad("Eevee", "normal", ["Jolteon", "Vaporeon", "Flareon"]);
Eevee.saveDateDB(Eevee)

/*
Clase consta de más de una responsabilidad.
Al contar con múltiples responsabilidades se complica aplicar cambios 
ya que es posible que insertemos un error porque hacer un cambio de alguna responsabilidad, 
podría afectar a otras sin que nosotros lo sepamos, es momento de aplicar SRP.
*/