
const myBtn = document.getElementById("myBtn")
myImg = document.getElementById("myImg")

myBtn.addEventListener("click", event =>{
    if(myImg.style.display === "none"){
        myImg.style.display = "block"
        myBtn.textContent = "Hide"
    }
    else{
    myImg.style.display = "none";
    myBtn.textContent = "show"
    }
})