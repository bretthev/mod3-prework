require ('es6-promise')

const promise = Promise.resolve('WOOO WE RESOLVED IN HERE')
promise.then(console.log)


const otherPromise = Promise.reject(new Error('DIKEMBE MUTUMBO'))
otherPromise.catch(console.log)
