'use strict'

//guestsName variable

const guestsNames = ['Brad Pitt',
    'Johnny Depp', 
    'Lady Gaga', 
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin']


const guests = guestsNames.map ((item, index) => {
  return { 
    table: 'Tavolo Vip',
    name: item,
    seat: index + 1,
  };
});

console.log(guests)