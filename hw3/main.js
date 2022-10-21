function twoMass(number1 , number2) {
    if (number1 > number2){
        alert("number1 > number2")
    }else if (number1 < number2){
        alert("number1 < number2")
    }else {
        alert("===")
    }
}
const  number1 = [1212, 3434, 4545]
const  number2 = [6767, 7878, 2345, 4545, 6767]

twoMass(number1, number2)

function countChar(item) {
    console.log("длина массива",item.length)
}
countChar(number1)
countChar(number2)