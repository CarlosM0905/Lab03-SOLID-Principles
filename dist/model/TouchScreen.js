import { Component } from './Component.js';
export class TouchScreen extends Component {
    constructor() {
        super(265, "AOC", "Pantalla tactil nueva :v");
        this.readData = () => {
            console.log("Leyendo de la pantalla");
        };
        this.writeData = () => {
            console.log("Mostrando en pantalla");
        };
    }
}
