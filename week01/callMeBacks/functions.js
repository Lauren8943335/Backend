const identity = function (name, DOB) {
console.log("name", name , "age", age)
  return(name, age)
};
console.log("Lauren", "30")

let arr = [1,2,3]

const first = function (arr) {
  if (arr.length === 0); 
  console.log(first,)

  if (index <0, index >=arr.length) 

  if (index= 0){ 
    return []; 
  } else if (index <0; index >= arr.length){ 
    return arr[index];
  } 

  if (arr=== 0) { 
    return []; 
  } else if (index >= arr.length){ 
    return arr; 
  } return arr[index]

};
let arr = [10,20,30]
const last = function (arr) { 
if(arr.length === 0 ){ 
} return arr[arr.length - 1 ]
};
console.log(last)
const each = function () {
  
};

const indexOf = function () {
  
};

let element = [1,2,3 ]
const map = function (element) {
console.log("element", element)
  return (element + 1)
}
console.log(element)

const filter = (collection, callback)=>{
  let result = []
  for(let item of collection){
    if(callback(item)){
      result.push(item)
    }
  }
  return result
}

const reject = (collection, callback)=>{
  let result = []
  for(let item of collection){
    if(!callback(item)){
      result.push(item)
    }
  }
  return result
}

const uniq = (collection) =>{
  let result = []
  for (let item of collection){
    if(result.indexOf(item) === -1){
      result.push(item)
    }
  }
  return result
}

const reduce = (collection, callback, initialVal) =>{
  let accumulator = initialVal
  for(let key in collection){
    if(accumulator === undefined){
      accumulator = collection[key]
    }
    accumulator = callback(accumulator, collection[key])
  }
  return accumulator
}

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter, 
  reject, 
  uniq, 
  reduce
};