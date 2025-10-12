abstract class Animal {
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

// ! ESTO YA NO SE PUEDE, SOLO PODEMOS INSTANCIAR DE LAS CLASES HIJAS.

// const animal = new Animal('elite');
// animal.greeting();

const chetis = new Dog('chetis', 'llon');
chetis.greeting();
chetis.move();
chetis.woof(2);