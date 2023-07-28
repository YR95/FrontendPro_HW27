function Person(name, age) {
  this.name = name;
  this.age = age;

  this.displayPersonInfo = function () {
    console.log(`Name: ${name}, Age:${age}`)
  }
}

function Car(brand, model, yearOfProduction, number) {
  this.brand = brand;
  this.model = model;
  this.yearOfProduction = yearOfProduction;
  this.number = number;
  this.owner = "no owner";

  this.setOwner = function (person) {
    if (person.age > 18) {
      this.owner = new Person(person.name, person.age)
    } else {
      console.log(`Age is less than 18  for person ${person.name}`);
    }
  }

  this.displayInfoCarOwner = function () {
    if (this.owner !== "no owner") {
      this.owner.displayPersonInfo();
    }
    console.log(this);

  }
}

let anna = new Person("Anna", 34);
let marins = new Person("Marina", 55);
let serzh = new Person("Serzh", 15);
carBmw = new Car("bmw", 'x5', '1934', '12-23-3UY')
carBmw.setOwner(anna);
carBmw.displayInfoCarOwner();

carFiat = new Car("Jeep", 'Lander', '2000', '1-33-3PL');
carFiat.setOwner(marins);
carFiat.displayInfoCarOwner();

carFiat = new Car("fiat", '500', '2004', '68-33-3PL');
carFiat.setOwner(serzh);
carFiat.displayInfoCarOwner();
