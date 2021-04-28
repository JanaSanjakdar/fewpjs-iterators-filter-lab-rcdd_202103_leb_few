// Code your solution here
const findMatching = (driversArray, string) => {
  return driversArray.filter(n => n.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (driversArray, string)=> {
return driversArray.filter(n => n.slice(0,string.length)===string)
}
const matchName = (driversArray, string)=> {
return driversArray.filter (n => n.name === string)
}
