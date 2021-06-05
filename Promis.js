console.log("First");
function nam(nm){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Inside nam");
            resolve(nm);
        },2000);
    })
}
function hob(nm){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Inside hob");
            resolve(['computing','programming']);
        },1000);
    })
}

//const nm = nam('Tasin',(nm)=>{hob(console.log(nm),hobby=>{console.log(hobby);}) })

nam('Tasin').then(nm=>hob(nm)).then(h=>console.log(h))

console.log("End");
