//  EJEMPLO DE PROPIEDADES ESTATICAS

console.log(Math.PI);
console.log(Math.max(1,2,3,4,5,6,2));

class MyMath {
    static readonly PI = 3.14;

    static max(...numbers: number[]){
        return numbers.reduce((max, item) => max >= item ? max : item);
    }
}

// const newMath = new MyMath();
// console.log(newMath.PI);

console.log('myMath.PI => ',MyMath.PI);
// MyMath.PI = 12;

const number = [1,2,34,5,4,34,2,33,45]
console.log('myMath.max => ', MyMath.max(...number));