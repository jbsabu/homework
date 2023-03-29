// 1. Create a function that takes in a number of two-pointers 
// (shots made that count as 2 points each) and three-pointers (shots made that count as 3 points each) 
// made and returns a basketball team's total score. Invoke the function and console.log the results.

const getPoints = (twoPointer,threePointer) => {
  const twoPointers = twoPointer * 2
  const threePointers = threePointer * 3 
  return twoPointers + threePointers
}

const totalScore = getPoints(7,3)
