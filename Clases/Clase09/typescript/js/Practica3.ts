
// Objetos
let batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
};
//console.log(batimovil);

let bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
};
//console.log(bumblebee);

// Villanos debe de ser un arreglo de objetos personalizados
let villanos = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
},{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
},{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
}];
//console.log(villanos);

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type tipoCharles = {
    poder : string,
    estatura : number
}
let charles:tipoCharles = {
    poder: "psiquico",
    estatura: 1.78
}; 
//console.log(charles);

type tipoApocalipsis = {
    lider: boolean,
    miembros: string[]
}
let apocalipsis:tipoApocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}
//console.log(apocalipsis);

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique:any;

mystique = charles;
//console.log(mystique);
mystique = apocalipsis;
//console.log(mystique);