export enum Gender {
    Male, Female
}

export class User {
    name: string;
    gender: Gender;
    birthDate: Date;
    balance: number;
    isActive: boolean;

    get genderStr(): string {
        return this.gender == Gender.Male ? "Male" : "Female";
    }

    get activeStr(): string {
        return this.isActive ? "Active" : "Inactive";
    }

    get birthDateStr(): string {
        return this.birthDate.toISOString().replace(/T.*/, ' ');
    }

    get birthYear(): number {
        return this.birthDate.getFullYear();
    }

    get age(): number {
        const then = this.birthDate.getTime();
        const now = (new Date()).getTime();
        const diff = now - then;
        const years = diff / 1000 / 60 / 60 / 24 / 365;

        return Math.floor(years);
    }

    constructor(name: string, gender: Gender, birthDate: Date, balance: number, isActive: boolean) {
        this.name = name;
        this.gender = gender;
        this.birthDate = birthDate;
        this.balance = balance;
        this.isActive = isActive;
    }
}
