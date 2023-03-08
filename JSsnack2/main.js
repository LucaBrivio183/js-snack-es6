'use strict'

//array of objects   
const students = [
    {
        Id: 213,
        Name: 'Marco della Rovere',
        Grades: 78, 
    },
    {
        Id: 110,
        Name: 'Paola Cortellessa',
        Grades: 96, 
    },
    {
        Id: 250,
        Name: 'Andrea Mantegna',
        Grades: 48, 
    },
    {
        Id: 145,
        Name: 'Gaia Borromini',
        Grades: 74, 
    },
    {
        Id: 196,
        Name: 'Luigi Grimaldello',
        Grades: 68, 
    },
    {
        Id: 102,
        Name: 'Piero della Francesca',
        Grades: 50, 
    },
    {
        Id: 12,
        Name: 'Francesca da Polenta',
        Grades: 84, 
    },
]

//map  students name and create uppercase version in a new array
const upperCaseNames = students.map(item => {
    return { Name: item.Name.toUpperCase() };
  });

console.log(upperCaseNames);

//filter out better students (Grades > 70)
const betterStudents = students.filter(item => {
     if  (item.Grades > 70){
     return true
    }});

console.log(betterStudents);

//filter out  better new students (Grades > 70m && Id > 120)
const betterNewStudents = students.filter(item => {
    if  (item.Grades > 70 && item.Id > 120){
        return true
       }});

  console.log(betterNewStudents);