require ('es6-promise')


let firstPromise = first()
let nextPromise = firstPromise.then(function(value) {
  return second(value)
})

nextPromise.then(console.log)
