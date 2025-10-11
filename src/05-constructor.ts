

class MyDate {
    // * OJO : => Aqui definimos y asignamos de UNA.
    // * OTRO-OJO : => Aqui tambien asignamos valores por DEFECTO si no vienen Parametros.
    // * OTRO-OJASO : => Si definimos los parametro aqui SI o SI demos de espeficar su ALCANSE.
    constructor(
        public year: number = 2006, 
        public month: number = 3, 
        private day: number = 14,
    ) {}

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


const myDate = new MyDate(2006, 3, 14);
console.log(myDate.year);
console.log(myDate.printFormat());
console.log(myDate.getDay());

const myDate2 = new MyDate();
console.log('() => ',myDate2.printFormat());

const myDate3 = new MyDate(2020);
console.log('(2020) => ',myDate3.printFormat());

const myDate4 = new MyDate(2021,4);
console.log('(2021,4) => ',myDate4.printFormat());
