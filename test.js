let start = Date.now()

for (let i=0; i < 10000000; i++ ) {
    console.log(i)
}

console.log("Start: ", start)

let end = Date.now()
console.log("End: ", end)