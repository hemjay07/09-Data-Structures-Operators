// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  delivery: function ({ name = [], time = [], maindish = 1, address = [] }) {
    console.log(
      `deliver ${this.mainMenu[maindish]} to ${name} who lives at ${address} at ${time}`
    );
  },
  orderPizza: function (ing1, ...otherIngridents) {
    console.log(`the pizza was made with ${ing1} and ${otherIngridents}`);
  },
};
// restaurant.delivery({
//   name: 'lawal',
//   time: '22:00',
// });

// // destructuring objects
// const { name, mainMenu, starterMenu } = restaurant;
// // console.log(name, mainMenu, starterMenu);

// const {
//   name: customerName,
//   mainMenu: mainMeal,
//   starterMenu: starterMeal,
// } = restaurant;
// // console.log(customerName, mainMeal, starterMeal);

// // nested objects

// const {
//   openingHours: {
//     fri: { open: o, close: c },
//   },
// } = restaurant;
// // console.log(o, c);

// // the spread  and rest operator

// const [first, , second, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// // console.log(first, second, otherFoods);

// const add = function (...elements) {
//   let m = 0;
//   for (let i = 0; i < elements.length; i++) {
//     m += elements[i];
//   }
//   return m;
// };
// // console.log(add(2, 4, 5));

// restaurant.orderPizza('pizzabread', 'meat', 'onion');

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = function (...playerNames) {
//   for (let i = 0; i < playerNames.length; i++) {
//     console.log(playerNames[i]);
//   }
//   console.log(playerNames.length);
// };

// printGoals(...game.scored);
// team1 > team2 || console.log('team 1 is more likely to win');
// const user = [];

// console.log(user[0]?.[1] ?? 'array is empty');

//looping over object
const entries = Object.entries(restaurant.openingHours);
for ([key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close} `);
}
