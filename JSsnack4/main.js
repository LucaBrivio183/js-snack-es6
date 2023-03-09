'use strict'

//array of object
const soccerTeams = [
    { name: 'Juventus', pointsDone: 0, penaltiesAgainst: 0 },
    { name: 'Inter', pointsDone: 0, penaltiesAgainst: 0 },
    { name: 'Milan', pointsDone: 0, penaltiesAgainst: 0 },
    { name: 'Roma', pointsDone: 0, penaltiesAgainst: 0 },
    { name: 'Napoli', pointsDone: 0, penaltiesAgainst: 0 }
  ];
  
//random numbers for key values
soccerTeams.forEach(team => {
    team.pointsDone = Math.floor(Math.random() * 5);
    team.penaltiesAgainst = Math.floor(Math.random() * 5);
  });

//generate new array with penalties and team name
const penaltiesAgainst =  soccerTeams.map(({ name, penaltiesAgainst }) => ({ name, penaltiesAgainst  }));

//print on console
console.log('Teams:', soccerTeams);
console.log('Penalties for each team:', penaltiesAgainst);