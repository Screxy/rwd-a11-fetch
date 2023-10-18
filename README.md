# Посмотреть можно здесь
[Макет с rwd, a11, fetch, anime.js](http://maket.std-2264.ist.mospolytech.ru/ "Сайт")
## Лабораторная работа 10
### Fetch API
1. Галерея

* В галерее, используя AJAX, после загрузки страницы отправить запрос на получение изображений и отобразить их на странице. Если возникают какие-либо ошибки оповестить об этом пользователя с помощью компонента toast. На время пока ожидается ответ от сервера, показать загрузчик, после получения ответа загрузчик должен замениться на контент или должно появится сообщение об ошибке. Если пришел пустой массив, то на месте галереи должен отображаться текст “Изображения не найдены”.
* В начало этой же секции, добавить кнопку обновления, при нажатии на которую отправляет запрос на получение изображений, а работа с ошибками сохраняется как в предыдущем пункте.
* Все блоки изображений с подписями должны выглядеть одинаково, не смотря на размер изображения или длину текста. В один ряд помещается 4-изображения для этого используйте гриды из “нанобиблиотеки”

2. Температура
* Для отправки данных из формы предотвратите стандартное поведение формы, сформируйте собственный post-запрос с помощью fetch. Не забудьте в заголовках указать тип передаваемого контента (Content-Type) и отправить данные с правильными типами (строка и число).
* На время ожидания ответа от сервера заблокируйте возможность отправлять новые запросы из формы.
* При успешной обработке данных на сервере с помощью toast выведите сообщение из ответа и очистите форму. При ошибке, выведите сообщение ошибки в toast, но форму не очищайте.
## Лабораторная работа 8
### Anime.js
* Функция-конструктор, которая принимает DOM-элемент и параметры анимации и добавляет метод animate при вызове, которого добавляется анимация со случайным свойством из transform с помощью функции anime из библиотеки. Также по завершении анимации в консоль должна выводиться информация об элементе, на котором закончилась анимация.
*  Кнопка, при нажатии на которую на страницу добавляется новый элемент, для него создается новый объект с помощью функции-конструктора и вызывается метод animate для запуска анимации.
## Лабораторная работа 7
### Решенные задачи
* Задача №1 Сэндвичи с сыром
* Задача №2 Таблица умножения
* Задача №3 Цитата в рамочке
* Задача №4 Объединение массивов
* Задача №5 Счетчик уникальных значений массива
* Задача №6 Бургер-меню (Mobile Navigation Menu)
* Задача №7 Уведомления (Toasts)
## Лабораторная работа 6
### Что проверялось?
* Правильный язык для страницы;
* Правильная структура заголовков;
* Структура сайта с использованием landmarks;
* alt для изображений;
* Контраст текста относительно фона;
* Изменяемый размер текста;
* Предсказуемый tab order;
* Заметное выделение элементов в состоянии фокуса;
* Связанные label с полями формы;
* Адекватное отображение страницы при увеличении масштаба;
* Использование skip link;
* Масштабирование до 300%;
* Подписи у кнопок, ссылок или элементов форм с иконками.
#### Использованные инструменты для проверки *доступности*
* Lighthouse 
* wave.webaim.org
## Что исправлено/добавлено с 5 работы:
* атрибуты heigth и wegth у картинок
* span.visually-hidden у кнопок для слайдера