import { iInputDevice } from './../interfaces/iInputDevice.js';
import { Component } from './Component.js';
export class Mouse extends Component implements iInputDevice{
    readData: Function;
    
    constructor(){
        super(20, "Ryzen", "Mouse de Quality v:");
        this.readData = () => {
            console.log("Has hecho muchos clicks manin :v")
        }
    }
}
