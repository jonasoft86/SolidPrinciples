class PokemonISP {
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
    /*
        Agregamos dós nuuevos métodos
        los caules establecen habilidadess que 
        puede tener un pokemon.
    */
    get canFly() {
        return "Puedo volar";
    }

    get canSwim() {
        return "Puedo Nadar";
    }
}


/*
    Creamos las clasee Charizar que 
    hereda de la clase Pokemoon por lo
    cual tomara todos los métodos.
*/
class CharizarISP extends PokemonISP {
    constructor() {
        super("Charizar", "Fire");
    }

    // En este caso Charizar puede volar
    get canFly() {
        return `Soy ${this.name} y puedo volar`;
    }

    // 
    get canSwim() {
        return `No puedo nadar por que soy de tipo ${this.type}`;
    }
}

/*
    Creamos las clasee Charizar que 
    hereda de la clase Pokemoon por lo
    cual tomara todos los métodos.
*/
class Blastoise extends PokemonISP {
    constructor() {
        super("Blastoise", "Water");
    }

    get canFly() {
        return `No puedo volar por que soy de tipo ${this.type}`;
    }

    get canSwim() {
        return `Soy ${this.name} y puedo nadar`;
    }
}

const CharizarD = new CharizarISP();
console.log(CharizarD.canFly);
console.log(CharizarD.canSwim);
/*
    output
    Soy Charizar y puedo volar
    No puedo nadar por que soy de tipo Fire
*/

const BLASTOISE = new Blastoise();
console.log(BLASTOISE.canFly);
console.log(BLASTOISE.canSwim);
/*
    output
    No puedo volar por que soy de tipo Water
    Soy Blastoise y puedo nadar
*/

/*
Al momento de que nuestra la Clase consta de métodos que pueden o no aplicar a 
sus descendientes es muy fácil que insertemos errores, la solución para poder implementar
 ISP es necesario separar el código en pequeñas partes así de cada clase podrá usar 
 los métodos que realmente utilice.
 */