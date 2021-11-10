import { Employes } from "./employe";

export class EmployeList {
    private employes: Employes[];
    constructor() {
        this.employes = [
            new Employes("Maximo Apaza", "Programmer"),
            new Employes("Mayrin Apaza", "Doctor"),
            new Employes("Jorge Perez", "Actor"),
            new Employes("Jose Quispe", "Architec"),
        ];
    }

    addEmploye(name: string, occupation: string): void {
        this.employes.push(new Employes(name, occupation));
    }

    removeBand(id: string): void {
        this.employes.filter(e => e.id !== id);
    }

    getEmployes(): Employes[] {
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