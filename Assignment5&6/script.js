class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    honk() {
        console.log("Tuut tuut");
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}, Gas: ${this.gas} liters`);
    }

    raceTurn() {
        let gasLoss = 5;
        if (this.year !== new Date().getFullYear()) {
            gasLoss += new Date().getFullYear() - this.year;
        }
        this.gas -= gasLoss;
        console.log(`${this.brand} ${this.model} raced! Gas remaining: ${this.gas} liters.`);
    }
}

const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

car1.honk();
car2.honk();
car3.honk();
car4.honk();
car5.honk();
car6.honk();

for (let i = 1; i <= 7; i++) {
    console.log(`Turn ${i}:`);
    car1.raceTurn();
    car2.raceTurn();
    car3.raceTurn();
    car4.raceTurn();
    car5.raceTurn();
    car6.raceTurn();
}
