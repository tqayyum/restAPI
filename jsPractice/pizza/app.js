/*
1. Write a function called `makePizza`:
- have this function accept an array of toppings
- function should simulate waiting for pizza to be baked (use promises with setTimeout function)
  - wait 1 second to heat up the oven, regardless of number of passed toppings
  - wait for 0.5 seconds for each topping passed to the function
- when pizza is ready, resolve the promise with following result string: 
If called with makePizza(["Cheese", "Pepperoni", "Tomatoes"]), it should return "Here is your pizza with the toppings Cheese, Pepperoni, Tomatoes and it took 2.5 seconds to bake it."
2. Call the function, wait for promise to be resolved and output the result of the function in console
If you want to go the extra mile, add the following: if total bake time is >3 seconds, reject the promise with error message and handle the error message when calling the function.
*/

function makePizza(toppings) {
  return new Promise(function (resolve , reject){
    const timeToBake = 1000 + toppings.length * 500;
    if (timeToBake <= 3000) {
      setTimeout(function () {
        resolve(`Here is your pizza with the toppings ${toppings.join(', ')} and it took ${timeToBake} seconds to bake it.`)
      }, timeToBake)
    } else {
      reject('Exceeded max baking time!')
    }
  })
}

// makePizza(["Cheese", "Pepperoni", "Tomatoes"])
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => {
//     console.log(`Error ${error}`)
//   })

// makePizza(["Cheese", "Tomatoes"])
// .then(result => {
//   console.log(result)
// })

// makePizza(["Cheese", "Pepperoni", "Tomatoes", "Green Peppers"])
//   .then(result => {
//     console.log(result)
//   })

// makePizza(["Cheese", "Pepperoni", "Tomatoes", "Green Peppers", "Olives"])
// .then(result => {
//   console.log(result)
// })

// function wait (ms = 0) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms)
//   })
// }

// async function go(){
//   console.log("Starting")
//   await wait(2000)
//   console.log("Running")
//   await wait(1000)
//   console.log("Ending")
// }

// const goto  = async () => {
//   console.log("Starting")
//   await wait(2000)
//   console.log("Running")
//   await wait(1000)
//   console.log("Ending")
// }

// go()


async function makeDinner() {
  const pizza1 = makePizza(["Cheese", "Tomatoes"])
  const pizza2 = makePizza(["Cheese", "Tomatoes", "Mushroom"])
  const pizza3 = makePizza(["Cheese", "Tomatoes", "Pepperoni"])

  const [pizza1Result, pizza2Result, pizza3Result] = await Promise.all([pizza1, pizza2, pizza3])
  console.log(pizza1Result)
  console.log(pizza2Result)
  console.log(pizza3Result)

  
  // const resultOfPromiseAllArray = await Promise.all([pizza1, pizza2, pizza3])
  // console.log(resultOfPromiseAllArray)
  
  // console.log(pizza1)
  // console.log(pizza2)
  // console.log(pizza3)
}

makeDinner()