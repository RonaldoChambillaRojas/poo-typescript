interface Driver {
    database: string;
    password: string;
    port: number;
    connect(): void;
    disconnect(): void;
    isConnected(name: string): boolean;
}

// const driver: Driver = {
//     database: "",
//     password: "",
//     port: 0,
//     connect(){}
// }


// Aqui implementamo la estructura de la interfas Driver en la clase PostgresDriver
class PostgresDriver implements Driver{
    constructor(
        public database: string,
        public password: string,
        public port: number
    ){}
    disconnect(): void {
        // code
    }
    isConnected(name: string): boolean {
        return true;
    }

    connect(): void {
        // code
    }
}