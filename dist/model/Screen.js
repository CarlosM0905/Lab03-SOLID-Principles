import { Component } from './Component.js';
export class Screen extends Component {
    constructor() {
        super(287, "Zowie", "Las mejores pantallas para juegos");
        this.writeData = () => {
            console.log('Ando mostrando tus juegos');
        };
    }
}
