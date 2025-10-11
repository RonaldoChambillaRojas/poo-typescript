class MyDate {
    public year: number;
    public month: number;
    public day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    public printFormat(): string {
        return `${this.day}/${this.month}/${this.year}`;
    }

    public add(amount: number, type: 'days' | 'months' | 'years'){
        if(type === 'days'){
            this.day += amount;
        }
        if(type === 'months'){
            this.month += amount;
        }
        if(type === 'years'){
            this.year += amount;
        }
    }
}
/* 
* NOTAS:
* Las propiedades y methodos de clase por defecto son publicas.
* Ventajas:
* Podemos Obtener y manipular su valor.
* Desvetaja:
* Sus ventajas son sus desventajas dependiendo de como se use.
*/

const myDate = new MyDate(2006, 3, 14);
console.log(myDate.year);
myDate.day = 12;
console.log(myDate.day);