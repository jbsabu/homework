const animals = ['bird','cat','dog']

function animalSound(animal){
    let sound = undefined
    switch (animal){
        case "cat":
            sound = "meow"
            break
            case 'dog':
            sound = "woof"
            break
            case 'bird':
            sound = "chirp"
            break
            default:

            sound = "none"
    }
    return sound
}

console.log(animalSound('bird'))

const fruits = {apple: 'red',banana: 'yellow',mango:'green',kiwi:'green'}

function getFruitColor(fruit){
    if (fruits[fruit]) {
        return fruits[fruit]
    }
}


console.log(getFruitColor('kiwi'))

function getSum(a,b){
    return a+b
}

console.log(getSum(1,3.14))     