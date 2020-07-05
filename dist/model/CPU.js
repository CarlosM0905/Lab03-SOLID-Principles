import { Component } from './Component.js';
export class CPU extends Component {
    constructor() {
        super(450, "Intel", "La mejor solucion :V");
        this.processData = () => {
            console.log("Ando procesando la data, no molesteis, paciencia :v");
        };
    }
}
