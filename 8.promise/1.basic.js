                        //executor(resolve, reject)
let promise = new Promise((resolve, reject) => resolve('done'))
/*
 //         resolve, reject
promise.then(console.log, console.log)
promise.then(console.log)

//          reject
promise.catch(console.log)

//          resolve, null
promise.then(console.log, null)
*/
//과제: 1초뒤에, resolve하도록 한다
promise = new Promise((resolve, reject) => { //executor
    setTimeout(() => resolve('done'), 1000)
})

promise.then(console.log, console.log) //handler

//
/*
promise = new Promise((resolve, reject) => {
     setTimeout(() => reject(new Error('에러')), 1000)
})

promise.then(result => console.log(result), 
    error => console.log(error))
*/
//
new Promise((resolve, reject) =>
    setTimeout(() => resolve('완성'), 2000))
    .then(console.log) //완성
    .finally(() => console.log('promise가 생성되었습니다.'))

new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('미완성')), 3000))
    .then(console.log)
    .catch(e => console.log(e.message)) //미완성
    .finally(() => console.log('promise가 생성되었습니다.'))