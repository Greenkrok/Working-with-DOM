// Вывод модального окна.
// Скачать заготовку по ссылке;
// Сверстано модальное окно, для отображения требуется убрать (display: none) у .modal;
// Добавим функционал появления модального окна, по клику на кнопку “Add User”.

// Закрытие модального окна.
// Добавим функционал закрытия модального окна.
// по клику на знак “Х” в правом верхнем углу;
// по клику на кнопку “close”;
// При закрытии окна поля ввода должны очищаться.


// Открытие окна по клику на кнопку 'add user'
let $btn = document.getElementsByClassName('add-user')[0];
let $modal = document.getElementsByClassName('modal')[0];
let $inputs = document.querySelectorAll('input');
$btn.addEventListener('click', function () {
    $modal.classList.add('open');
});

// Закрытие окна по клику на крестик
let $close = document.getElementsByClassName('close')[0];
$close.addEventListener('click', function() {
    $modal.classList.remove('open');
    // Обнуление полей для ввода
    for(input of $inputs) {
        input.value = '';
    };
});

// Закрытие окна по клику на 'close'
let $btnClose = document.getElementsByClassName('btn close')[0];
$btnClose.addEventListener('click', function() {
    $modal.classList.remove('open');
    // Обнуление полей для ввода
    for(input of $inputs) {
        input.value = '';
    };
});

