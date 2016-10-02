function foo() {
  var bar
  quux = 1
  function zip() {
    let quux = 0
    bar = true
  }
  return zip
}
