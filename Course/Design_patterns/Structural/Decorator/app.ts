// clase base
class Computer {
    boot(): void {
        console.log('Computer is booting');
    };

    shutDown(): void {
        console.log('Computer is shutting down');
    };

    display(): void {
        console.log('Displaying content in one screen');
    };

    print():void{
        console.log('No printer found');
    };

    renderVideo():void{
        console.log('Cannot render video without a dedicated graphics card');
    };
};

// clase decorator base con la referencia a la clase base
class ComputerComponentDecorator extends Computer {
    constructor(private _computer: Computer){
        super();
    };

    boot() {
        return this._computer.boot();
    };

    shutDown(): void {
        return this._computer.shutDown();
    };

    display(): void {
        return this._computer.display();
    };

    print(): void {
        return this._computer.print();
    };

    renderVideo(): void {
        return this._computer.renderVideo();
    };

};

class ServerComputer extends Computer {
    boot(): void {
        console.log('Booting server...');
    };

    shutDown(): void {
        console.log('Shutting down server...');
    };
};

// clase decorator con nueva feature que extiene el decorator base  
class ComputerWithPrinterDecorator extends ComputerComponentDecorator {
    constructor(computer: Computer){
        super(computer);
    };

    // El único método que cambiamos
    // Los demás, serán delegados a la implementación previa, al decorator previo (ComputerComponentDecorator)
    print(): void {
        console.log('Printing...');        
    };
};

// el proximo decorator no conoce que el anterior envuelve al mismo objeto
// los decorators no se comunican 
class ComputerWithDedicatedGPU extends ComputerComponentDecorator {
    constructor(computer: Computer){
        super(computer);
    };

    renderVideo(): void {
        console.log('Rendering video with dedicated GPU');
    };
};


let server = new ServerComputer();
// vamos agregando features una encima de otra, por capas.
let serverWithPrinter = new ComputerWithPrinterDecorator(server);
let serverWithPrinterAndDedicatedGPU = new ComputerWithDedicatedGPU(serverWithPrinter);

// internamente tenemos la referencia al Computer (ver métodos)
serverWithPrinterAndDedicatedGPU.print();
serverWithPrinterAndDedicatedGPU.renderVideo();