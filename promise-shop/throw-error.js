require ('es6-promise')

function parsePromised (json) {
  return new Promise(function(fulfill, reject) {
    try {
      fulfill(JSON.parse(json))
    }
    catch (error) {
      reject(error)
    }
  })
}

parsePromised(process.argv[2]).then(null, console.log)
