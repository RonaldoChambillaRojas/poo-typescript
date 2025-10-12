class Animal {
    constructor(
        protected name: string,
    ){}

    move() {
        console.log('Moving along!');
    }

    greeting() {
        return `Hello, I'm : ${this.name}`;
    }

    protected doSomething(){
        console.log('dooooooooooo');
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
            console.log('Woof ', this.name);
        }
        this.doSomething();
    }

    move(){
        super.move();
        console.log('NEW MOVING DOG');
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
// regor.name = 'otro nombre';
regor.woof(5);
