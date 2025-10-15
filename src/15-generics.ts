// function getValue(value: unknown){
//     return value;
// }

// function getValue(value: string | number){
//     return value;
// }

// getValue(12).toFixed();
// getValue('12').toFixed();
// ! REPASAR LOS GENERICOS.
function getValue<myType>(value: myType){
    return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').concat();
getValue<number[]>([]).forEach;

