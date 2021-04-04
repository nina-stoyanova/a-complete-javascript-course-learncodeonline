var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

//counter.innerHTML = "10001";

let count = 1;

setInterval(() => {
    if (count < 1000) {
        count = count + 1;
        counter.innerHTML = count;
    }
}, 1);


setTimeout(() => {
    followers.innerHTML = "Followers on Instagram!"

}, 5000);


class Person {
    constructor() {
        this.name = "Nina";
        this.fun = function () { };
    }
    getGreeting() {
        return `Hello ${this.name}`;
    }

}

let obj = new Person();



class Animal {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }


}

let animal = new Animal("dog", "sharo");





