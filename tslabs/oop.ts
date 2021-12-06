interface Human {
    firstName: string;
    lastName: string;
    name?: Function;
    isLate(time: Date): boolean;
}

class Person_YUJ implements Human {
    balance : number = 12_323_213_434_546;

    constructor(public firstName: any, public lastName: any) {
    }

    public name(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    protected whoAreYou() {
        return `Hi i'm ${this.name()}`;
    }

    isLate(para: Date): boolean {
        return true;
    }

}

class Student_YUJ extends Person_YUJ {

    constructor(firstName: any, lastName: any, private course: any) {
        super(firstName, lastName);
    }

    override whoAreYou() {
        return `${super.whoAreYou()} and i'm studying ${this.course}`;
    }
}

let ss = new Student_YUJ("Surekha", "Shelake", "typescript");
console.log(ss.whoAreYou());