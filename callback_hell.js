// callback Hell = situation in Javascript where callbacks
//                 are nested within other callbacks to the
//                 degree where the code is dificult to read.
//                 Old pattern to handle astynchronous function
//                 Use Promises + async/await to avoid Callback Hell

 function task1(callback){

    setTimeout(() => {
        console.log("Task 1 complete");
        callback()
    }, 2000);
      
 }

 function task2(callback){

        setTimeout(() => {
        console.log("Task 2 complete");
        callback()
    }, 1000);
    
    
 }

 function task3(callback){
    setTimeout(() => {
        console.log("Task 3 complete");
        callback()
    }, 3000);
    
    
 }

 function task4(callback){
    setTimeout(() => {
        console.log("Task 4 complete");
        callback()
    }, 1500);
    
 }

 task1(() => {
    task2(() =>{
        task3(()=>{
            task4(() =>{
                console.log("all task complete");
                
            })
        })
    })
 })










