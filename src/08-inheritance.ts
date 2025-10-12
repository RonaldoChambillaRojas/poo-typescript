class Animal {
    constructor(
        public name: string,
    ){}

    move() {
        console.log('Moving along!');
    }

    greeting() {
        return `Hello, I'm : ${this.name}`;
    }
}

class Dog extends Animal {
    constructor(
        public owner: string,
        name: string,
    ){
        super(name)
    }
    woof(times: number): void{
        for (let index = 0; index < times; index++) {
            console.log('Woof');
        }
    }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const regor = new Dog('regor', 'llon');
regor.move();
console.log(regor.greeting());
regor.woof(5);
console.log(regor.owner);