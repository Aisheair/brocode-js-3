// Async/Await : Async = makes a function return a promise 
//               Await = maks an async function wait for a promise 

//         Allows you write asynchronous code in a synchronous manner
//         async does't have resolve or reject parameters       
//         Everything after Await is placed in an event queue 

async function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = false;

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
            const trashout = true;

            if (trashout) {
                resolve("you take outtrash 🚮");
            }
            else{
                reject("YOU DID'T CLEAN THE TRASH")
            }
            
        }, 500);
    })
}

async function doChores() {
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        
        const cleanKItchenResult = await cleanKitchen();
        console.log(cleanKItchenResult);
        
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("everything done!!!");
    }
    catch(error){
        console.error(error);
    }
    
    
}
doChores()










