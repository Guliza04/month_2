function seyHello () {
    console.log("hello")
}

seyHello();

function getFullName(user,age) {
    if (age < 18){
        console.log(user.first_name, user.last_name +" "+ "CLOSE")
        }  else{
        console.log(user.first_name, user.last_name +" "+ "OPEN")
    }

}

const Beka = {
    first_name: "Beka",
    last_name: "Aydarov"
}

getFullName(Beka, 19)

//
// const anonym = function () { //анонимная функция
//     console.log("text")
// }
// anonym();
//

function twoMass(arr1, arr2) { //завернуть функцию
    if (arr1.length > arr2.length){
        alert("arr1 > arr2")
    }else if (arr1.length<arr2.length){
        alert("arr1 < arr2")
    }else {
        alert("===")
    }

}
const arr1 = [1212, 32423, 4234]
const arr2 = [2357, 3677, 9821, 789987,678]

twoMass(arr1, arr2)


function tr() { //перамида
    let line = "*"
    while (line.length < 7){
        console.log(line)
        line = line + '*'
    }
}
tr()

