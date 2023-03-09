'use strict'

//array of object
const racingBikes = [
    { name: 'Viathon G.1 RED AXS ', weight: 7.5 },
    { name: 'Cannondale Super X', weight: 8.3 },
    { name: 'Mondraker Foxy Carbon RR', weight: 6.9 },
    { name: 'Canyon Aeroad CF SLX Disc 9.0 Di2', weight: 7.2 },
    { name: 'Specialized Epic Pro', weight: 6.7 }
  ];

//function for finding lighter bike

function checkLighterBike(...racingBikes) {
    let lighterBike = racingBikes[0];
    
    racingBikes.forEach(racingBike => {
      if (racingBike.weight < lighterBike.weight) {
        lighterBike = racingBike;
      }
    });
    
    return lighterBike;
  }

//recall function

const lighterBike = checkLighterBike(...racingBikes);
const { name,weight } = lighterBike;

//print on console
console.log(`Lighter Bike is ${name} weightin ${weight} kg`);