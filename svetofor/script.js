// const svetofor = document.querySelector('.svetofor')
// const red = document.querySelector('.red')
// const yellow = document.querySelector('.yellow')
// const green = document.querySelector('.green')

// let color = 'green'

// setInterval(()=> {
//     color = color === 'red' ? 'green' : 'red'
// },4000)

// setInterval(()=> {
//     yellow.style.background = 'yellow'
//     red.style.background = 'none'
//     green.style.background = 'none'
// },2000)

// setInterval(()=> {
//     yellow.style.background = 'none'
//     if(color === 'red'){
//         red.style.background = 'none'
//         green.style.background = 'green'
//     }else{
//         red.style.background = 'red'
//         green.style.background = 'none'
//     }
// },4000)




const svetofor = document.querySelector('.svetofor')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

setInterval(()=> {
    green.style.background = '#ccc'
    red.style.background = '#ccc'
    yellow.style.background = 'yellow'
},2000)
let color = 'green'

setInterval(()=> {
    color = color === 'red' ? 'green' : 'red'
    yellow.style.background = '#ccc'
    if(color === 'red'){
        red.style.background = 'red'
        green.style.background = '#ccc'
    } else{
        red.style.background = '#ccc'
        green.style.background = 'green'
    }
},4000)
console.log('jfh');
// let date = new Date()
// date()
// console.log(date);
// console.log(getTime());















// ?
// function digitalRoot(num) {
//     let res = num.toString().split('')
//     let count = 0
//     for(let i = res; i< res.length; i++){
//         res.reduce((acc,el)=> acc + el)
//     }
//     // for(let key of res){
//     //     res = key + num
//     //     return res[key]

//     // }
//     // .reduce((acc,el)=> acc + el)
//     return res
//   }
//   console.log(digitalRoot(16));


// function isLetter(char) {
//     return /^[a-zA-Z]$/.test(char);
//   }
//   console.log(isLetter('7'));

// function sameCase(a, b){
//     if(/^[a-zA-Z]$/.test(a) === false || /^[a-zA-Z]$/.test(b) === false){
//         return -1
//     }else{
//         let str = a === a.toUpperCase() ? true : false 
//         let strb = b === b.toUpperCase() ? true : false 
//         return str === strb ? 1 : 0
//     }
// }
// console.log('kfj');
//   console.log(sameCase('','Y'));





// function hello(name) {
//     let str = arguments.length !== 0 ? name.length !== 0 ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() : 'World' : 'World' 
//     return `Hello, ${str}!`
//   }
//   console.log(hello('kjdfnksjYHF'))















// function sumOfDifferences(arr) {
//     let array = []
//     for(let i = 0; i< arr.length; i++){
//         array.push(arr[i] - arr[i + 1])
//     }
//     console.log(array);

//     return arr.length <= 1 ? 0 : array.filter((el)=> el).reduce((acc,el)=> acc + el)
// }
// console.log(sumOfDifferences([]));






// function digitalRoot(n) {
//     let res = n.toString().split('').reduce((acc,el)=> acc )
//     return res
//   }
//   console.log(digitalRoot(1657));


// let name = 'RidfksG'
// console.log(name.split('').sort())

function high(x){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    return x
}
console.log(high('man i need a taxi up to ubud'));