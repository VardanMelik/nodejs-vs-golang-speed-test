let process = require('process')
let fs = require('fs')


let start = Date.now()

fs.writeFile('javascript.txt', 'Hello', (error, data) => {
    if (error) {
        return console.log(error)
    }
    console.log(data)
})

for (let i=0; i < 10000000; i++ ) {
    const x_i = i;
    console.log('Index: ' + i, ' Value: ' + x_i )
}

console.log("Start: ", start)

let end = Date.now()
console.log("End: ", end)



function memoryUsageFunc() {
    for ( const [key, value] of Object.entries(process.memoryUsage())) {
        console.log(`Memory useage by ${key}, ${value/1000000}MB`)
    }
}

