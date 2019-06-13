// Tipos
let batman: string = "Bruce",
    superman: string = "Clark",
    existe: boolean = false;
//console.log(batman,superman, existe);

// Tuplas
let parejaHeroes: [string,string] = [batman,superman],
    villano: [string,number,true] = ["Lex Lutor",5,true];
//console.log(parejaHeroes, villano);

// Arreglos
let aliados: string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];
//console.log(aliados);

//Enumeraciones
let fuerzaFlash: number = 5,
    fuerzaSuperman: number = 100,
    fuerzaBatman: number = 1,
    fuerzaAcuaman: number = 0;
//console.log(fuerzaFlash, fuerzaSuperman, fuerzaBatman, fuerzaAcuaman);

// Retorno de funciones
function activar_batiseñal(): string{
    return "activada";
}
//console.log(activar_batiseñal());

function pedir_ayuda(): void{
    console.log("Auxilio!!!");
}
//pedir_ayuda();

// Aserciones de Tipo
let poder:any = "100",
    largoDelPoder: any = poder.length;
//console.log( largoDelPoder );
