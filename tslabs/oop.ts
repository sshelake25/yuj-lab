interface Human {
    firstName: string;
    lastName: string;
    name?: Function;
    isLate?(time: Date): Function;
}

class Person_YUJ implements Human {
    constructor(public firstName: any, public lastName: any) {
    }

    public name() {
        return `${this.firstName} ${this.lastName}`;
    }

    protected whoAreYou() {
        return `Hi i'm ${this.name()}`;
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