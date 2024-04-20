'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1981',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObj = Object.fromEntries(userMap);

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const map = new Map([
    [{paper: 400}, 21000]
]);
map.set(shops[0], 5000)
    .set(shops[1], 15000)
    .set(shops[2], 11000);

console.log(map);
console.log(map.get(shops[1]));
console.log(map.has(shops[1]));
console.log(map.size);
// map.delete(shops[0]);
// map.clear();
// console.log(map.size);

for(let shop of map.keys()) {
    console.log(shop);
}

for(let price of map.values()) {
    console.log(price);
}

for(let entry of map.entries()) {
    console.log(entry);
}

for(let [shop, price] of map.entries()) {
    console.log(`Shop: ${JSON.stringify(shop)} => Price: ${price}`);
}

map.forEach((value, key, map) => {
    console.log(key, value);
});