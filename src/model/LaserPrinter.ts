import { iOutputDevice } from './../interfaces/iOutputDevice.js';
import { Printer } from './Printer.js';
export class LaserPrinter extends Printer implements iOutputDevice{
    writeData: Function;
    constructor(){
        super(230, "Epson", "Impresoras de Qalite :v/");
        this.writeData = () => {
            console.log("Imprimiendo ahora en laser :v")
        }
    }
}