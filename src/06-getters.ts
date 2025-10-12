class MyDate {
    // * OJO : => Aqui definimos y asignamos de UNA.
    // * OTRO-OJO : => Aqui tambien asignamos valores por DEFECTO si no vienen Parametros.
    // * OTRO-OJASO : => Si definimos los parametro aqui SI o SI demos de espeficar su ALCANSE.
    constructor(
        public year: number = 2006, 
        public month: number = 3, 
        private _day: number = 14,
    ) {}

    public printFormat(): string {
        const day = this.addPadding(this._day)
        const month = this.addPadding(this.month)
        return `${day}/${month}/${this.year}`;
    }
    
    private addPadding(value: number){
        if(value < 10){
            return `0${value}`;
        }

        return `${value}`;

    }

    public add(amount: number, type: 'days' | 'months' | 'years'){
        if(type === 'days'){
            this._day += amount;
        }
        if(type === 'months'){
            this.month += amount;
        }
        if(type === 'years'){
            this.year += amount;
        }

    }
    get day(){
            return this._day;
    }
    /**
     * * NOTAS: Los Getter se veen como una funcion desde dentro de la clase pero 
     * * se veen como una propiedad desde fuera, que permiten hacer? Pues puedes devolver valores
     * * privados con la opcion de que solo sea de lectura mas no de escritura.
     * 
     * * Tener en cuenta que los Getters simpre devulve algo SIEMPRE.
     * * Puede usarlo para validar lo que necesites antes de devolver un Resultado.
     */

    get isLeapYear(): boolean {
        if(this.year % 400 === 0) return true;
        if(this.year % 100 === 0) return false;
        return this.year % 4 === 0;
    }
}


const myDate = new MyDate(2006, 3, 14);
console.log(myDate.year);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log(myDate.day);
console.log(myDate.isLeapYear);

const myDate2 = new MyDate(2000, 3, 14);
console.log('2000 => ',myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 3, 14);
console.log('2001 => ',myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 3, 14);
console.log('2004 => ',myDate4.isLeapYear);
