// Самостоятельное задание! 
// Создадим массив объектов, который будет содержать данные о пользователях;
// В HTML документе создадим пустую таблицу, с заголовками 
// firstName lastName и age;
// Заполним таблицу данными, приходящими из массива.

// Дополнительное задание!
// Расширим функционал модального окна. 
// При добавлении пользователя через модальное окно, добавим полученный объект в массив пользователей.
// Снова отрисуем массив, уже с новым пользователем.

let data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
 ];
 tableDrow(data);

 function tableDrow(mass) {
    let $table = document.querySelector('.table');

    for(let el of mass) {
        $table.innerHTML += `<tr>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.age}</td>
        </tr>`;
    } 
 }

let $btnOk = document.getElementsByClassName('btn ok')[0];
$btnOk.addEventListener('click', function () {
    let newUser = [{
        firstName: document.querySelector('input[name="first-name"]').value,
        lastName: document.querySelector('input[name="last-name"]').value,
        age: document.querySelector('input[name="age"]').value
    }]
    data.push(newUser);
    tableDrow(newUser);
});
