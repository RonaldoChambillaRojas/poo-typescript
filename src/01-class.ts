const date = new Date();
date.getDate();
date.getDay();
date.getHours();

const date2 = new Date(1993, 1, 12);
date2.getDate();
date2.getDay();
date2.getHours();

console.log(date2);
console.log(date);


class MyDate {
   public year: number;
   public month: number;
   public day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}


const myDate = new MyDate(2021, 3, 13);
console.log(myDate);