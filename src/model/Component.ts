export class Component{
    private _price: number;
    private _brand: string;
    private _name: string;
    constructor (price: number, brand: string, name: string){
        this._price = price;
        this._brand = brand;
        this._name = name;
    }

    get price(): number{
        return this._price;
    }

    set price(price: number){
        this._price = price;
    }

    get brand(): string{
        return this._brand;
    }

    set brand(brand: string){
        this._brand = brand;
    }

    get name(): string{
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }
}

