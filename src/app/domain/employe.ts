import short from "short-uuid"
export class Employes {
    public id: string;
    public name: string;
    public occupation: string;
    public votes: number;
    constructor(
        name: string,
        occupation: string,
    ) {
        this.id = short.generate();
        this.name = name;
        this.occupation = occupation;
    }

}