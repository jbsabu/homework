function multiplyTwo(a,b){
  return (a*b)
}



console.log(multiplyTwo(35,747))

let grades = {
  gradeIndex: {95:'A',85:'B',75:'C',65:"D",55:"F"},
  getGrade(num){
    let highestGrade = 0
    for (i = 55; (i < 100 && num >= i);i+=10){
      if (i <= num&&i > highestGrade&&num >= highestGrade){
        highestGrade = i 
      } 
    }
    let ind = (i > 100) ? i-10:i
    return this.gradeIndex[ind]
  },
}



console.log('grade:',grades.getGrade(50))

const array = ['firstItem','secondItem','thirdItem','fourthItem']

function getFirstIn(_array){
  return array[0]
}

console.log(getFirstIn(array))


// blocks here until file is read
