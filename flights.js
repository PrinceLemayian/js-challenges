'use strict';

// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsArr = flights.split('+');
const getCode = str => str.slice(0, 3).toUpperCase();

const getEvent = function (arr) {
  const eventArr = arr.split(';');
  const [event, airport, destination, time] = eventArr;
  const eventOutput =
    (event.startsWith('_Delayed') ? '🔴 ' : '') +
    event.replaceAll('_', ' ').trim();
  return `${eventOutput.padStart(24)} from ${getCode(airport)} to ${getCode(destination)} (${time.split(':').join('h')})`;
};

for (const flight of flightsArr) {
  console.log(getEvent(flight));
}
