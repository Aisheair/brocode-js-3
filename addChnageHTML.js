// --------------- EXAMPLE 1 <h1> --------------

// STEP 1 CREAT THE ELEMENT

//     const newH1 = document.createElement("h1")
const newListItem = document.createElement("li")

// // STEP 2 ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut"
newListItem.id = "coconut"
newListItem.style.fontWeight = "bold"
newListItem.style.backgroundColor = "green"


// newH1.textContent = "i like pizza!"
// newH1.id = "myH1"
// newH1.style.color = "blue"
// newH1.style.textAlign = "center"

// // STEP 3 APPEND ELEMENT TO DOM
document.body.append(newListItem)
document.getElementById("fruits").append(newListItem)




// // document.body.append(newH1)
// // document.body.prepend(newH1)
// document.getElementById("box1").append(newH1)
// // document.getElementById("box1").prepend(newH1)

// const box3 = document.getElementById("box3")
// // document.body.insertBefore(newH1, box3)

// const boxes = document.querySelectorAll(".box")
// document.body.insertBefore(newH1, boxes[4])

// // REMOVE HTML ELEMENT

// document.getElementById("box1").removeChild(newH1)

















