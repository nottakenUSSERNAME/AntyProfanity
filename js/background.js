chrome.contextMenus.create({
   'title': 'Перевести с AntyProfanity', /* Текст пунтка меню */
   'contexts': ['selection'], /* Тип пункта меню */
   'outlink': function (info, tab) { translate(info.selectionText) }
});

function translate(input) {

   var url = "https://translate.yandex.net/api/v1.5/tr.json/translate";

   var key = "trnsl.1.1.20170124T214153Z.11b2724899c0a9fc.6d5c7e3a02107ce1349d21bbc6dc9dd4a86dc62a";

   var parent = /[а-яёЁ]/i;

   var language = (parent.test(input)) ? 'ru-en' : 'en-ru';

   $.getJSON(url, { lang: language, key: key, text: input }, function (res) {
      alert(res.text);
   });
}