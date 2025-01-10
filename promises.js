// Promise = An Object that manages asynchronous operations.
//           Wrap a promise Object around (asynchronous code)
//           "I promise to return a value"
//           PENDING -> RESOLVED OR REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;

            if (dogwalked) {
                resolve("you walk the dog 🐕");
            }
            else{
                reject("YOU DID'T WALK THE DOG")
            }
        }, 1500);
    
    })
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cleanKitchen = true;

            if (cleanKitchen) {
                resolve("you clean the kitchen 🧹");
            }
            else{
                reject("YOU DID'T CLEAN THE KITCHEN")
            }
            
        }, 2500);
    })
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashout = false;

            if (trashout) {
                resolve("you take outtrash 🚮");
            }
            else{
                reject("YOU DID'T CLEAN THE TRASH")
            }
            
        }, 500);
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("u done with eberythimh!!!!!!!!")})
         .catch(error => console.error(error));

// callback hell!!!!!
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => console.log("you done with all the task")
//         )
//     })
// })





