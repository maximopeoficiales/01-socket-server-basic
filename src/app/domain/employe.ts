import short from "short-uuid"
export class Employe {
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
        this.votes = 0;
    }

}