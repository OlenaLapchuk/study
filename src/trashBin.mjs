/*const marksWeight = 78;
const marksHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const marksBMI = 78 / 1.69 ** 2;
const johnBMI = 92 / (1.95 * 1.95);
console.log(marksBMI, johnBMI)

//const marksHigherBMI = marksBMI > johnBMI
//console.log(marksHigherBMI); 

if(johnBMI > marksBMI) {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${marksBMI}`)
}
else {
console.log(`Mark's BMI ${marksBMI} is higher than John's ${johnBMI}!`)
}


/*const olenka = {
    age: 24,
    gender: 'female',
    breasts: 3
}
console.log(olenka.age)
console.log(olenka ['gender'])

const searchingKey = 'gender';
console.log(olenka [searchingKey]) 


const searchingArray = [‘gender’, ‘age’, ‘breasts’, ‘eyeColor’]

for (let i = 0 ; i <=searchingArray.length(); i++) { console.log(olenka[searchingArray[i]])}
// змінна - силка на значення
// вона може бути і примітивом або ні. Не примітиви або обєкти відрізняються від примітивів тим що в них одночасно є і ключ і значенн а в примітив ЛИШЕ ЗНАЧЕННЯ
// достукатись до значення об'єкта можна декількома способами. 1) це через крапку - за умови що сам ключ написани йправильно, тобто без спец символів без девісів і без цифер. 2) за допомогою []. Цей спосіб ми можем застосовувати коли ключ записаний неправильно і коли ми шукаємо ключ через іншу змінну. Також є методи обєкти(OBJECT.VALUES....)

*/

/*const avrScoreDolphins  = (96 + 108 + 29) / 3;
const avrScoreCoalas  = (96 + 108 + 109) / 3;
const minScore = 100; 
const draw = avrScoreDolphins === avrScoreCoalas && avrScoreDolphins >= minScore && avrScoreCoalas >= 100;
console.log ( avrScoreDolphins, avrScoreCoalas);

if ((avrScoreDolphins > avrScoreCoalas) && avrScoreDolphins >= minScore) {
    console.log ( `Dolphins have won a trophey with average score ${avrScoreDolphins}`)
} 
else if ((avrScoreDolphins < avrScoreCoalas) && avrScoreCoalas  >= minScore) {
    console.log(`Coalas have won a trophey with average score ${avrScoreCoalas} `)
}
else if(draw) {
    console.log(' Both teams won the trophey')
}else {
    console.log( 'No one team won the trophey')
}
 

/*const avrScoreDolphins  = (50 + 95 + 123) / 3;
const avrScoreCoalas  = (30 + 95 + 123) / 3;

console.log(avrScoreDolphins, avrScoreCoalas)

if ( avrScoreDolphins > avrScoreCoalas && avrScoreDolphins >= 100){
    console.log(`Dolphins have won a trophey with average score ${avrScoreDolphins}`)
}
else if (avrScoreCoalas > avrScoreDolphins && avrScoreCoalas >= 100){
    console.log(`Coalas have won a trophey with average score ${avrScoreCoalas} `)
}
else if(avrScoreDolphins === avrScoreCoalas && avrScoreDolphins >= 100 && avrScoreCoalas >= 100){
    console.log(' Both teams won the trophey')
}
else {
    console.log( 'No one team won the trophey')
}
const bill = 275;
const percent15 = bill * 0.15;
const percent20 = bill * 0.2;
let tip = bill > 50 && bill < 300 ? console.log(`The bill was ${bill}, the tip was ${percent15}, and the total value
${bill + percent15}`) : console.log(`The bill was ${bill}, the tip was ${percent20}, and the total value ${bill + percent20}`);

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/

/*function calcTip (bill) {
    if (bill >= 50 || bill =< 300) {
        const tip = bill * 0.15;
    } 
    else {
        const tip = bill * 0.20
    }
    return tip;
}
const tipToLeft = calcTip(100);
console.log(tipToLeft)  */

/*const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const scoreDolphins = calcAverage(44,23,71)
 const scoreCoalas  = calcAverage(65,54,49)
 console.log(scoreCoalas, scoreCoalas)


 function checkWinner(dolphinsAverage, coalasAverage)
{
    if (dolphinsAverage >= 2 * coalasAverage) {
        console.log (`Dolphins win with ${dolphinsAveraage} vs. ${coalasAverage}`)
    }
    else if (coalasAverage >= 2 * dolphinsAverage ){
        console.log (`Coalas win with ${coalasAverage} vs. ${dolphinsAveraage}`)
    }
    else {
         console.log(`no team wins!`)
    }
}
const winner = checkWinner(scoreDolphins, scoreCoalas)
console.log(winner)
*/

/*function countTip(bill){
return bill > 50 && bill < 300 ?  bill * 0.15 : bill * 0.20 
}

const bills = [125, 555,44]
const tips = [
    countTip(bills[0]),
    countTip(bills[1]),
    countTip(bills[2])
]

console.log(tips)

const total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]]
console.log(total)*/




/*const js = 'now';
if (js === 'now') alert('YEEEEEEEEEEEEEP')
console.log(40+10+10);
console.log('Olena')

const name ='oLEG'

console.log(name)
console.log(name)
console.log(name)
console.log(name)
*/
/*let javascriptIsFun = true;
console.log(javascriptIsFun)
//console.log(typeof true)
//console.log(typeof 'Olena')

javascriptIsFun = 'YESSSS';
console.log (javascriptIsFun);

let year;
console.log(year)

year = 1197;
console.log(typeof year) */

//const currentYear = 2021;
//let myAge = currentYear - 1997
//let hisAge = currentYear - 1994

//console.log(myAge, hisAge);//

/*function personGreetings (firstName, secondName, dayOfWeek) {
    console.log (`${firstName} ${secondName}, How is your day?`);
    

    function checkCurrentDay(currentDayOfweek) {
        if(currentDayOfweek !== 'Sunday' && currentDayOfweek !== 'Saturday') {
            console.log('Please track yor time')
            const y = 'LALAL'
        };
    }
    checkCurrentDay (firstName, secondName, dayOfWeek);
}
personGreetings ("Olenka", "Lapchuk", "Monday")*/


/*function personGreetings (firstName, secondName, dayOfWeek) {
    console.log (`${firstName} ${secondName}, How is your day?`);
    const y = 'LALAL'
    

    function checkCurrentDay(currentDayOfweek) {
        if(currentDayOfweek !== 'Sunday' && currentDayOfweek !== 'Saturday') {
            console.log('Please track yor time')
        };
    }
    checkCurrentDay (dayOfWeek);
    console.log(y)
}
personGreetings ("Olenka", "Lapchuk", "Monday") */

/*function visibilityScope() {
    const upperFunctionVariable = '1';
    console.log(upperFunctionVariable )
    function secondScope() {
        const pre = '2'
        console.log(pre + upperFunctionVariable)
    }
    secondScope();
} 
visibilityScope();*/

/*function countToFive(currentNumber){
    let count = 0;
    if(count === 5){
        console.log(count);
        return;
    }
    countToFive(count)
}
countToFive(0);*/

//let isFunny = false;
//console.log(isFunny);

/*const currentYear = 2021
let myAge = currentYear - 1997
let yarikAge = currentYear - 1993
console.log(myAge, yarikAge)
console.log(myAge * 2, myAge / 2 )

const firstName = 'Olena'
const lastName = 'Lapchuk'
console.log(firstName + ' ' + lastName)

let x = 10 + 5;
console.log(x);

let y = 10 + 5;
y += 10
y++;
y--;
console.log(y)
// logical operators
console.log(myAge > yarikAge);
console.log(myAge >= 20);

const myFullAge = myAge > 20;
console.log(myFullAge) */

/*const myName = 'Olena'
const myAge = 24
const myCity = 'Lviv'
// template literals
console.log(`My name is ${myName}. I am ${myAge} years old. I am from ${myCity}`)
 // вбудовувати вирази чи використовувати багато рядків в одному
 // Щоб вставити вираз (плейсхолдер) у шаблонний літерал, ми додаємо їх у знак долара та фігурні дужки, подібні до цього ${expression}.
console.log(`olena
where are you?`)

console.log('Olena \n\
Are you here \n\
')

/*const olenaAge = 17;
const isEnough = 18;

if (olenaAge === 18){
    console.log('Olena can get driven license')
}
else {
    console.log('Not yet')
}

if(olenaAge === isEnough){
    console.log('Olena can get driven license')
} else if (olenaAge < isEnough){
    let difference = (isEnough - olenaAge)
    console.log(`Olena need ${difference} year to get driven license`);
}
   else if (olenaAge > isEnough){
       console.log('She can even now to get driven license')
   }

   const age = 19;
   const ageEnough = age >= 18 

   if(ageEnough){
       console.log('It is enough')
   } else {
       console.log('not yet')
   }

*/
/*const birthdayYear = '1997';
console.log(Number(birthdayYear), birthdayYear)
console.log (Number(birthdayYear) + 24)

let dogName = 'Luna'
console.log(Number(dogName))


console.log('16' + 4)
console.log('16' - 4 - '2')
console.log('16' * 4)
console.log('16' / 4)
console.log('16' > 4)

// Faulthy and Truthy values
// Faulthy is коли значення загалом не є неправдиві, але стануть такими коли ми їх спробуємо конвертувати в булін. 
// Такі значення : 0. '' undefined. nAn, null

console.log(Number('10'))
console.log(Boolean(0));
console.log(Boolean(10))
console.log(Boolean(''));
console.log(Boolean('lla'))
console.log(Boolean(NaN)) */

/*const money = 0;

if (money) {
    console.log(' Don`t spend them at all')
} else {
    console.log('You should get a job')
}


const trip = 100;
if (trip) {
    console.log('She has alreade traveled');
}
else {
    console.log( 'Let`s travel')
}


const age = 18;
if(age === 18) console.log(' You just become an adult')

// ===  це строгий оператор порівняння який не передбачає тайп квершин, тобто в нас значення які порівнюються мають  бути одного типу
// a == тут порвняння відбувається з тайп квершином, тобто враховується конвертування даних джава скріптом

const favNumber = Number(prompt('What is your favourite number?'))
console.log(favNumber)
console.log(typeof(favNumber))

/*if (favNumber === 27) {
    console.log( 'Ulal the same number')
}
else if (favNumber === 28){
    console.log( '28 also is the same number')
}
else {
    console.log('Others numbers')
}

if(favNumber !== 50) console.log ('Why not 50?')
 
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

if( hasDriversLicense  &&  hasGoodVision) {
    console.log(' Sarakh is a good driver')
}
else if( hasDriversLicense || hasGoodVision) {
    console.log('Sarakh has a driverse license')
}
else {
    console.log ('Not time yet')
}

console.log(hasDriversLicense && hasGoodVision) // false
console.log(hasDriversLicense || hasGoodVision) // true 
console.log(!hasGoodVision) // true

const shouldDrive = hasDriversLicense && hasGoodVision
const improveVision = hasDriversLicense || hasGoodVision

if(shouldDrive) {
    console.log('Sarah should drive')
} else {
    console.log('Sarah can`t drive');
}

if (shouldDrive){
    console.log('Sarah should drive')
}
else if(improveVision){
console.log('Sarah should improve her vision')
}

*/

/*const day =  'Thursday'; // зручно використовувати коли нам треба порівняти одне значення одразу з різними варіантами
switch(day){ 
    case 'Monday' : // day === monday
        console.log('Read a books');
        break;
    case 'Tuesday':
        console.log('Grandma visiting')
        break;
    case 'Wednesday':
        console.log('Go to the theatre')
        break;
    case 'Thursday':
    case 'Friday':
        console.log('learning')
        break;
    default:
        console.log ('not valid')
}

if (day === 'Monday') {
    console.log('Read a books');
}
else if (day === 'Tuesday'){
    console.log('Grandma visiting')
}
else if (day === 'Wednesday'){
    console.log('Go to the theatre')
}
else if (day === 'Thursday' || day === 'Friday'){
    console.log('learning')
}
else {
    console.log ('not valid day')
}
// умовні оператори - тернарні оператори
// оператори завтри утворюють значення ..оператор є expression

// type coersion - приведення до типів
*/
/*const hisAge = 28;
hisAge >= 28 ? console.log(`I am an adult person bacouse i am ${hisAge} year's old`) : console.log(`I am a child`)

let drink = age >= 18 ? 'wine' : 'water'
console.log(drink)

let drink2;
if(age >= 18){
    drink2 = 'wine';
} else{
    drink2  = 'water'
}
console.log(drink2)

console.log( ` I 'like to drink ${age >= 18 ? 'wine' : 'water'}`)

*/
// FUNCTIONS може не лише повторно використовувати певний шматок коду але й приймати дані , і повертати
// parameters = var

/*function logger() {
    console.log('My name is Olenka')
}

logger();
logger();
logger();
logger();


function freshProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} and ${oranges}`;
    return;
}
 const orangesJuice = freshProcessor (3, 7);
 console.log(orangesJuice)

// FUNCTION DECLERATION
*/
 /*function calcAge1 (birthdayYear){
     const currentYear = 2021;
     const age = currentYear - birthdayYear;
     return age;
 }
 const Age1 = calcAge1 (1997);
 console.log(Age1);
// FUNCTION (EXPRESSION - виробляє значення  ). і ми то значення присвоюєму змінній. фпфо суті- функція це і є змінна
//Если функция объявлена как отдельная инструкция в основном потоке кода, то это Function Declaration.
//Если функция была создана как часть выражения,тобто присвоєна в якусь змінну  то считается, что эта функция объявлена при помощи Function Expression.

 const calcAge2 = function (birthdayYear){
    const currentYear = 2021;
    const age = currentYear - birthdayYear;
    return age;
 }
 const age2 = calcAge2 (1996);
 console.log(age2)

 // DIGGERENCE FUNCTIONS DECLATATIONS  - Ми пможемо викликати функцію пред тим як її оголошувати
 // ARROW FUNCTIONS - СТРІЛКОВІ ФУНКЦІЇ. Special form of expression functions

 /*const calAge3 = birthdayYear => age = 2021 - birthdayYear;
 const age3 = calAge3 (1995)
 console.log(age3)

 const calcRetireYears = birthdayYear => {
     const age = 2021 - birthdayYear;
     const calcRetireYarsLeft = 65 - age;
     return calcRetireYarsLeft
 }
 const yearsRetireLeft =  calcRetireYears(1997)
 console.log(yearsRetireLeft)

 */ // CALLBACK - В одній функції викликали іншу
/*function cutFruits(fruit) {
    return fruit * 4;
}

function fruitProcessor (orange, banan) {
    const orangesPieces = cutFruits(orange);
    const bananaPieces = cutFruits(banan);
    
    const makeJuice = `Juice from ${orangesPieces} oranges and ${banan} bananas`
    return makeJuice;
}

const juice = fruitProcessor (4, 2)
console.log(juice);*/

/*function countYearsToRetire(name, birthdayYear) {
    const age = 2021 - birthdayYear
    const retirement = 65 - age;
    return `${name} has left ${retirement} years to retirement`
}
 const olenaRetire =  countYearsToRetire('Olena', 1997)
 console.log(olenaRetire) */



/*function  countAge(birthdayYear){
    const age  = 2021 - birthdayYear
    return age;
}

 function countYearsToRetire(name, birthdayYear) {
     const age = countAge(birthdayYear)
    const retirement = 65 - age;

    if (retirement > 0 ) {
    return retirement }
    else {
        return - 1;
    }

    /* return `${name} has left ${retirement} years to retirement` */
/*}
 /*const olenaRetire =  countYearsToRetire('Olena', 1950)
 console.log(olenaRetire) 

 // Data strcture - ARRAYS
 // ALL DATA SHOULD BE STORED SOMEWHERE. AND FOR THIS WE USE DATA STRUCTURES, arrays. iT A BIG CONTAINER WHERE WE TROW VARIABLES AND THEN REFERS TO THEM
 // The two most important dada structures in JS ARE ARRAYS AND OBJECTS

 const friends = ['Oleh', 'Iaroslav', 'Yulia']

 console.log(friends[0]);
 console.log(friends[1]);
 
 friends [2] = 'Andriy'

 console.log(friends[2])
 console.log(friends.length);
 console.log(friends[0]);

 console.log(friends.pop());
 console.log(friends)

friends.pop();
console.log(friends)
friends.push('Olena', 'Maks')
console.log(friends.length)
console.log(friends[1])

const birthdayYear = 1997
const info = ['Olena', 2021 - 1997, 'dog', 'alone' ]
console.log(info)
console.log(info[3])
console.log(info.length)

info[4] = 'alone forever'
console.log(info)

function calcAge(birthdayYearr) {
    return (2021 - birthdayYearr)
}

const age  = calcAge(2000)
console.log(age)


// Метод PUSH ЩОБ ДОДАВАТИ ЕЛЕМЕНТИ В МАСИВ

const lifeIs = ['short','hard']
const lifeIsLength = lifeIs.push('Difficult')
console.log(lifeIs);
console.log(lifeIsLength)

lifeIs.unshift('not easy')
console.log(lifeIs)

// remove elements
const removed = lifeIs.pop()
console.log(lifeIs)
console.log(removed)

// remeve first element 
/*
lifeIs.shift();
console.log(lifeIs)
console.log(lifeIs.indexOf ('hard')) 

console.log(lifeIs.includes ('hard'));
console.log(lifeIs.includes ('love'))


const text = 'I am Olena, i`m 24 year`s old'
const textReverse = text.split('').reverse().join('')
console.log(textReverse)


const cats = ['murka','djek', 'brad' ]
console.log(cats.indexOf('murka'))

*/
 /*const cars = ['Mazda', 'Porshe', 'BMW']
 console.log (cars);
 console.log(cars.indexOf('Porshe'))
/*
cars.push('Audi')
console.log(cars)
cars.unshift('LALA')
console.log(cars)
cars.includes('LALA') ? console.log('You can see LALA') : console.log('You can`t see LALA')
const bmwIndex = cars.indexOf('BMW')
bmwIndex = 'DOUBLE BMW';
console.log(bmwIndex);*/


/*const firstCar = {
    model: 'BMW',
    color: 'black',
    owner: 'Olena Lapchuk'
}
console.log( firstCar)
console.log(firstCar.color)
console.log(firstCar['color'])

// Olena Lapchuk is owner of this black BMW

console.log(`${firstCar.owner} is owner of this ${firstCar.color} ${firstCar.model}`)


const years = [1998, 1997, 2001, 2007, 1980]
function calcAge(birthdayYear){
 return 2021 - birthdayYear
}

const ages = [calcAge(years[1]), calcAge(years[2]), calcAge(years[3])]
console.log(ages)

///Масив
const arr = ['Mazda', 'Opel', 'BMW', 'Audi'];
/*arr.map((car, index) => console.log('pushka', index))

const newArr = arr.map((car => {
    if (car === 'Opel'){
        return 'Opel Insignia'
    }
    else {
        return car
    }
} 
))
console.log(newArr) 

arr.forEach((car) => {
    if (car === 'Opel'){
        return 'Opel Insignia'
    }
    else {
        return car
    }
}
)
console.log(arr) */


/* const newArr = arr.map((car) => {
    if (car === 'Opel'){
        return 'Opel Insignia + Yaroslav'
    } else {
        return car
    }
})
console.log(newArr) */




/*const people = [
    {name: 'Olena', age: 24, email: 'olenajourn@gmail.com', pet: 'dog'},
    {name: 'Yulia', age: 25, email: 'yulialap@gmail.com', pet:'cat'}
]

const newDataAboutPeople = people.map(person => console.log ({... person, pet:'dog'}))

const data = [
    {name: 'Denny', city: 'Lviv', hobby: 'Tennis'},
    {name: 'Jhon', city: 'Lviv', hobby: 'Swimming'},
]

const newData = data.map((player, index) =>
    {
        if (index === 1) {
            return {...player, hobby:'volleyball'}
        }
        else {
            return player
        }
    })
console.log(newData)



console.log(people)

const neededCars =  arr.map (car => {
    if ( car === 'BMW') {
        return {
            car: 'BMW', year: 2020
        }
    }
    else if (car === 'Opel') {
        return 'Opel Insignia'
    }
        else {
            return car
        }
})
console.log(neededCars, arr)

const infoZoos = [
    {city: 'Lviv', animals:['bear', 'monkey', 'snake', 'turtle']},
    {city: 'Kyiv', animals: ['elephants', 'snake', 'penguin','turtles']}
]





/*const newInfoZoos =  infoZoos.map(item => {
    if (item.city === 'Lviv' || item.animals.includes('snake')){
        return {...item, city: 'Chicago'}
    }
    else{
        return item;
    }
}) */



// ше як замінити в масиві елемент 
//onsole.log(newInfoZoos)

/*const fav = [
    {name: 'Olena', age: 24, hobby: 'tennis'},
    {name: 'Yulia', age : 25, hobby: 'reading'}
]

const newFav = fav.map(person => {
    return {...person, hobby:'painting'}})
console.log(newFav)

let studentRecords = [ 
          {name: 'John', id: 123, marks : 98 }, //айді віка на 120/зробити  всі іменна аперкейс. 
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

//const newStUdentsRecord = studentRecords.filter((student => student.name === 'yaga'))
//console.log(newStUdentsRecord)

/*const newStudentRecords = studentRecords.filter (student => student.marks >= 45)
console.log(newStudentRecords) */


/*const agges = [32, 33, 16, 40];

const newAges = agges.filter(age => age > 18)
console.log(newAges)

/*const country ='Ukraine';
const continent = 'Europe';
let population = 44;
console.log(country)
console.log(continent)
console.log(population)

const isIsland = false;
let language = 'ukrainian';

/*console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

// Basic operators */

/*population = 44000000 / 2;
console.log(population);
population++; 
console.log(population);

const populationOfFinland = 6000000;
console.log(populationOfFinland > population)

const averPopulation = 3300000;
console.log(averPopulation > population); 

const description = country + ' is in ' + continent + ', and its '  + population + ' million people speak ' +  language
console.log(description);

console.log(`${country} is in ${continent}, and its ${population} million
people speak ${language}`)
/*
if(population > 73) {
    console.log(`${country}'s population is above average`)
}
else {
    console.log(`${country}'s population is ${population - 33} million below average`)
}
console.log(`
'9' - '5';                  
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2`)

//4. 22. 617. false. 114+9(125)- 4(121)- 2 (119)

const numNeighbours = prompt('How many neighbour countries does your country have?')
if(numNeighbours === 1 ){
    console.log('Only 1 border!')
}
else if(numNeighbours > 1) {
    console.log('More than 1 border')
}
else {
    console.log('No borders')
} */


/*const goodPlace = language === 'english' && population < 50 && !isIsland;
console.log (goodPlace)

if(goodPlace) {
    console.log(`You should live in ${country}`)
} else {
    console.log(`${country} does not meet your criteria`)
}*/

/*function describeCountry(country, population, capitalCity){
    const cityInfo = `${country} has ${population} million people and its capital city is ${capitalCity}`
    return;
}
describeCountry ('Ukraine', 43, 'Kyiv')
const italyInfo = describeCountry ('Italy', 60, 'Rome')
const spainInfo = describeCountry ('Spain', 67, 'Madrid')
console.log(ukraineInfo)
console.log(italyInfo)
console.log(spainInfo)

function describeCountry(country, population, capitalCity){    
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
describeCountry ('Ukraine', 43, 'Kyiv')
describeCountry ('Italy', 60, 'Rome')
describeCountry ('Spain', 67, 'Madrid')

console.log(describeCountry ('Ukraine', 43, 'Kyiv'));
console.log(describeCountry ('Italy', 60, 'Rome'))
console.log(describeCountry ('Spain', 67, 'Madrid'))
*/
// 1



/*const percentageOfWorld2 = function(population){
    let worldPopulation = 7900;
    const countPercent = population / 7900 * 100;
    return countPercent;
}
const chinaPercent2 = percentageOfWorld1 (1441);
const usPercent2 = percentageOfWorld1 (3900);
const italyPercent2 = percentageOfWorld1 (1000)
console.log(chinaPercent2, usPercent2, italyPercent2);

let chinaPercent3 = population => (population / 7900) * 100;
const chinaPercent3 = percentageOfWorld3 (1441)
console.log(chinaPercent3)

*/ 
/*function percentageOfWorld1(population){
  let worldPopulation = 7900;
  const countPercent = population / 7900 * 100;
  return countPercent;
}
const chinaPercent = percentageOfWorld1 (1441);
const usPercent = percentageOfWorld1 (3900);
const italyPercent = percentageOfWorld1 (1000)
console.log(chinaPercent, usPercent, italyPercent)


function describePopulation (country, population) {
    percentageOfWorld1(population)
    return `${country} has ${population} million people, which is about ${chinaPercent}`;
}

 const chinaDescribtion = describePopulation ('China', 1441)
 console.log(chinaDescribtion) */

 /*function percentageOfWorld (population) {
     return (population / 7900) * 100;
 }

 function countryDescription (country, population)
{   
    const countryPercent = percentageOfWorld (population)
    return `${country} has ${population} million people, which is about ${countryPercent}`
}
 const chinaDescription = countryDescription('China', 1400)
 const usDescription = countryDescription('United States ', 3900)
 const italyDescription = countryDescription('Italy', 1000)
 console.log(chinaDescription)
 console.log(usDescription)
 console.log(italyDescription)


 /*const populations = [2,6,7,8]
 if(populations.length === 4){
     console.log(populations)
 }
function countPercent (population){
 return population / 7900 * 100;
 }
 const percentages =[
 countPercent(populations[0]),
 countPercent(populations[1]),
 countPercent(populations[2]),
 countPercent(populations[3])
 ]

console.log(percentages)
*/

/*onst populations = [10, 15,12,16]
if(populations.length === 4){
    console.log(populations)
}

function countPercent(populattion){
    return population / 7900 * 100
}

const percentages = [
    countPercent (populations [0])
]

*/
/*const neighbours = ['Poland', 'Hungary', 'Russia']

neighbours.push('Utopia')
console.log(neighbours)

neighbours.pop()
console.log(neighbours);
neighbours.includes('German') ? console.log(neighbours) : console.log(`Probably not a central European country :D`)
console.log(neighbours.indexOf('Russia'))

neighbours [2]  = 'US'
console.log(neighbours)

const myCountry = {
    country: 'Ukraine',
    city: 'Kyiv',
    language: 'ukrainian',
    population: 3,
    neighbours
}

console.log(myCountry)
//'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'


console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.city} `)

myCountry.population += 2;
console.log(myCountry.population)
myCountry ['population'+ 2]

console.log(myCountry.population)

/*
console.log("Olenka");

const firstName = "Olenka";
const lastName = "Lapchuk";

console.log(firstName, lastName);

// Assignment 1

const country = "Ukraine";
let population = 90000;
const continent = "Europe";

console.log(country);
console.log(population);
console.log(continent);

// Data types

const isIsland = false;
let language;

console.log(isIsland, population, country, language);

//LECTURE: let, const and var

language = "ukrainian";
populationlation = 1000000;

//LECTURE: Basic Operators

//2 Increase the population of your country by 1 and log the result to the console

population--;
console.log(population);

//3 The average population of a country is 33 million people. Does your country have less people than the average country?

let finlandPopulation = 600000;
console.log(finlandPopulation < population);

//4 The average population of a country is 33 million people. Does your country have less people than the average country ?

/*5 Based on the variables you created, create a new variable 'description'which contains a string with this format: 
'Portugal is in Europe, and its 11 million people speak portuguese 

const countryDescription =
  country + " is in " + continent + ", its " + population + " million people speak " + language;
const countrySecondDescription = `${country} is in ${continent} its ${population} million people speak ${language}`;
console.log(countryDescription, countrySecondDescription);

//CODING CHALLENGE

let markWeight = 78;
let markHeight = 1.69;

let markBMI = markWeight / markHeight ** 2;

let johnWeight = 92;
let johnHeight = 1.95;

let johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);

// Template Literals

const firstSister = "Olena";
const secondSister = "Yulia";
const diffInAge = 1;

const desc = firstSister + " is older than " + secondSister + " on " + diffInAge + " year";
const secondDesc = `${firstSister} is older than ${secondSister} on ${diffInAge} years`;
console.log(desc, secondDesc);

// Code Challenge 2

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}!)`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}!)`);
}

//LECTURE: Logical Operators

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its
    capital city is ${capitalCity}`;
}

const country1 = describeCountry("Ukraine", 8, "Kyiv");
const country2 = describeCountry("France", 9, "Paris");
const country3 = describeCountry("Chech Republic", 10, "Prague");

console.log(country1, country2, country3);

// LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
  const worldPop = 7900;
  const persentOfPopulation = (population / 7900) * 100;
  return persentOfPopulation;
}
const chinaPercentOfPopul = percentageOfWorld1(1441);
const japanPercentOfPopul = percentageOfWorld1(2000);
const usPopulationOfPopul = percentageOfWorld1(3000);

console.log(chinaPercentOfPopul, japanPercentOfPopul, usPopulationOfPopul);

let percentageOfWorld2 = function (population) {
  const worldPop = 7900;
  const persentOfPopulation = (population / 7900) * 100;
  return persentOfPopulation;
};

const chinaPercentOfPopul2 = percentageOfWorld2(1441);
const japanPercentOfPopul2 = percentageOfWorld2(2000);
const usPopulationOfPopul2 = percentageOfWorld2(3000);

console.log(chinaPercentOfPopul2, japanPercentOfPopul2, usPopulationOfPopul2);

// LECTURE: Arrow Functions

const percentageOfWorld3 = (population) => {
  const worldPop = 7900;
  const persentOfPopulation = (population / 7900) * 100;
  return persentOfPopulation;
};
const chinaPercentOfPopul3 = percentageOfWorld3(1441);
const japanPercentOfPopul3 = percentageOfWorld3(2000);
const usPopulationOfPopul3 = percentageOfWorld3(3000);

console.log(chinaPercentOfPopul3, japanPercentOfPopul3, usPopulationOfPopul3);

// LECTURE: Functions Calling Other Functions

const percentageOfWorld4 = function (population) {
  const worldPop = 7900;
  const persentOfPopulation = (population / 7900) * 100;
  return persentOfPopulation;
};

const describePopulation = (country, population) => {
  const perscentOfTheCountry = percentageOfWorld4(population);
  return `${country} has ${population} million people, which is about ${perscentOfTheCountry} of the world`;
};

console.log(describePopulation("Italy", 1541));
console.log(describePopulation("China", 1641));
console.log(describePopulation("Spain", 1800));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(65, 54, 49);

console.log(dolphinsAverage, koalasAverage);

// const dolp
//  const checkWinner = (avgDolhins, avgKoalas)
