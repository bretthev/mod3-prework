require ('es6-promise')

function attachTitle(word) {
  return 'DR. ' + word
}

let fulfilledPromise = Promise.resolve('MANHATTAN')

fulfilledPromise.then(attachTitle).then(console.log)
