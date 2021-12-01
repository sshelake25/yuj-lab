
class Person {
    private firstName: any;
    public lastName: any;
    protected address: any

    constructor(fname: any, lname: any, addr: any) {
        this.firstName = fname;
        this.lastName = lname;
        this.address = addr;
    }

    protected getName() {
        return `${this.firstName} - ${this.lastName}`;
    }

    greet() {
        return `Hello Good Morning ${this.getName()}`;
    }
}

// let umang = new Person('Umang','Paunikar','Pune');
// let message =  umang.greet();
// console.log(message);

//inheritance ? 

class Student extends Person {
    attendace: any;
    marks: any;
    exam: any

    constructor(fname: any, lastName: any, adress: any, att: any, mark: any, exam: any) {
        super(fname, lastName, adress);
        this.exam = exam;
        this.marks = mark;
        this.attendace = att;

    }

    test() {
        console.log(this.address);
    }

    takeExam() {
        console.log(` ${super.getName()}    taking ${this.exam} exam`)
    }
}

let namrata = new Student('Namrata', 'Kale', 'pune', 100, 90, 12);

namrata.takeExam();