console.log("Перевірка підключення файлу скриптів js");

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
    console.log(itemsDiv)
    for (let i = 0; i < 4; i++) {
        itemsDiv.innerHTML += `<div class = "item">${i + 1}</div>`
    }
    console.log('Поле classlist: ', itemsDiv.classList)
    console.log('Поле id:', itemsDiv.id)
    console.log('Поле clientWidth:', itemsDiv.clientWidth)
    console.log('Поле innerHTML:', itemsDiv.innerHTML)
} else {
    console.log('Блок товарів не знайдено')
}