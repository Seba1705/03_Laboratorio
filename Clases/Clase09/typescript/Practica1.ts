// Tipos
var batman:string = "Bruce";
var superman:string = "Clark";

var existe:boolean = false;

// Tuplas
var parejaHeroes:[string,string] = [batman,superman];
var villano:[string,number,true] = ["Lex Lutor",5,true];

// Arreglos
var aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
var fuerzaFlash:number = 5;
var fuerzaSuperman:number = 100;
var fuerzaBatman:number = 1;
var fuerzaAcuaman:number = 0;

// Retorno de funciones
function activar_batiseñal():string{
    return "activada";
}

function pedir_ayuda():void{
    console.log("Auxilio!!!");
}

// Aserciones de Tipo
var poder:any = "100";
var largoDelPoder:any = poder.length;
console.log( largoDelPoder );
