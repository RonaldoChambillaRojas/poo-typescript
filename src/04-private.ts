class MyDate {
    public year: number;
    public month: number;
    private day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    public printFormat(): string {
        const day = this.addPadding(this.day)
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
            this.day += amount;
        }
        if(type === 'months'){
            this.month += amount;
        }
        if(type === 'years'){
            this.year += amount;
        }

    }
        getDay(){
            return this.day;
    }
}
/* 
* NOTAS:
* Si una propiedad es PRIVATE NO podemos acceder a ella desde fuera de la classe pero
* si podemos accerder a ella desde dentro de la clase
* Tambien podemos exponer esta propiedad PRIVATE asiendo uso de un method.
*/

const myDate = new MyDate(2006, 3, 14);
console.log(myDate.year);
// myDate.day = 12;
// console.log(myDate.day);

console.log(myDate.printFormat());
console.log(myDate.getDay());