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