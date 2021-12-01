class PersonAccesss {

    address: any;
   // interface: any
    
    constructor(private firstName: any, private lastName: any) {
    }

    getName() {
        console.log(`Hello I am ${this.firstName} - ${this.lastName}`);
    }

    public() {

    }
}

let ram = new PersonAccesss('Ram', 'Sham');
ram.getName();

