$(document).ready(function () {

   $('#btn_submit').click(function (e) { /* Функция начнет свою работу, как только пользователь клинет по кнопке с id = "btn_submit" */

      translate($('#input').val());
   });
});

function translate(input) {

   var url = "https://translate.yandex.net/api/v1.5/tr.json/translate"; /* Обратите внимание, что ссылка по новому апи яндекса, начиная с версии 1.5 строится иначе, чем раньше */

   var key = "trnsl.1.1.20170124T214153Z.11b2724899c0a9fc.6d5c7e3a02107ce1349d21bbc6dc9dd4a86dc62a"; /* это ключ вашего приложения, который можно получить на официальном сайте яндекса, без него апи работать <b>не будет!</b>  https://tech.yandex.ru/keys/get/?service=trnsl (получение ключа)*/

   var parent = /[а-яёЁ]/i;

   var language = (parent.test(input)) ? 'ru-en' : 'en-ru';

   $.getJSON(url, { lang: language, key: key, text: input }, function (res) { /* Ответом мы получаем массив */
      $('#result').text("");
      for (var i in res.text) {
         $('#result').text($('#result').text() + res.text[i] + " ");
      }
   });
}

$("#input").keyup(function (event) {
   if (event.keyCode == 13) { /*13 - виртуальный код клавиши Enter*/
      $("#btn_submit").click();
   }
});

var options = document.getElementById("options");
if (options) {
   options.addEventListener("click", function () /* Начинаем ждать клика по панели footer */ {
      var range = document.createRange(); /* Возвращает новый объект типа Range. */
      var value = document.querySelector("#result");  /* Селектор выбирает элемент с id = "result" */
      range.selectNode(value); /* Выбор элемента */
      window.getSelection().addRange(range);

      try {
         var successful = document.execCommand('copy');
         var msg = successful ? 'successful' : 'unsuccessful';
         console.log('Copy email command was ' + msg);

      } catch (err) {
         console.log('Oops, unable to copy');
      }
      window.getSelection().removeAllRanges();
   });
}