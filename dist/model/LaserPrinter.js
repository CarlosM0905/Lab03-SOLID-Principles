import { Printer } from './Printer.js';
export class LaserPrinter extends Printer {
    constructor() {
        super(230, "Epson", "Impresoras de Qalite :v/");
        this.writeData = () => {
            console.log("Imprimiendo ahora en laser :v");
        };
    }
}
