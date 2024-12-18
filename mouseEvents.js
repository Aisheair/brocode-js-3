
// EventListener = Listen for specfic events to 
//                   creat intractive web pages
//                   events: click, mouseover, mouseout
//                   .addEventListener(event, callback);

const myBox = document.getElementById("mybox");
const myBtn = document.getElementById("myBtn")

myBtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "red"
    myBox.textContent = "OUCH! 🤕"
})
myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "Yellow"
    myBox.textContent = "Don,t Do It! 😟"
})
myBtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen"
    myBox.textContent = "Click me 😁"
})










