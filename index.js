// Code your solution here
const findMatching = (driversArray, string) => {
  return driversArray.filter(n => n.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (driversArray, string)=> {
return driversArray.filter(n => n.slice(0,string.length)===string)    //returns all drivers whose names begin with the provided letters
}
const matchName = (driversArray, string)=> {
return driversArray.filter (n => n.name === string)     //return each element whose name property matches the provided string argument
}
