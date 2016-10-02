require ('es6-promise')

let promise = new Promise((fulfill, reject) => {
  let rejectedText = 'REJECTED!'
  setTimeout(() => {
    reject(new Error(rejectedText))
  }, 300)
  })

function onReject(error) {
  console.log(error.message)
}

promise.then(console.log, onReject)
