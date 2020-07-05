import { Component } from './Component.js';
export class Keyboard extends Component {
    constructor() {
        super(40, "Logitech", "Mas RGB Mas FPS");
        this.readData = () => {
            console.log('Leyendo data del teclado');
        };
    }
}
