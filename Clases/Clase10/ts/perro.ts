namespace animal{
    export class Perro implements Animal{
    //public nombre:string;
        private nombre = "";

        constructor(nombre?:string){
            nombre && (this.nombre = nombre);
        }

        hacerRuido():string{
            return 'Guau!';
        }

        get Nombre(){
            return this.nombre;
        }

        set Nombre(nombre: string){
            this.nombre = nombre;
        }
    
    }
}

    



