import { Employe } from "./employe";

export class EmployeList {
    private employes: Employe[];
    constructor() {
        this.employes = [
            new Employe("Maximo Apaza", "Programmer"),
            new Employe("Mayrin Apaza", "Doctor"),
            new Employe("Jorge Perez", "Actor"),
            new Employe("Jose Quispe", "Architec"),
        ];
    }

    addEmploye(name: string, occupation: string): void {
        this.employes.push(new Employe(name, occupation));
    }

    removeBand(id: string): void {
        this.employes.filter(e => e.id !== id);
    }

    getEmployes(): Employe[] {
        return this.employes;
    }

    increaseVote(id: string): void {
        this.employes = this.employes.map(employe => {
            if (employe.id === id) {
                employe.votes++;
            }
            return employe;
        });
    }

    updateEmploye(id: string, name: string, occupation: string): void {
        this.employes = this.employes.map(employe => {
            if (employe.id === id) {
                employe.name = name;
                employe.occupation = occupation;
            }
            return employe;
        });
    }
}