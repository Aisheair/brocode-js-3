// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using QuerySelectorAll()
//            Similar to an array, but no (map, filter, reduce) foreach
//            NodeList won't update to automatically reflect changes

let Btn = document.querySelectorAll(".myBtn");


// ADD HTML/CSS PROPERTIES

// Btn.forEach(button => {
//     button.style.backgroundColor = "green"
//     button.textContent += "😅"

// })

// CLICK event Listener

// Btn.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "red"
//     })
// })

// MOUSEOVER + MOUSEOUT event Listener

// Btn.forEach(button =>{
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(206, 100%, 40%)"
//     })
// })
// Btn.forEach(button =>{
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(206, 100%, 60%)"
//     })
// })

// ADD AN ELEMENT

// const newBtn = document.createElement("button") // STEP 1
//     newBtn.textContent = "Button 5"// STEP 2
//     newBtn.classList = "myBtn";
//     document.body.appendChild(newBtn) // STEP 3

// Btn = document.querySelectorAll(".myBtn")

// console.log(Btn);

// Remove An Element

Btn.forEach(button =>{
    button.addEventListener("click" , event =>{
        event.target.remove()
        Btn = document.querySelectorAll(".myBtn")
        console.log(Btn);

    })
})






