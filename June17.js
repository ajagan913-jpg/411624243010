// console.log("A")
// setTimeout(()=>{
//     console.log("B")
// },0)
// console.log("C")


// console.log("A")
// setTimeout(()=>{
//     console.log("D")
// },2000)
//     setTimeout(()=>{
//         console.log("B")
//     })
// console.log("C")

function example(){
    console.log("hi")
}

const example1 = () =>{
    console.log("Hello")
}


console.log("A")
setTimeout(example,2000)
setTimeout(example1,0)
console.log("C")


const promise = new Promise((resolve,reject)=>{
    // const success = true;
    // if(success){
    //     console.log("Done")
    // }
    // else{
    //     console.log("Fail")
    // }

    setTimeout(()=>{
        console.log(1);      
    },2)
    console.log("3")

})

    promise.then(res=>[console.log(res)])
    .catch(err=>console.log(err))