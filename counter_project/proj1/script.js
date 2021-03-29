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