import { Component } from './Component.js';
export class GraphicTable extends Component {
    constructor() {
        super(340, "Samsung", "Dibujos de kalité");
        this.readData = () => {
            console.log("Dibujando cosillas");
        };
    }
}
