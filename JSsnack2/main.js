'use strict'

//array of objects   
const students = [
    {
        Id: 213,
        Name: 'MARCO DELLA ROVERE',
        Grades: 78, 
    },
    {
        Id: 110,
        Name: 'PAOLA CORTELLESSA',
        Grades: 96, 
    },
    {
        Id: 250,
        Name: 'ANDREA MANTEGNA',
        Grades: 48, 
    },
    {
        Id: 145,
        Name: 'GAIA BORROMINI',
        Grades: 74, 
    },
    {
        Id: 196,
        Name: 'LUIGI GRIMALDELLO',
        Grades: 68, 
    },
    {
        Id: 102,
        Name: 'PIERO DELLA FRANCESCA',
        Grades: 50, 
    },
    {
        Id: 12,
        Name: 'FRANCESCA DA POLENTA',
        Grades: 84, 
    },
]


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