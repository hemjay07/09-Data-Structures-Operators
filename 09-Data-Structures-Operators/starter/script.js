// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   delivery: function ({ name = [], time = [], maindish = 1, address = [] }) {
//     console.log(
//       `deliver ${this.mainMenu[maindish]} to ${name} who lives at ${address} at ${time}`
//     );
//   },
//   orderPizza: function (ing1, ...otherIngridents) {
//     console.log(`the pizza was made with ${ing1} and ${otherIngridents}`);
//   },
// };
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

// //looping over object
// const entries = Object.entries(restaurant.openingHours);
// for ([key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close} `);
// }

// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
//  Answer
// for (players of game.scored.entries()) {
//   console.log(`Goal ${players[0] + 1}: ${players[1]}`);
// }
// // Or
// for ([goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1} : ${player}`);
// }

// 2. Use a loop to calculate the average odd and log it to the console (We already
//   studied how to calculate averages, you can go check if you don't remember)
// let sum = 0;
// for (odd of Object.values(game.odds)) {
//   sum += odd;
// }
// const avg = sum / Object.values(game.odds).length;
// // console.log(avg);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names

// for ([team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${team}`;
//   console.log(`odd of ${teamStr} : ${odd}`);
// }
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

// const scorers = {};
// for (player of game.scored) {
//   console.log(player);
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// Maps: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);

// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`${key} . ${value}`);
// }

// let answer = Number(prompt('your answer'));

// console.log(
//   `${
//     answer === question.get('correct')
//       ? question.get(true)
//       : question.get(false)
//   }`
// );
// Or
// console.log(question.get(question.get('correct') === answer));

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// 1. Create an array 'events' of the different game events that happened (no
//   duplicates)
// const events = [...new Set([gameEvents.values()])];

// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.

// gameEvents.delete(64);

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(gameEvents.size);
// console.log(
//   `An event happened, on average every ${90 / gameEvents.size} minutes`
// );

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL
// for (const [time, event] of gameEvents) {
//   console.log(
//     time > 45
//       ? `[SECOND HALF] ${time} : ${event}`
//       : `[FIRST HALF] ${time} : ${event}`
//   );
// }

// ////////////////////////
// working with strings

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log('gksi'[3]);
// console.log(airline.slice(7, 10));
// console.log(airline.slice(-3));

// const compareEmail = function (x, y) {
//   const comparedEmail = y.toLowerCase().trim();
//   console.log(x === comparedEmail);
// };

// compareEmail('mujeeb', ' Mujeeb  ');

// const priceGB = '234,4E';
// const priceUS = priceGB.replace('E', '$');
// const announcement =
//   'all passengers should come to the boarding door 23, Boarding door 23';

// console.log(announcement.replaceAll('door', 'gate'));

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   let capitalName = [];
//   for (const n of names) {
//     // capitalName.push(n[0].toUpperCase() + n.slice(1));
//     capitalName.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(capitalName.join(' '));
// };
// // capitalizeName('abdul mujeeb oladimeji opabode');

// const maskCreditCard = function (number) {
//   const str = String(number);
//   console.log(str.slice(-4).padStart(str.length, '*'));
// };
// maskCreditCard(485900358839339);
// maskCreditCard('59500394950449585');

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable 
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const button = document.querySelector('button');
// button.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const textArray = text.split('\n');

//   for ([i, t] of textArray.entries()) {
//     let te = t.toLowerCase();
//     let [first, second] = te.split('_');
//     let camelCase = first + `${second[0].toUpperCase()}` + second.slice(1);
//     console.log(camelCase.padEnd(20, ' ') + '✅'.repeat(i + 1));
//   }
// });

// // INPUT FROM MAYBE AN API
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// for (const flight of flights.split('+')) {
//   // destructure the output array from the split method into 4 variables
//   const [occurence, departure, arrival, timing] = flight.split(';');
//   // output = replace all "_" in occurence with " ", take the first 3 letters of arrival and departure and convert them to uppercase. Join all these together in a string literal
//   let outPut = `${occurence.replaceAll('_', ' ')} from ${departure
//     .toUpperCase()
//     .slice(0, 3)} to ${arrival.toUpperCase().slice(0, 3)} (${timing}) `;
//   console.log(
//     // pad output at the start,add 🛑 if output constains the string "delayed"
//     outPut.includes('Delayed')
//       ? ('🛑' + outPut).padStart(50)
//       : outPut.padStart(50)
//   );
// }

// // RESULT
// //       🛑 Delayed Departure from FAO to TXL (11:25)
// //                    Arrival from BRU to FAO (11:45)
// //         🛑 Delayed Arrival from HEL to FAO (12:05)
// //                  Departure from FAO to LIS (12:30)
