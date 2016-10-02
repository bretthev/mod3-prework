require ('es6-promise')

let promise = new Promise((fulfill) => {
  let fulfilledText = 'FULFILLED!'
  setTimeout( () => {
    fulfill(fulfilledText)}, 300)
  })

promise.then(console.log)
