import { Band } from "./band";

export class BandList {
    private bands: Band[];
    constructor() {
        this.bands = [
            new Band("Metallica"),
            new Band("Heroes del Silencia"),
            new Band("6 voltios"),
            new Band("Tragorkorto"),
        ];
    }

    addBand(name: string): void {
        this.bands.push(new Band(name));
    }

    removeBand(id: string): void {
        this.bands.filter(band => band.id !== id);
    }

    getBands(): Band[] {
        return this.bands;
    }
    increaseVote(id: string): void {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.votes++;
            }
            return band;
        });
    }

    changeBandName(id: string, name: string): void {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.name = name;
            }
            return band;
        });
    }
}