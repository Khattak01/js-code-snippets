//list of bookings
const bookings = [
    { status: "accepted", _id: "6055cadd062eb5153c089121", title: "This is test title", user: "id", team: "id" },
    { status: "pending", _id: "6055cb33062eb5153c089122", title: "title1", description: "test description", user: "id", team: "id" },
    { status: "accepted", _id: "6055cb3d062eb5153c089123", title: "title2", description: "test description", user: "id", team: "id" }
]

//return index of the element if find else return -1 
const findIndex = (booking) => bookings.findIndex((b, index) => {
    if (b._id === booking._id) {
        return true
    }
})

//test 1
let booking = { status: "pending", _id: "6055cb33062eb5153c089122", title: "title2", description: "test description", user: "id", team: "id" }
console.log("index >>> ", findIndex(booking))
//output : 1

//test 2
booking = { status: "rejected", _id: "6055cb33062eb5153c089198", title: "title3", description: "test description", user: "id", team: "id" }
console.log("index >>> ", findIndex(booking))
//output : -1

//test 3
const id = '6055cb3d062eb5153c089123'
console.log("index >>> ", findIndex({ _id: id }))
//output : 2