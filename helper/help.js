module.exports = {
  sumAmount:(arr)=>{
    let sum = 0
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i].amount
    }
    return sum
  }
};