import short from "short-uuid"
export class Band {
    public name: string;
    public id: string;
    public votes: number;
    constructor(
        name: string
    ) {
        this.id = short.generate();
        this.name = name;
    }

}