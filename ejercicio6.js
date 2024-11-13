// 6.1
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sum = exams.reduce((acc, exam) => { return acc + exam.score},0)

console.log(sum)

// 6.2

const Approved = exams.filter(exam => exam.score>= 5)

const approvedScore = Approved.map(exam => exam.score);

const sumApproved = approvedScore.reduce((acc, approvedScore) => {return acc + approvedScore}, 0)

console.log(sumApproved)

// 6.3

const average = exams.reduce((acc, exam) => { return acc + exam.score},0)

const total = average/exams.length

console.log(total)