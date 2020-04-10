const cardButton = document.querySelector('#card-button'); // находит элемент с id="card-button"
// console.log(cardButton);
const modal = document.querySelector(".modal"); // ищет среди всех элементов на странице элемент/ы с классом .modal
const close = document.querySelector(".close"); // ищет среди всех элементов на странице элемент/ы с классом .close

// cardButton.addEventListener('click', function(event) { // я слежу за кнопкой cardButton, чтобы случилось событие click, 
//     // когда случается это событие, будет выполняться эта анонимная функция {}
//     // console.log("click Корзина"); // проверка
//     modal.classList.add("is-open"); // у модального окна получить список классов и добавить туда свой класс is-open
//     // и у нас по клику открывается модальное окно
// })

// close.addEventListener('click', function(event) { // отслеживаем клик по .close
//     modal.classList.remove("is-open"); // удаляем класс is-open и у нас по клику закрывается модальное окно
// })

// можно объединить в одну функцию открывание и закрывание
function toggleModal() {
    modal.classList.toggle("is-open");
}

// тогда вызов будет
cardButton.addEventListener('click', toggleModal); //  когда случается клик по кнопке cardButton, вызываем функцию toggleModal
close.addEventListener('click', toggleModal); //  когда случается клик по кнопке сlose, вызываем функцию toggleModal

new WOW().init(); // инициализируем библиотеку wow.js - теперь можно анимировать карточки через wow вместо animated