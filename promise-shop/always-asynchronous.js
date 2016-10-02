require ('es6-promise')

let promise = new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE')
  reject(new Error('this doesnt matter i dont think'))
})

function fullfilledPromise() {
  console.log('MAIN PROGRAM')
  console.log('PROMISE VALUE')
}

promise.then(fullfilledPromise)
