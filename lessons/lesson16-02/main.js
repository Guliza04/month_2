const array = [
    {
        username:'Jack',
        full_name:'Jack barbaro'
    },  {
        username:'Jack',
        full_name:'Jack barbaro'
    }, {
        username:'Jack',
        full_name:'Jack barbaro'
    }, {
        username:'Jack',
        full_name:'Jack barbaro'
    },
    {
        username:'Jack',
        full_name:'Jack barbaro'
    }
]
// console.log(array[0].username,array[0].full_name)
// console.log(array[1].username,array[1].full_name)
// console.log(array[2].username,array[2].full_name)
// console.log(array[3].username,array[3].full_name)
// console.log(array[4].username,array[4].full_name)
// console.log(array[5].username,array[5].full_name)
//
// for (let i=0; i<array.length; i++){
//     continue.
//     console.log(array[i])
// };
//
// for (let user of array){
//     console.log(user) //элементы
// }
// const obj ={
//     key:'b1',
//     key:'b2',
//     key:'b3',
//     key:'b5',
//     key:'b6',
//     key:'b7',
// }
// for (let key in obj){
//     console.log(obj[key])
// }
//
// let i =0;
//
// while (i<5){
//     console.log("Hello")
// }

const users =[
    {
        username:'Jack',
        salary: 500
    },{
        username:'John',
        salary: 5000
    },{
        username:'Beka',
        salary: 10000
    }
]

const filteredUsers = users.filter(user =>user.salary > 500)
console.log(filteredUsers)
for (let user of users){
    if (user.salary >500){
        console.log(user)
    }
}