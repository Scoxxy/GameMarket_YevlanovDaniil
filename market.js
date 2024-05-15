// //Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')
// // Отримання елементу з ідентифікатором items
// let itemsDiv =document.getElementById("items"); 
//Визначення масиву товарів
let itemsArray = [
    'Газоноосарка 353',
    'Електричний тример 535',
    'Електрична газонокосарка 45',
    'Акумуляторний оприскувач 45',
    'Газоноосарка 79',
    'Електричний тример 09',
    'Електрична газонокосарка 98',
    'Акумуляторний оприскувач 64',
    'Газоноосарка 42',
    'Кайданюк Ілля 13',
    'Кравчук Іван 23 ',
    'Акумуляторний оприскувач 64 N',
]
//Отримання елементу з індифекатором items
let itemsDiv = document.getElementById("items");
//Перевірка існування знайденого блоку 
if (itemsDiv) { 
     //Створення блоків по кількості елементів масиву
itemsArray.forEach((item,index)=>{
    //Спеціальний апостроф - Англійська розкладка - біля кнопки 1 ~
    // console.log(item)
 // Виводимо на веб-сторінку елемент масиву в блок з класом item
 itemsDiv.innerHTML += `<div class="item">
 <h2>Товар №${index + 1} з ${itemsArray.length}</h2><p>${item}</p></div>`
})
    //Додавання відформатованого HTML коду в блок 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // for (let i =0; i<=100; i++){
    //     itemsDiv.innerHTML += '<div class = "item"></div>'
    // }
} else {
    //Вивід повідомлення про не знайдений блок 
    console.log('Блок товарів не знайдено')
} 


// //Виведення елементів відсортованого масиву
// itemsArray.sort().forEach((item,index) =>{
//     console.log(index + '-й елемент:',item)
// })
// //Сортування масиву
// itemsArray = itemsArray.sort()
// // Виведення в консоль масиву
// console.log(itemsArray)
// //Виведення в консоль елементів масиву
// for(let i = 0; i<itemsArray.length; i++){
//     console.log(itemsArray[i])
// }
// //Виведення в коносль номерів та значень елементів масиву
// for(let i = 0; i < itemsArray.length; i++){
//     console.log(i +'-й елемент: ', itemsArray[i])
// }