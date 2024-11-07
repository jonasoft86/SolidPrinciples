class PokemonISPGOOD {
    #name = "";
    #type = "";

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
    Para simular el uso de una interfaz vamos a crear
    un mix-in de la siguiente manera 
    const [Nombre] = (clasePadre) => class extends [clasePadre]
*/
const Fly = ClasePadre => class extends ClasePadre {
    /*
        un mixin puede tener el numero de métodos
        que necesitemos implementar.
    */
    get canFly() {
        return `Soy ${this.name} y puedo volar`;
    }
}

/*
     Se crea el segundo mixin para poder aplicar
     el método de nadar solo para ciertos pokemons
*/
const Swim = ClasePadre => class extends ClasePadre {
    get canSwim() {
        return `Soy ${this.name} y puedo nadar`;
    }
}

/*
    para poder utilizar una herencia multiple en
    Javascript implementaremoos nuestro mix-in de
    la siguiente manera
    
    class [SubClase] extends Mixin(ClasePadre) {}
*/
class Charizar extends Fly(PokemonISPGOOD) {
    constructor() {
        super("Charizar", "Fire");
    }
}

/*
    Al utilizar el mixin nuestra clase Blastoise
    toma los métodos y atributos de la clase Swim
    y Pokemon
*/
class BlastoiseISPGood extends Swim(PokemonISPGOOD) {
    constructor() {
        super("Blastoise", "Water");
    }
}


/*
    Para los casos donde un pokemon no 
    tenga la habillidad de voloar o nadar
    solo tiene que heredar de Pokemon
*/
class Gengar extends PokemonISPGOOD {
    constructor() {
        super("Gengar", "Ghost");
    }
}

const CHARIZAR = new Charizar();
console.log(CHARIZAR.canFly);
/*
    output
    Soy Charizar y puedo volar
*/


const BLASTOISEISP = new BlastoiseISPGood();
console.log(BLASTOISEISP.canSwim);
/*
    output
    Soy Blastoise y puedo nadar
*/
/*
Al aplicar ISP entran en juego el manejo de interfaces, pero como sabemos en 
JavaScript por lo que implementamos Mix-ins con los cuales podremos simular un 
comportamiento parecido a las interfaces con lo que 
podremos agregar solo los métodos que realmente necesite nuestra Subclase.
*/