
const minuteToSeconds = (min)=>{
return Math.floor(min * 60)
}

const numArray = [31,23,22,18,19,27,137,246]

const getEvenSum = (arr)=>{
  let sum = 0
  for (i=0;i < arr.length;i++){
    let ind = arr[i]
    if (ind%2 === 0){
        sum+=ind
    }
  }
  return sum
}

console.log(minuteToSeconds(13))
console.log(getEvenSum(numArray))

// Database homework is done in index.js


// const childhoodFavorites = {
//   videogames: ["CounterStrike: Source","GTA: San Andreas","Minecraft",'Half life 2'],
//   boardgames: ["Chess"]

// }


// db.collection('favoriteGames').add(favorites)
//   .then((doc) => {
//     console.log('added doc: ' + doc.id)

//   })
//   .catch(err => console.log(err))