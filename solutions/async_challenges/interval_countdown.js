// // Print numbers from 10 to 1 with delay of 1 second between each value being printed using setTimeout using pre ES6 features only

var i = 10

var interval = setInterval(function() {
  console.log(i)
  i -= 1
  if(i == 0) {
    clearInterval(interval)
  }
}, 1000)