// classList = Element property in JavaScatpt used to interact
//             with an element's list of classes (CSS Classes)
//             Allows you to make reusable classes for many elements
//             across your webpage.

// add()
// remove()
// toggle( Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

let button = document.querySelectorAll(".myButton");

button.forEach(button =>{
    button.classList.add("enabled")
})

button.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.classList.toggle("hover")
    })
})
button.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover")
    })
})

button.forEach(button => {
    button.addEventListener("click", event => {

        if (event.target.classList.contains("disabled")) {
            event.target.textContent += "🤬"
        }
        else{
        event.target.classList.replace("enabled", "disabled");

        }
    })
})


