var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, add){
  return [add, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, add){
  array.unshift(add)
  return array
}

function addElementToEndOfArray(array, add){
  return [...array, add]
}

function destructivelyAddElementToEndOfArray(array, add){
  return array.push(add)
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
