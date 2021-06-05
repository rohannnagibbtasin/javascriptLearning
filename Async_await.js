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
            resolve(['sex,fuck,suck']);
        },1000);
    })
}

//const nm = nam('Tasin',(nm)=>{hob(console.log(nm),hobby=>{console.log(hobby);}) })

// nam('Tasin').then(nm=>hob(nm)).then(h=>console.log(h))

async function t(){
    const nm = await nam('Tasin');
    const hobby = await hob(nm);
    console.log(hobby);
}

t();

console.log("End");
