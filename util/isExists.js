
const objects = [
    { name: "obj0", id: "6055cadd062eb5153c089121", },
    { name: "obj1", id: "6055cb33062eb5153c089122", },
    { name: "obj2", id: "6055cb3d062eb5153c089123", }
]

//check if object find and return true else retun false
let isExists = (arr, obj) => arr.some((ele) => ele.id === obj.id);

//test 0
let obj = { name: 'test0', id: "6055cadd062eb5153c085321" }
console.log(isExists(objects, obj))

//test 1
obj = { name: 'test1', id: "6055cb33062eb5153c089122" }
console.log(isExists(objects, obj))

//test 2
console.log(isExists(objects, { id: "6055cadd062eb5153c089121" }))