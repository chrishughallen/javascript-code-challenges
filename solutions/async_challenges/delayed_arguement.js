// Create a function which receives a function as argument and executes it after 2 seconds

const delayedFunction = (fn) => {
  setTimeout(() => {
    fn()
  }, 2000)
}

const helloWorld = () => {
  console.log("Hello world!")
}

delayedFunction(helloWorld)