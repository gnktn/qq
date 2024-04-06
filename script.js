// if else if else
//switch
//? :  

// let year = 2015;

// if (year == 2016)
//     alert('yes!')
// else    
//     alert('no!')

// switch(true) {
//     case year == 2016:
//         alert('2134')
//         break;
//         case year > 2019:
//             alert('gg')
//             break;
//         default:
//             alert('tt')
// }
    
// let num = Math.PI > 4 ? "yes" : "no"
// alert(num)

//циклы while/ do while / for
let i = 0;

// while(true) 
//     {i++
//     if (i == 75)
//         break
//     if (i % 2 == 0)
//         continue
//     console.log(i)
// }

//когда знаем кол-во необходимых итераций
for (let i = 0; i < 5; i++)
    console.log(i)

    let arr = [] 
    let ar2 = new Array()

    let fruits = ["apple", "lemon"]

fruits[2] = "lime"
fruits.push('apple 2')

for (let i=0; i<fruits.length; i++) {
    console.log(i+ ': ' + fruits[i])
}

for (let fruit of fruits)
    console.log(fruit)

//объекты

let user = {
    name: 'John',
    age: 45,
    salary: [3000, 2000],

    sayHi() {
        console.log(`
            Имя: ${this.name},
            Возраст: ${this.age},
            zp: ${this.salary}
        `)
    }
}

user.sayHi()



function showMsg(from, text) {
    console.log(from + ": " + text) 
}

showMsg('anna', 'privet')

let msg = showMsg('egor', 'qq')
console.log(msg)

// let showMsg = function() { //стрелочная функция

// }

showMessage = (from, text) => console.log(from + " " + text)

showMessage('Glreb', '13232')


console.log(showMessage(33, 20))
console.log(showMessage(3, 2))


//let & const   -- разница 

// var width = 100
// console.log(width)
//var переменные могут быть переопределены,  а let не может быть переопределна (только если не находится в блоке)
// var width = 200
// console.log(width)

let width = 100;

width = 300

console.log(width) 
{
    let width = 200;
    console.log(width)
}


const ARR = [5, 6 , 7] //не изменяется константа
ARR.unshift(10) // Но добавлять/ менять элементы можно
console.log(ARR)

ARR[1] = 22
console.log(ARR)

//параметр по умолчанию default params in funcs

const sayMyName = function(age, name  = 'Alex') {
    console.log(age + ' : ' + name)
}

sayMyName(20)

//spread
const hey = 'hey'
const hey2 = [...hey]
console.log(hey)
console.log(hey2)

const a = [1,2,3,4,5]
const b = [...a,6,7,8,9]
console.log(b)

const c = [...a]
console.log(c)

const newObj = {...user}
console.log(newObj.sayHi())

//
const person = {
    fName: 'alex',
    dev: true,
    age: 16
}

// const name = person.fName
// const age = person.age

const { fName, age } = person

console.log(fName, age)


c.forEach((key, el) => {
    console.log(key + ' : ' + el)
})

for (let pers in person)
    console.log(pers + ": " + person[pers])
