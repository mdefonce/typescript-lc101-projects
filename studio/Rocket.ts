import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from './Payload';

export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let payloadlMass = 0;
        for(let i=0; i<items.length; i++) {
            payloadlMass += items[i].massKg;
        }
        return payloadlMass;
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        let totalMass = this.currentMassKg() + item.massKg;
        return totalMass <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {return false;}
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {return false;}
    }

 }