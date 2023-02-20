// Print numbers from 1 to 10 with delay of 1 second between each value being printed
  const delayedLoop = (i) => {
    setTimeout(() => {
      console.log(i)
      i++
      if(i <= 10) {
        delayedLoop(i)
      }
    }, 1000)
  }

  delayedLoop(1)