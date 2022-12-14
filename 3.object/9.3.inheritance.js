let animal = {
    name: 'animal'
}

animal = new Object()
animal.name = 'animal'
//과제: 토끼를 object literal및 생성자로 만들어라.
//      토끼는 age = 3 property를 갖고있다.

let rabbit = {
    age: 3
}

rabbit = new Object()
rabbit.age = 3

console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(animal.name, rabbit.age)

rabbit.__proto__ = animal // 상속관계 rabbit은 animal이다
console.log(rabbit.__proto__)
console.log(rabbit.name, rabbit.age)

//
animal = {
    walk() {
        console.log('animal walk.')
    }
}

rabbit = {
    __proto__: animal
}

rabbit.walk()

//
let user = {
    name: 'user'
}

let administrator = {
    __proto__: user
}

console.log(administrator.name) //user

administrator.name = 'jonadan'
console.log(administrator.name) // jonadan

//
animal = {
    name: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.name} eat.`)
    }
}

rabbit = {
    name: 'rabbit',
    __proto__: animal
}

let lion = {
    name: 'lion',
    __proto__: animal
}

animal.eat() // animal eat
rabbit.eat() //rabbit eat
lion.eat() //lion eat

//
console.log(Object.keys(rabbit))

//과제 rabbit의 key들을 iterating해서 출력하라.
for(let key in rabbit){
    console.log(key)
}

for(let key in rabbit){
    let isOwn = rabbit.hasOwnProperty(key)
    if(isOwn) {
        msg = (`child's key: ${key}`)
    }else{
        msg = (`parent's key: ${key}`)
    }
    console.log(msg)
}