
console.log('Perevirka')
// Отримання елементу з ідентифікатором items
let itemsDiv =document.getElementById("items"); 
//Перевірка існування знайденого блоку 
if (itemsDiv) { 
    //Вивід знайденого елементу 
    console.log(itemsDiv) 
    for (let i =0; i<=10; i++){
        itemsDiv.innerHTML += '<div class = "item"></div>'
    }
} else {
    //Вивід повідомлення про не знайдений блок 
    console.log('Блок товарів не знайдено')
} 