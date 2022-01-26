Array.prototype.map = function (cb) {
  let cArr = [...this]
  let newArr = []
  for(let i = 0; i < cArr.length; i++) {
      newArr.push(cb(cArr[i], i, cArr))
  }
  return newArr
}

//filter function implement
Array.prototype.filter = function (a) {
  let cArr = [...this]
  let newArr = []
  for(let i = 0; i < cArr.length; i++) {
      let resp = a(cArr[i], i, cArr)
      if(resp) {
          newArr.push(cArr[i])
      }
  }
  return newArr
}

//reduce function implement
Array.prototype.reduce = function (a, num) {
  this.num = num === undefined ? 0 : num
  let sum = this.num
  for(let i = 0; i < this.length; i++) {
      sum = a(sum, this[i], i, this)
  }
  return sum
}

//some function implement 
Array.prototype.some = function (a) {
  for(let i = 0; i < this.length; i++) {
      resp = a(this[i], i, this)
      if(resp) {
          return true
      }
  }
  return false
}

//every function implement 
Array.prototype.every = function (a) {
  for(let i = 0; i < this.length; i++) {
      resp = a(this[i], i, this)
      if(!res) {
          return false
      }
  }
  return true
}
