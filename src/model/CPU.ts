import { iProcessingDevice } from './../interfaces/iProcessingDevice.js';
import { Component } from './Component.js';
export class CPU extends Component implements iProcessingDevice{
    processData: Function;
    constructor(){
        super(450, "Intel", "La mejor solucion :V");
        this.processData = ()=>{
            console.log("Ando procesando la data, no molesteis, paciencia :v")
        }
    }
}