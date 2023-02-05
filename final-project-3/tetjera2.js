const cities = [
    { name: 'Prishtina', nrIBanoreve: 400000 },
    { name: 'Peja', nrIBanoreve: 100000 },
    { name: 'Gjakova', nrIBanoreve: 50000 },
    { name: 'Prizreni', nrIBanoreve: 50000 },
    { name: 'Ferizaj', nrIBanoreve: 30000 },
    { name: 'Gjilan', nrIBanoreve: 50000 },
    { name: 'Mitrovica', nrIBanoreve: 20000 }
];

//consoles out all the cities with less than 100000 people
const citiesIds = [];
cities.forEach(function (city) {
    if (city.nrIBanoreve < 100000) {
        citiesIds.push(city.name);
    }
});

console.log("Citie's ids : ", citiesIds.toString());

//replaces the letter a with b 
const replacedCities = cities.map(city => {
    return city.name.replace("a", "b")
})

console.log(replacedCities)

// finds all the cities that start with P
const result = cities.filter(citiesThatStartWithP);
console.log(result);

function citiesThatStartWithP(city) {
    if (city.name.charAt(0) === 'P') {
        return city;
    }
}



// multiply the number of people that a city has with 100

function multiplyNumberofPopulationAndCompareWithMax(x) {

    if (x * 100 < Number.MAX_VALUE && !isNaN(x)) {
        try {
            return (x * 100).toExponential();
        }
        catch (error) {
            alert('Something went wrong with the multiplication');
        }
    }
}

console.log(multiplyNumberofPopulationAndCompareWithMax(cities[0].nrIBanoreve));



function User(first, last, age, city) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.city = city;
}

const User1 = new User("Gentrit", "Kryeziu", 19, "Prishtina");
const User2 = new User("John", "Smith", 35, "Peja");
const User3 = new User("Festim", "Gashi", 19, "Mitrovica");

const users = [];
users.push(User1);
users.push(User2);
users.push(User3);
console.log(users);

let findTheCityOfTheUser =
    users.map((user) => {
        return "City of " + `${user.firstName} is ${user.city}`;
    });
console.log(findTheCityOfTheUser);
