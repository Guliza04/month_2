// const blocks = document.getElementsByClassName('block')//брать элементы по классу
//console.log(blocks)
//
// const block3 = document.getElementById('block3')//брать элементы по id
// console.log(block3)

// block3.className = "changedClass"; //изменить название класса


// block3.classList.add("newClass") //classlist-список классов, add - добавить новый класс
// block3.classList.remove('block')//remove- удалить класс

// console.log(block3.classList)
//
// block3.onclick = () => {
//     block3.classList.toggle('active')
// }
//
// const list = [
//
// ]
//
// const onChangeButton = (id) => {
//     const item = list.findIndex(t => t.id === id)
//
//     const text = prompt('Введите текст для изменения')
//     list[item].text = text
//     render()
// // }
// const onDeleteButton = (id) => {
//     const item = list.findIndex(d => d.id === id)
//
//     list.splice(item, 1)
//     render()
// }
// //
// console.log(button)
// console.log(input)

function render() {
    const mDiv = document.createElement('div')
    mDiv.setAttribute('class','list')

    for (let i = 0; i < list.length; i++) {
        const div = document.createElement('div')
        div.setAttribute("class", 'block')
        const p = list[i].text;
        div.append(p)

        const buttons = document.createElement('div')
        buttons.setAttribute('class', 'actions')


        const deleteButton = document.createElement('button')
        deleteButton.innerText = "delete"
        deleteButton.onclick = () => {
            onDeleteButton(list[i].id)
        }

        const changeButton = document.createElement("button")
        changeButton.innerText = "change"
        changeButton.onclick = () => {
            onChangeButton(list[i].id)
        }
        buttons.append(changeButton, deleteButton)
        div.append(buttons)
        mDiv.append(div)
    }

    input.value = ""
    const form = document.querySelector('.form')
    document.querySelector('.list').remove()
    form.append(mDiv)
}


button.addEventListener('click', function () {
    const obj = {
        id: list.length+1,
        text: input.value
    }
    if (input.value === ''){
        return false
    }else {
        list.push(obj)
        render()
    }
})











